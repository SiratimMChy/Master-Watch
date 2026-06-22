const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/products.json', 'utf-8'));
const filtered = data.filter(p => p.category !== 'Accessories');
fs.writeFileSync('public/products.json', JSON.stringify(filtered, null, 2));
console.log('Removed Accessories from JSON');
