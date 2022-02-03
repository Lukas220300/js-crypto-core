import {AbstractAsymmetricCryptoType} from "./abstract/AbstractAsymmetricCryptoType";

export class RSA extends AbstractAsymmetricCryptoType{

    readonly algorithmIdentifier: RsaHashedKeyGenParams
    readonly enDeCryptionAlgorithmIdentifier: RsaOaepParams

    public constructor() {
        super();
        this.algorithmIdentifier = {
            name: 'RSA-OAEP',
            modulusLength: 4096,
            publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
            hash: 'SHA-512',
        }
        this.enDeCryptionAlgorithmIdentifier = {
            name: 'RSA-OAEP'
        }
    }

    generateNewKePair(extractable: boolean = true): Promise<CryptoKeyPair> {
        return this.getSubtle().generateKey(
            this.algorithmIdentifier,
            true,
            ["encrypt", "decrypt"]
        )
    }

    decrypt(key: CryptoKey, cipher: ArrayBuffer | Uint8Array): Promise<ArrayBuffer> {
        return this.getSubtle().decrypt(
            this.enDeCryptionAlgorithmIdentifier,
            key,
            cipher
        )
    }

    encrypt(key: CryptoKey, encodedMessage: Uint8Array): Promise<ArrayBuffer> {
        return this.getSubtle().encrypt(
            this.enDeCryptionAlgorithmIdentifier,
            key,
            encodedMessage
        )
    }

}