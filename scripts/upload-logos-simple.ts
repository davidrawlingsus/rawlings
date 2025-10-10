import { config } from 'dotenv';
import { put, list } from '@vercel/blob';
import { PrismaClient } from '@prisma/client';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

// Load environment variables from .env.local
config({ path: '.env.local' });

const prisma = new PrismaClient();

async function uploadLogosToBlob() {
  console.log('🚀 Starting logo upload to Vercel Blob...\n');

  // Check if BLOB_READ_WRITE_TOKEN exists
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ BLOB_READ_WRITE_TOKEN not found in environment variables');
    console.log('\n📝 To fix this:');
    console.log('1. Go to https://vercel.com/dashboard');
    console.log('2. Select your project');
    console.log('3. Go to Storage → logos-storage');
    console.log('4. Copy the BLOB_READ_WRITE_TOKEN');
    console.log('5. Add it to your .env.local file:');
    console.log('   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...');
    console.log('\nThen run this script again.');
    process.exit(1);
  }

  const imagesDir = join(process.cwd(), 'public', 'images');
  const imageFiles = readdirSync(imagesDir).filter(file => 
    file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.webp')
  );

  console.log(`📁 Found ${imageFiles.length} logo images in /public/images/\n`);

  const uploadedUrls: Record<string, string> = {};
  let successCount = 0;

  for (const filename of imageFiles) {
    try {
      const filePath = join(imagesDir, filename);
      const fileBuffer = readFileSync(filePath);
      
      console.log(`⬆️  Uploading ${filename}...`);
      
      const blob = await put(`logos/${filename}`, fileBuffer, {
        access: 'public',
        addRandomSuffix: false,
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });

      uploadedUrls[`/images/${filename}`] = blob.url;
      successCount++;
      console.log(`   ✅ ${blob.url}\n`);
      
    } catch (error) {
      console.error(`   ❌ Failed to upload ${filename}:`, error);
    }
  }

  console.log(`\n📊 Uploaded ${successCount}/${imageFiles.length} images`);
  console.log('\n📝 Updating database with new URLs...\n');

  // Update all logos with new blob URLs
  const logos = await prisma.logo.findMany();
  let updatedCount = 0;
  
  for (const logo of logos) {
    if (uploadedUrls[logo.imageUrl]) {
      await prisma.logo.update({
        where: { id: logo.id },
        data: { imageUrl: uploadedUrls[logo.imageUrl] },
      });
      console.log(`✅ Updated ${logo.name}`);
      updatedCount++;
    }
  }

  console.log(`\n🎉 Complete! Updated ${updatedCount} logos in database.`);
  await prisma.$disconnect();
}

uploadLogosToBlob()
  .catch((error) => {
    console.error('❌ Upload failed:', error);
    process.exit(1);
  });

