# js_hackerrank

# Week 1 
## Day 4 - Breaking the Records

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

## Day 6 - Sparse Array 

## Array 
### Mutiple instance of an object `.fill`
- the mutiple operator * in Python cannot be used for such purpose in JS 

```javascript
const a = Array(5).fill(false);
```

# Week 2
## Day 3 
### 32-bit unsigned integer 
Sure, I'd be happy to explain what a 32-bit unsigned integer is. Here is a step by step explanation:

1. **Understanding the Bit:** A bit is the most basic unit of information in computing. It is binary, meaning it can have one of two values: 0 or 1.

2. **The Meaning of 32-bit:** When we say something is 32-bit, we're referring to the size of the data type. The size of the data type determines how much data it can hold. A 32-bit integer can store 32 bits of information.

3. **Unsigned Integers:** In computer programming, an integer can be either signed or unsigned. A signed integer can hold both positive and negative values, while an unsigned integer can only hold non-negative values (0 and positive values). The term "unsigned" means that the range of possible values is shifted over to start from zero. 

4. **The Range of a 32-bit Unsigned Integer:** The range of an unsigned 32-bit integer is from 0 to 4,294,967,295 (2^32 - 1). This range is calculated by the formula 2^n - 1 (where n is the number of bits), as each bit can hold 2 values (0 or 1).

5. **Use of 32-bit Unsigned Integers:** 32-bit unsigned integers are frequently used in computer programming, particularly in situations where negative numbers will not be needed, but large positive numbers may be used. This includes applications like counting the number of visitors to a website, generating unique IDs for various purposes, etc.

6. **Storage of 32-bit Unsigned Integers:** A 32-bit unsigned integer is stored in binary format in memory. The computer or program then interprets this binary data as a decimal number. For instance, the binary number 00000000000000000000000000000001 is interpreted as the decimal number 1, and the binary number 11111111111111111111111111111111 is interpreted as the decimal number 4,294,967,295.

### Base conversion - from any base to decimal base `parseInt()`
- parseInt("stringNumber", base) 
- base : an int

### Base conversion - from decimal to binary `toString()`
- "decimalNumber".toString(2)