import { put } from '@vercel/blob';
import { PrismaClient } from '@prisma/client';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

async function uploadLogosToBlob() {
  console.log('🚀 Starting logo upload to Vercel Blob...\n');

  const imagesDir = join(process.cwd(), 'public', 'images');
  const imageFiles = readdirSync(imagesDir).filter(file => 
    file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.webp')
  );

  console.log(`📁 Found ${imageFiles.length} logo images in /public/images/\n`);

  const uploadedUrls: Record<string, string> = {};

  for (const filename of imageFiles) {
    try {
      const filePath = join(imagesDir, filename);
      const fileBuffer = readFileSync(filePath);
      
      console.log(`⬆️  Uploading ${filename}...`);
      
      const blob = await put(`logos/${filename}`, fileBuffer, {
        access: 'public',
        addRandomSuffix: false,
      });

      uploadedUrls[`/images/${filename}`] = blob.url;
      console.log(`   ✅ Uploaded: ${blob.url}\n`);
      
    } catch (error) {
      console.error(`   ❌ Failed to upload ${filename}:`, error);
    }
  }

  console.log('\n📝 Updating database with new URLs...\n');

  // Update all logos with new blob URLs
  const logos = await prisma.logo.findMany();
  
  for (const logo of logos) {
    if (uploadedUrls[logo.imageUrl]) {
      await prisma.logo.update({
        where: { id: logo.id },
        data: { imageUrl: uploadedUrls[logo.imageUrl] },
      });
      console.log(`✅ Updated ${logo.name}: ${uploadedUrls[logo.imageUrl]}`);
    }
  }

  console.log('\n🎉 All logos uploaded and database updated!');
  await prisma.$disconnect();
}

uploadLogosToBlob()
  .catch((error) => {
    console.error('❌ Upload failed:', error);
    process.exit(1);
  });

