import {CryptoType} from "./CryptoType";

export interface SymmetricCryptoType extends CryptoType {
    generateNewKey(): Promise<CryptoKey>
    generateNewInitializeVector(): Uint8Array
    encrypt(iv: Uint8Array, key: CryptoKey, encodedMessage: Uint8Array): Promise<ArrayBuffer>
    decrypt(iv: Uint8Array, key: CryptoKey, cipher: ArrayBuffer|Uint8Array): Promise<ArrayBuffer>
    importKey(keyData: ArrayBuffer | Uint8Array | JsonWebKey, format: string): Promise<CryptoKey>
}