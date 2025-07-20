// Node.js script to generate gallery-images.json for all service categories
const fs = require('fs');
const path = require('path');

// Define the gallery folders relative to the project root
const galleries = {
  'luxury_accomodation': 'assets/photos/luxury_accomodation',
  'in_house_catering_n_Decor': 'assets/photos/in_house_catering_n_Decor',
  'corporate_space': 'assets/photos/corporate_space',
  'parking_space': 'assets/photos/parking_space'
};

const output = {};

for (const [key, folder] of Object.entries(galleries)) {
  const absFolder = path.resolve(__dirname, '..', folder);
  let files = [];
  try {
    files = fs.readdirSync(absFolder)
      .filter(f => !fs.statSync(path.join(absFolder, f)).isDirectory())
      .filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f));
  } catch (err) {
    console.error(`Error reading folder ${folder}:`, err);
  }
  output[key] = files;
}

const outputPath = path.resolve(__dirname, '../gallery-images.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log('gallery-images.json generated successfully!');
