import {CryptoType} from "../interfaces/CryptoType";

export abstract class AbstractCryptoType implements CryptoType {
    getSubtle(): SubtleCrypto {
        return window.crypto.subtle
    }

    getNewRandomValueArray(length: number): Uint8Array {
        return window.crypto.getRandomValues(new Uint8Array(length))
    }
}