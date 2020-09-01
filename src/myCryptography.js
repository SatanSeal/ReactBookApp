const crypto = require('crypto');
require('dotenv').config();

//const key = crypto.randomBytes(32);
//const iv = crypto.randomBytes(16);
const key = process.env.CRYPTKEY;
const iv = process.env.CRYPTIV;

function encrypt(text) {
 let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
 let encrypted = cipher.update(text);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 return encrypted.toString('hex');
}

function decrypt(text) {
 let encryptedText = Buffer.from(text, 'hex');
 let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return decrypted.toString();
}

function littleEncryption(text){
    let splited = text.split('.');
    let encryptedText = splited[0] + crypto.randomBytes(4).toString('hex') + '.' + splited[1] + crypto.randomBytes(4).toString('hex') + '.' + splited[2] + crypto.randomBytes(4).toString('hex');
    return encryptedText;
};

function littleDecryption(text){
    let splited = text.split('.');
    let decryptedText = splited[0].slice(0, splited[0].length-8) + '.' + splited[1].slice(0, splited[1].length-8) + '.' + splited[2].slice(0, splited[2].length-8);
    return decryptedText;
};

module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;
module.exports.littleEncryption = littleEncryption;
module.exports.littleDecryption = littleDecryption;

/*
example

const text = 'J.W.T';
console.log(text);
const le = crypt.littleEncryption(text);
console.log(le);
const ele = crypt.encrypt(le);
console.log(ele);
const dele = crypt.decrypt(ele);
console.log(dele);
const lddele = crypt.littleDecryption(dele);
console.log(lddele);
*/