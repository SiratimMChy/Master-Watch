const fs = require('fs');
fetch('https://unsplash.com/photos/a-watch-on-a-wrist-vRcSC-UN3yI', {headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'}})
  .then(r => r.text())
  .then(t => {
    const m = t.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/);
    if(m) {
        fs.writeFileSync('url.txt', m[0]);
        console.log("Success:", m[0]);
    } else {
        console.log("Not found in HTML");
    }
  });
