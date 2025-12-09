const fs = require('node:fs');
const boss = require('@pretendonetwork/boss-crypto')

const platform = "js"

let help
let filename
let BOSS_AES_KEY

if (platform == "win64") {
    help = `Usage: QuickBOSSDecrypt.exe <file> <BOSS AES key>`;
} else if (platform == "unixlike") {
    help = `Usage: ./QuickBOSSDecrypt <file> <BOSS AES key>`;
} else if (platform == "js") {
    help = `Usage: node QuickBOSSDecrypt.js <file> <BOSS AES key>`;
};

process.argv.forEach(function (val, index, array) {
    if (array.length != 4 || val == "--help" || val == "-h") {
        console.log(help);
        process.exit(0);
    } else if (index == 2) {
        filename = val;
    } else if (index == 3) {
        BOSS_AES_KEY = val;
    }
});

if (!fs.existsSync(filename)) {
    console.log("Error: File not found.");
    process.exit(1);
};

const { payload_contents } = boss.decrypt3DS(filename, BOSS_AES_KEY);

fs.writeFileSync(filename + ".dec", payload_contents[0].content);
console.log("Successfully decrypted file.")
