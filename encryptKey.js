require('dotenv').config();
const ethers = require('ethers');
const fs = require('fs');

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encryptedKeyJson = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD,
        process.env.PRIVATE_KEY
    );

    fs.writeFileSync('./.encryptedKey.json', encryptedKeyJson);

    console.log(encryptedKeyJson);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
