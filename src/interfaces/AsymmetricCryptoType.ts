import {CryptoType} from "./CryptoType";

export interface AsymmetricCryptoType extends CryptoType {
    generateNewKePair(): Promise<CryptoKeyPair>
    encrypt(key: CryptoKey, encodedMessage: Uint8Array): Promise<ArrayBuffer>
    decrypt(key: CryptoKey, cipher: ArrayBuffer|Uint8Array): Promise<ArrayBuffer>
}