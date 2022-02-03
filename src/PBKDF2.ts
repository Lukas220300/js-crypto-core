import {CryptoType} from "./interfaces/CryptoType";
import {AbstractPBKDF2CryptoType} from "./abstract/AbstractPBKDF2CryptoType";

export class PBKDF2 extends AbstractPBKDF2CryptoType{

    readonly derivedKeyAlgorithm: AesKeyGenParams

    public constructor() {
        super();
        this.derivedKeyAlgorithm = {
            name: 'AES-GCM',
            length: 256
        }
    }

    // @ts-ignore
    async getKeyFromPassword(encodedPassword: Uint8Array, salt: Uint8Array, extractable: boolean = true): Promise<CryptoKey> {
        const keyMaterial = await this.getKeyMaterial('raw', encodedPassword, 'PBKDF2')
        return this.getSubtle().deriveKey(
            {
                name: 'PBKDF2',
                hash: 'SHA-256',
                salt,
                iterations: 100000,
            },
            keyMaterial,
            this.derivedKeyAlgorithm,
            extractable,
            [ "encrypt", "decrypt" ]
        )
    }

    private getKeyMaterial(format: string, encodedPassword: Uint8Array, algorithm: string): Promise<CryptoKey> {
        return this.getSubtle().importKey(
            format,
            encodedPassword,
            algorithm,
            false,
            ["deriveBits", "deriveKey"]
        )
    }

    importKey(keyData: ArrayBuffer | Uint8Array | JsonWebKey, format: string = 'jwk', extractable: boolean = true): Promise<CryptoKey> {
        return this.getSubtle().importKey(
            format,
            keyData,
            'AES-GCM',
            extractable,
            ["encrypt", "decrypt"]
        )
    }

}