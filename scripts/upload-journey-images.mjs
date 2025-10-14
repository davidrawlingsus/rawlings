import { put } from '@vercel/blob';
import { readFileSync } from 'fs';
import { join } from 'path';

const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

if (!BLOB_READ_WRITE_TOKEN) {
  console.error('Error: BLOB_READ_WRITE_TOKEN environment variable is not set');
  process.exit(1);
}

const journeyImages = [
  {
    filename: 'army me.png',
    pathname: 'journey/army-me.png'
  },
  {
    filename: 'me at CRE.png',
    pathname: 'journey/me-at-cre.png'
  },
  {
    filename: 'marketably me.png',
    pathname: 'journey/marketably-me.png'
  }
];

async function uploadImages() {
  console.log('Starting upload of journey images to Vercel Blob...\n');

  for (const image of journeyImages) {
    try {
      const imagePath = join(process.cwd(), 'public', 'images', image.filename);
      const imageBuffer = readFileSync(imagePath);
      
      console.log(`Uploading ${image.filename}...`);
      
      const blob = await put(image.pathname, imageBuffer, {
        access: 'public',
        token: BLOB_READ_WRITE_TOKEN,
      });
      
      console.log(`✓ Uploaded: ${blob.url}\n`);
    } catch (error) {
      console.error(`✗ Error uploading ${image.filename}:`, error.message);
    }
  }
  
  console.log('Upload complete!');
}

uploadImages();

