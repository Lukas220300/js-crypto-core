import {CryptoType} from "./CryptoType";

export interface AsymmetricCryptoType extends CryptoType {
    generateNewKePair(): Promise<CryptoKeyPair>
    encrypt(key: CryptoKey, encodedMessage: Uint8Array): Promise<ArrayBuffer>
    decrypt(key: CryptoKey, cipher: ArrayBuffer|Uint8Array): Promise<ArrayBuffer>
    importKey(format: string, keyData: ArrayBuffer | Uint8Array | JsonWebKey, privateKey: boolean, algorithm: RsaHashedImportParams): Promise<CryptoKey>
}