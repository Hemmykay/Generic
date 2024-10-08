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
    Now let's say in our app we wanted to use a string value for a key, with our current implementation, we can't do that.

    We have two solutions:
    1 - We can use "any":
    `
    class KeyValuePair {
    constructor(public key: any, public value: string){}
    }
    `
    But with 'any' we loose type safety

    2 - We can duplicate the class:
    `
    class KeyValuePair {
    constructor(public key: number, public value: string){}
    }

    class KeyValuePair {
    constructor(public key: string, public value: string){}
    }
    `
    But this is not a good solution as it is redundant. We have to keep duplicating the class for every typ we need.
*/

// The best solution is using Generics Classes
// Generic classes in typescript are the same as template classes in c++.
class KeyValuePair<TKey, TValue> {
    constructor(public key: TKey, public value: TValue){}
}

let pair = new KeyValuePair( 1, '2');

class ArrayUtils {

    static wrapInArray<TValue>(value: TValue) {
    return [value];
}

}

let numbers = ArrayUtils.wrapInArray('1');

interface Result<Tdata> {
    data: Tdata | null,
    error: string | null
}

function fetch<TData>(url: string): Result<TData> {
    return { data: null, error: null };
}

interface User {
    username: string;
}

interface Product {
    title: string;
}

let result = fetch<User>('url');
//result.data.