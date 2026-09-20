const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folderPath = './public/images/marquee';

const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.webp'));

files.forEach(file => {
  const filePath = path.join(folderPath, file);
  const outputFile = file.replace('.webp', '.png');
  
  sharp(filePath)
    .png()
    .toFile(path.join(folderPath, outputFile))
    .then(() => console.log(`✅ Converted: ${file} → ${outputFile}`))
    .catch(err => console.log(`❌ Error: ${file}`, err));
});