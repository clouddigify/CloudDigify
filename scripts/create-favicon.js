const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createFavicon() {
  try {
    const inputPath = path.join(__dirname, '../public/images/logo.png');
    const outputPath = path.join(__dirname, '../public/favicon.ico');
    
    // Create 16x16, 32x32 and 48x48 favicon from the logo
    await sharp(inputPath)
      .resize(32, 32)
      .toFile(outputPath);
    
    console.log('Favicon created successfully at', outputPath);
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createFavicon(); 