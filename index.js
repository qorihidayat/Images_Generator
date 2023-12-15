const fs = require('fs');
const download = require('download');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let run = true;
const sleep = ms => new Promise(r => setTimeout(r, ms));

rl.question('Size (default:1024x700) : ', (size) => {
    rl.question('Title (default:computer) :', (name) => {
        size = (size == "") ? "1024x700" : size;
        name = (name == "") ? "computer" : name;
        (async () => {
            await download(`https://source.unsplash.com/${size}?${name}`, 'dist');
            console.log("Gambar Tersedia di folder dist..");
            await sleep(3000);
        })();
        rl.close();
    })
})




