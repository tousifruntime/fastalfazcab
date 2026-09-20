const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folderPath = './public/images/Galary';

const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.png'));

files.forEach(file => {
  const filePath = path.join(folderPath, file);
  const outputFile = file.replace('.png', '.webp');
  
  sharp(filePath)
    .webp({ quality: 80 })
    .toFile(path.join(folderPath, outputFile))
    .then(() => console.log(`✅ Converted: ${file} → ${outputFile}`))
    .catch(err => console.log(`❌ Error: ${file}`, err));
});