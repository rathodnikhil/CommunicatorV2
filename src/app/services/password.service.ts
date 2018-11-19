import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class PasswordService {

  constructor() { }

  encrypted(plainText) {
    let ic = 1000;
    let ks = 128;


    let iv = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
    let salt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);

    let pp = "coreflex"; //passphrase or key.
    let encrypted = this.cipherText(salt, iv, pp, plainText)
    console.log("ennnn=====" + encrypted);

   // let de = this.decrypt(salt, iv, pp, encrypted);
    //console.log("decry====" + de);

    let seperator = "__babacd_dcabab__"
    let allValuesForencryption = [encrypted, iv, salt, pp, ic, ks];

    let lastString = ""
    for (var i = 0; i < allValuesForencryption.length; i++) {
      if (i !== allValuesForencryption.length - 1) {
        lastString = lastString + allValuesForencryption[i] + seperator
      } else {
        lastString = lastString + allValuesForencryption[i]
      }
    }
    console.log("ennnn=====" + lastString);
    return lastString;
  }

  generateKey(salt, passPhrase) {
    var key = CryptoJS.PBKDF2(
      passPhrase,
      CryptoJS.enc.Hex.parse(salt),
      { keySize: (128 / 32), iterations: 1000 });
    return key;
  }

  cipherText(salt, iv, passPhrase, plainText) {
    var key = this.generateKey(salt, passPhrase);
    var encrypted = CryptoJS.AES.encrypt(
      plainText,
      key,
      { iv: CryptoJS.enc.Hex.parse(iv) });
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  }

  decrypt(salt, iv, passPhrase, cipherText) {
    var key = this.generateKey(salt, passPhrase);
    var cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(cipherText)
    });
    var decrypted = CryptoJS.AES.decrypt(
      cipherParams,
      key,
      { iv: CryptoJS.enc.Hex.parse(iv) });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
 

}
