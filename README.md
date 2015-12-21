object-swap
======

What
------
Switch the object key and value. It doesn't work with nested objects.

Installation
------
```
$ npm install --save object-swap
```

Usage
------
```javascript
var swap = require('object-swap');

console.log(swap({
    a: 1,
    b: 2,
    c: 3
}));

// { '1': 'a', '2': 'b', '3': 'c' }

```

Test
------
```
npm test
```

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.
