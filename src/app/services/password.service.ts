import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class PasswordService {

  constructor() { }

  encrypted(plainText) {
    const ic = 1000;
    const ks = 128;


    const iv = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
    const salt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);

    const pp = 'coreflex'; // passphrase or key.
    const encrypted = this.cipherText(salt, iv, pp, plainText);
    // console.log('ennnn=====' + encrypted);

   // let de = this.decrypt(salt, iv, pp, encrypted);
    // console.log("decry====" + de);

    const seperator = '__babacd_dcabab__';
    const allValuesForencryption = [encrypted, iv, salt, pp, ic, ks];

    let lastString = '';
    for (let i = 0; i < allValuesForencryption.length; i++) {
      if (i !== allValuesForencryption.length - 1) {
        lastString = lastString + allValuesForencryption[i] + seperator;
      } else {
        lastString = lastString + allValuesForencryption[i];
      }
    }
    // console.log("ennnn=====" + lastString);
    return lastString;
  }

  generateKey(salt, passPhrase) {
    const key = CryptoJS.PBKDF2(
      passPhrase,
      CryptoJS.enc.Hex.parse(salt),
      { keySize: (128 / 32), iterations: 1000 });
    return key;
  }

  cipherText(salt, iv, passPhrase, plainText) {
    const key = this.generateKey(salt, passPhrase);
    const encrypted = CryptoJS.AES.encrypt(
      plainText,
      key,
      { iv: CryptoJS.enc.Hex.parse(iv) });
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  }

  decrypt(salt, iv, passPhrase, cipherText) {
    const key = this.generateKey(salt, passPhrase);
    const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(cipherText)
    });
    const decrypted = CryptoJS.AES.decrypt(
      cipherParams,
      key,
      { iv: CryptoJS.enc.Hex.parse(iv) });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
