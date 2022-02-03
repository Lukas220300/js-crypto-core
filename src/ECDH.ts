import {AbstractECDHCryptoType} from "./abstract/AbstractECDHCryptoType";

export class ECDH extends AbstractECDHCryptoType {

    readonly algorithmIdentifier: EcKeyGenParams
    readonly derivedKeyType: AesKeyGenParams

    public constructor() {
        super();
        this.algorithmIdentifier = {
            name: 'ECDH',
            namedCurve: 'P-384'
        }
        this.derivedKeyType = {
            name: 'AES-GCM',
            length: 256
        }
    }

    generateNewKePair(extractable: boolean = true): Promise<CryptoKeyPair> {
        return this.getSubtle().generateKey(
            this.algorithmIdentifier,
            extractable,
            ['deriveKey']
        )
    }

    generateSharedSecret(alicePrivateKey: CryptoKey, bobPublicKey, extractable: boolean = true): Promise<CryptoKey> {
        return this.getSubtle().deriveKey(
            {
                name: 'ECDH',
                public: bobPublicKey
            },
            alicePrivateKey,
            this.derivedKeyType,
            extractable,
            ["encrypt", "decrypt"]
        )
    }

    decrypt(iv: Uint8Array, key: CryptoKey, cipher: ArrayBuffer | Uint8Array): Promise<ArrayBuffer> {
        return this.getSubtle().decrypt(
            {
                name: 'AES-GCM',
                iv
            },
            key,
            cipher
        )
    }

    encrypt(iv: Uint8Array, key: CryptoKey, encodedMessage: Uint8Array): Promise<ArrayBuffer> {
        return this.getSubtle().encrypt(
            {
                name: 'AES-GCM',
                iv
            },
            key,
            encodedMessage
        )
    }


}