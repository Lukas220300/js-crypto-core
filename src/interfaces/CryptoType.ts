export interface CryptoType {
    getSubtle(): SubtleCrypto
    getNewRandomValueArray(length:number): Uint8Array
    exportKey(format: string, key: CryptoKey): Promise<JsonWebKey> | Promise<ArrayBuffer>
}