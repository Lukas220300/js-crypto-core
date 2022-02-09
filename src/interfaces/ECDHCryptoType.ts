import {CryptoType} from "./CryptoType";

export interface ECDHCryptoType extends CryptoType {
    generateNewKePair(): Promise<CryptoKeyPair>
    generateSharedSecret(alicePrivateKey: CryptoKey, bobPublicKey: CryptoKey): Promise<CryptoKey>
    generateNewInitializeVector(): Uint8Array
    encrypt(iv: Uint8Array, key: CryptoKey, encodedMessage: Uint8Array): Promise<ArrayBuffer>
    decrypt(iv: Uint8Array, key: CryptoKey, cipher: ArrayBuffer|Uint8Array): Promise<ArrayBuffer>
    importKeyFordDrive(keyData: ArrayBuffer | Uint8Array | JsonWebKey, privateKey: boolean, format: string): Promise<CryptoKey>
    importSharedSecret(keyData: ArrayBuffer | Uint8Array | JsonWebKey, format: string):Promise<CryptoKey>
}