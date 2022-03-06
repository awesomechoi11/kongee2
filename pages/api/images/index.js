import fs from 'fs';
import path from 'path';

var mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript',
};

export default function (req, res) {
  const filePath = path.join(process.cwd(), `/public/nameBanner.jpg`);
  console.log(filePath);
  var type = mime[path.extname(filePath).slice(1)] || 'text/plain';
  try {
    const imageBuffer = fs.readFileSync(filePath);

    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (e) {
    res.status(400).json({ error: true, message: 'Image not found' });
  }
}
