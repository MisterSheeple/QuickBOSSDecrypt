const fs = require('node:fs');
const boss = require('@pretendonetwork/boss-crypto');
let help;
let filename;
let BOSS_AES_KEY;

const platform = "js";

// NOTE: You can uncomment the following line and fill in the BOSS AES key to avoid having to enter it manually for every command.
// BOSS_AES_KEY = "boss_aes_key_goes_here"

if (platform == "win64") {
    if (BOSS_AES_KEY == null) {
        help = `Usage: QuickBOSSDecrypt.exe <file> <BOSS AES key>`;
    } else {
        help = `Usage: QuickBOSSDecrypt.exe <file>`;
    };
} else if (platform == "unixlike") {
    if (BOSS_AES_KEY == null) {
        help = `Usage: ./QuickBOSSDecrypt <file> <BOSS AES key>`;
    } else {
        help = `Usage: ./QuickBOSSDecrypt <file>`;
    };
} else if (platform == "js") {
    if (BOSS_AES_KEY == null) {
        help = `Usage: node QuickBOSSDecrypt.js <file> <BOSS AES key>`;
    } else {
        help = `Usage: node QuickBOSSDecrypt.js <file>`;
    };
};

process.argv.forEach(function (val, index, array) {
    if (array.length < 3 || array.length > 4 || array.length == 3 && BOSS_AES_KEY == null || val == "--help" || val == "-h") {
        console.log(help);
        process.exit(0);
    } else if (index == 2) {
        filename = val;
    } else if (index == 3) {
        if (BOSS_AES_KEY == null) {
            BOSS_AES_KEY = val;
        };
    };
});

if (!fs.existsSync(filename)) {
    console.log("Error: File not found.");
    process.exit(1);
};

const { payload_contents } = boss.decrypt3DS(filename, BOSS_AES_KEY);

fs.writeFileSync(filename + ".dec", payload_contents[0].content);
console.log("Successfully decrypted file.");
