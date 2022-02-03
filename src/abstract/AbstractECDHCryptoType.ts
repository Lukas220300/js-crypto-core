import {AbstractCryptoType} from "./AbstractCryptoType";
import {ECDHCryptoType} from "../interfaces/ECDHCryptoType";

export abstract class AbstractECDHCryptoType extends AbstractCryptoType implements ECDHCryptoType {
    abstract generateNewKePair(): Promise<CryptoKeyPair>
    abstract generateSharedSecret(alicePrivateKey: CryptoKey, bobPublicKey): Promise<CryptoKey>
    abstract encrypt(iv: Uint8Array, key: CryptoKey, encodedMessage: Uint8Array): Promise<ArrayBuffer>
    abstract decrypt(iv: Uint8Array, key: CryptoKey, cipher: ArrayBuffer | Uint8Array): Promise<ArrayBuffer>

    generateNewInitializeVector(): Uint8Array {
        return this.getNewRandomValueArray(12);
    }
}