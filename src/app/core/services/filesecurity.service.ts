import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';



const IV_LENGTH = 16; // For AES always 16

@Injectable()
export class FileSecurityService {

  constructor() {}

  public encryptFile(sFileData: string, sKey: string): string {

    var bdata = sFileData;
    var keyUtf8 = CryptoJS.enc.Utf8.parse(sKey);
    var encrypted = CryptoJS.AES.encrypt(bdata, keyUtf8);

    return encrypted.toString(CryptoJS.enc.Base64);
  }

  public encryptFileIv(sFileData: string, sKey: string): string {

    var bdata = sFileData;
    var keyUtf8 = CryptoJS.enc.Utf8.parse(sKey);
    var iv = CryptoJS.lib.WordArray.random(IV_LENGTH);
    var encrypted = CryptoJS.AES.encrypt(bdata, keyUtf8, {
      iv: iv
    });

    return CryptoJS.enc.Base64.parse(iv.concat(encrypted.ciphertext).toString());
  }

  public decryptFile(sFileData: string, sKey: string): string {

    var bdata = sFileData;
    var keyUtf8 = CryptoJS.enc.Utf8.parse(sKey);
    var decrypted = CryptoJS.AES.decrypt(bdata, keyUtf8);

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  public decryptFileIv(sFileData: string, sKey: string): string {

    var bdata = sFileData;
    var keyUtf8 = CryptoJS.enc.Utf8.parse(sKey);

    var ciphertext = CryptoJS.enc.Base64.parse(bdata);

    // split IV and ciphertext
    var iv = ciphertext.clone();
    iv.sigBytes = 16;
    iv.clamp();
    ciphertext.words.splice(0, 4); // delete 4 words = 16 bytes
    ciphertext.sigBytes -= 16;

    // decryption
    var decrypted = CryptoJS.AES.decrypt(ciphertext, keyUtf8, {
      iv: iv
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

}