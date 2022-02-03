export interface CryptoType {
    getSubtle(): SubtleCrypto
    getNewRandomValueArray(length:number): Uint8Array
}