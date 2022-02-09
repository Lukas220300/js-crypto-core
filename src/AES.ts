import {AbstractSymmetricCryptoType} from "./abstract/AbstractSymmetricCryptoType";

export class AES extends AbstractSymmetricCryptoType {

    readonly algorithmIdentifier:  AesKeyGenParams

    public constructor() {
        super();
        this.algorithmIdentifier = {
            name: 'AES-GCM',
            length: 256
        }
    }

    generateNewKey(extractable: boolean = true): Promise<CryptoKey> {
        return this.getSubtle().generateKey(
            this.algorithmIdentifier,
            extractable,
            ["encrypt", "decrypt"]
        )
    }

    decrypt(iv: Uint8Array, key: CryptoKey, cipher: ArrayBuffer | Uint8Array): Promise<ArrayBuffer> {
        return this.getSubtle().decrypt(
            {
                name: 'AES-GCM',
                iv,
                additionalData: new Uint8Array([3,45,2,3,1,2])
            },
            key,
            cipher
        )
    }

    encrypt(iv: Uint8Array, key: CryptoKey, encodedMessage: Uint8Array): Promise<ArrayBuffer> {
        return this.getSubtle().encrypt(
            {
                name: 'AES-GCM',
                iv,
                additionalData: new Uint8Array([3,45,2,3,1,2])
            },
            key,
            encodedMessage
        )
    }

    importKey(keyData: ArrayBuffer | Uint8Array | JsonWebKey, format: string = 'jwk', extractable: boolean = true): Promise<CryptoKey> {
        return this.getSubtle().importKey(
            // @ts-ignore
            format,
            keyData,
            'AES-GCM',
            extractable,
            ["encrypt", "decrypt"]
        )
    }

}