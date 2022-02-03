import {SymmetricCryptoType} from "../interfaces/SymmetricCryptoType";
import {AbstractCryptoType} from "./AbstractCryptoType";

export abstract class AbstractSymmetricCryptoType extends AbstractCryptoType implements SymmetricCryptoType {
    abstract generateNewKey(): Promise<CryptoKey>
    abstract encrypt(iv: Uint8Array, key: CryptoKey, encodedMessage: Uint8Array): Promise<ArrayBuffer>
    abstract decrypt(iv: Uint8Array, key: CryptoKey, cipher: ArrayBuffer | Uint8Array): Promise<ArrayBuffer>
    abstract importKey(keyData: ArrayBuffer | Uint8Array | JsonWebKey, format: string): Promise<CryptoKey>

    generateNewInitializeVector(): Uint8Array {
        return this.getNewRandomValueArray(12);
    }

}