#!/bin/bash

echo "🚀 Uploading logos to Vercel Blob Storage..."
echo ""

# Directory containing the logos
IMAGES_DIR="public/images"

# Counter
UPLOADED=0

# Loop through all logo files
for file in "$IMAGES_DIR"/*.{png,jpg,jpeg,webp}; do
  # Skip if glob doesn't match
  [ -f "$file" ] || continue
  
  # Get just the filename
  filename=$(basename "$file")
  
  echo "⬆️  Uploading: $filename"
  
  # Upload to Vercel Blob using vercel CLI
  vercel blob upload "$file" --token "$BLOB_READ_WRITE_TOKEN" --yes
  
  if [ $? -eq 0 ]; then
    ((UPLOADED++))
    echo "   ✅ Success"
  else
    echo "   ❌ Failed"
  fi
  echo ""
done

echo "✨ Upload complete! Uploaded $UPLOADED files."

