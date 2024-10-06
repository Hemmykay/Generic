## Generics
`Classes`
`Functions`
`Interfaces`
`Constraints`
`Type Mapping`

**Introduction**



**Generic Classes**
```typescript
class KeyValuePair<TKey, TValue> {
    constructor(public key: TKey, public value: TValue){}
}

let pair = new KeyValuePair('1', '2');
```

**Generic Functions**
```typescript
    function wrapInArray<TValue>(value: TValue) {
        return [value];
    }

    let numbers = wrapInArray('1');
```

**Generic Functions**
```typescript
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
```