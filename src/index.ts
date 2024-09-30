class KeyValuePair<TKey, TValue> {
    constructor(public key: TKey, public value: TValue){}
}

let pair = new KeyValuePair('1', '2');