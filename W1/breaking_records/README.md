# Week 1 Day 4 - Breaking the Records

## Array
### Loop

``` javascript 
    // ordinary for loop
let str = "Buzz";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}


    // for... in
// Index needed 

for (let i in str) {
  console.log(str[i]);
}


    // for ... of ...
// NO index use needed 

for (let char of "Hello") {
  console.log(char);
}
```

### Slice 
- JS does not support slicing (for array or string) like st[0:1] as python does 
- Instead, we can use slice() method 

``` javascript
const str = 'Hello, world!';
const subStr = str.substring(7, 12);
console.log(subStr); // 输出: world

const arr = [1, 2, 3, 4, 5];
const subArr = arr.slice(1, 4);
console.log(subArr); // 输出: [2, 3, 4]
```