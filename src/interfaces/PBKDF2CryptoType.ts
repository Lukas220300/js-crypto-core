import {CryptoType} from "./CryptoType";

export interface PBKDF2CryptoType extends CryptoType {
    getNewSalt(): Uint8Array
    getKeyFromPassword(encodedPassword: Uint8Array, salt: Uint8Array): Promise<CryptoKey>
    importKey(keyData: ArrayBuffer | Uint8Array | JsonWebKey, format: string): Promise<CryptoKey>
}