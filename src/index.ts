/*
    Understanding the problem
    --------------------------------
    Let's say you want to represent  KeyValuePair: so we define a class:
    --------------------------------
    class KeyValuePair {
    constructor(public key: number, public value: string){}
    }

    Now we can crate an object with:

    let pair = new KeyValuePair('1', '2');
    --------------------------------
    Now let's say in our app we wanted to use a string value for a key, with our current implemetation, we can't do that.
*/
class KeyValuePair<TKey, TValue> {
    constructor(public key: TKey, public value: TValue){}
}

let pair = new KeyValuePair('1', '2');