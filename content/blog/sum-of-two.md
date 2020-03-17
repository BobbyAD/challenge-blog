---
path: sum-of-two-31020
date: 2020-03-10T21:33:52.333Z
title: Sum Of Two
description: Find two numbers from array a and array b whose sum equals v.
featured: false
---
The easiest solution is to loop through each array, and check each combination for a match to _v_.

```js
function sumOfTwo(a, b, v) {
    for (let i = 0; i < a.length; a++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] + b[j] === v) {
                return true;
            }
        }
    }
    return false;
}
```

Obviously this solution's not great, and fails my test's time requirements. A nested loop is always going to be _O(n<sup>2</sup>)_ time complexity, as it has to move through the entirety of _b_ for each item in _a_. 

A better solution only loops through each array once. So, we need to think of a way to quickly check every item in one array to see if it has a corresponding item in the other that can be added to equal _v_.

The best way to go about this is to put the remainders of _v - i_ for every item in the first array in to a Set. This can also be done with an Object, or any data structure that offers _O(1)_ lookup time.

```js
let rem = new Set();
```

Once we do this, we should be able to check every item in _b_ against the Set to see if we have a match, and return _true_ if we do. 

```js
function sumOfTwo(a, b, v) {
    let rem = new Set();

    for (let i = 0; i < a.length; i++) {
        rem.add(v-a[i]);
    }
    
    for (let i = 0; i < b.length; i++) {
        if (rem.has(b[i])) {
            return true;
        }
    }

    return false;
}
```

For more information on Sets, check out the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).
