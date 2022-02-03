import {AbstractCryptoType} from "./AbstractCryptoType";
import {PBKDF2CryptoType} from "../interfaces/PBKDF2CryptoType";

export abstract class AbstractPBKDF2CryptoType extends AbstractCryptoType implements PBKDF2CryptoType {
    abstract getKeyFromPassword(encodedPassword: Uint8Array, salt: Uint8Array): Promise<CryptoKey>

    getNewSalt(length: number = 16): Uint8Array {
        return this.getNewRandomValueArray(length)
    }
}