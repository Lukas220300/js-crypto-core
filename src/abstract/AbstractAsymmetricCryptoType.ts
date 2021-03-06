import {AbstractCryptoType} from "./AbstractCryptoType";
import {AsymmetricCryptoType} from "../interfaces/AsymmetricCryptoType";

export abstract class AbstractAsymmetricCryptoType extends AbstractCryptoType implements AsymmetricCryptoType {
    abstract generateNewKePair(): Promise<CryptoKeyPair>
    abstract encrypt(key: CryptoKey, encodedMessage: Uint8Array): Promise<ArrayBuffer>
    abstract decrypt(key: CryptoKey, cipher: ArrayBuffer|Uint8Array): Promise<ArrayBuffer>
    abstract importKey(keyData: ArrayBuffer | Uint8Array | JsonWebKey, privateKey: boolean, format: string): Promise<CryptoKey>
}