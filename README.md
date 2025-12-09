# QuickBOSSDecrypt

An application for quickly and conveniently decrypting BOSS data for the 3DS. **This tool does not decrypt Wii U BOSS data.**

This application requires the 3DS BOSS AES normalkey, which is located at the 0x38 keyslot. For legal reasons, this project will not provide you with that key.

## Usage

### Node

```
npm i
node QuickBOSSDecrypt.js <file> <BOSS AES key>
```

### Windows binaries

```
QuickBOSSDecrypt.exe <file> <BOSS AES key>
```

### Mac/Linux binaries

```
./QuickBOSSDecrypt <file> <BOSS AES key>
```

## License

This project is made available under the [LGPLv3](https://github.com/MisterSheeple/QuickBOSSDecrypt/blob/master/LICENSE) license.

This project's binaries include Node.js, which is made available under the MIT license. For more information, see the included node.js_LICENSE.txt in the binary zip.

This project's binaries include [boss-crypto](https://github.com/PretendoNetwork/boss-crypto), which is available under the [LGPLv3](https://github.com/PretendoNetwork/boss-crypto/blob/master/LICENSE) license. Source code in binaries is unmodified from commit `9124c3c8cb4868a4885c11b9e3876c047784f0d1` in the linked source repository.
