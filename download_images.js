const https = require('https');
const fs = require('fs');
const path = require('path');

const doctors = [
  { name: 'reshma', url: 'https://imagesx.practo.com/providers/dr-reshma-kousar-mansoor-dental-surgeon-bangalore-8bbd9b1c-e439-48d0-988b-8f0340c86c57.jpg' },
  { name: 'suhail', url: 'https://imagesx.practo.com/providers/dr-mohammed-suhail-mirza-endodontist-bangalore-bf8a1e44-406f-4533-b86d-6dfe58067cb3.jpg' },
  { name: 'akhil', url: 'https://imagesx.practo.com/providers/dr-akhil-sankar-oral-and-maxillofacial-surgeon-bangalore-615be828-457a-40f6-980a-d804173315d2.jpg' },
  { name: 'vikas', url: 'https://imagesx.practo.com/providers/dr-vikas-v-dentist-bangalore-f6ecc774-13bb-4a29-8272-5818b7e8163e.jpg' },
  { name: 'shraddha', url: 'https://imagesx.practo.com/providers/dr-shraddha-durgan-pediatric-dentist-bangalore-b663709a-2a00-4913-9b06-b7f89d6be11f.jpg' }
];

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Referer': 'https://www.practo.com/',
  'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'image',
  'Sec-Fetch-Mode': 'no-cors',
  'Sec-Fetch-Site': 'cross-site'
};

const dir = path.join(__dirname, 'public', 'doctors');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

doctors.forEach(doc => {
  const file = fs.createWriteStream(path.join(dir, `${doc.name}.jpg`));
  https.get(doc.url, { headers }, (response) => {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${doc.name}`);
      });
    } else {
      console.error(`Failed to download ${doc.name}: ${response.statusCode}`);
      file.close();
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${doc.name}: ${err.message}`);
  });
});
