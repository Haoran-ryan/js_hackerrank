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

### Bitwise operation in JS 
1. `&` : AND  1 & 1 = 1, 1 & 0 = 0, 0 & 0 = 0
2.  `|` : OR   1 | 1 = 1, 1 | 0 = 1, 0 | 0 = 0
3.  `^` : XOR  1 ^ 1 = 0, 1 ^ 0 = 1, 0 ^ 0 = 0
4.  `~` : NOT  ~1 = 0, ~0 = 1
  - NOTE： In JavaScript, the bitwise NOT operation returns a negative number due to the way JavaScript handles binary numbers (Two's complement representation).
5.  `<<` : Left Shift  1 << 1 = 10, 1 << 2 = 100, 1 << 3 = 1000
6.  `>>` : Right Shift  10 >> 1 = 1, 100 >> 2 = 1, 1000 >> 3 = 1
7.  `>>>` : Zero-fill Right Shift  10 >>> 1 = 1, 100 >>> 2 = 1, 1000 >>> 3 = 1
  - NOTE： In most cases, the regular Right Shift operator is sufficient. The Unsigned Right Shift is only needed in very specific cases when you're dealing with the sign bit (the leftmost bit) in numbers. For positive numbers, >> and >>> work the same.

### Very Nice Solution by ChatGPT
Your solution is correct and it works as expected. However, you can simplify the solution by using a bitwise operation. 

Since JavaScript bitwise operations are 32 bits, the result of NOT `~n` will be a 32 bits signed integer. This can cause issues when the first bit (the sign bit) is flipped from 0 to 1, which makes the number negative in a signed integer. 

We can use the unsigned right shift operator `>>>` with a shift of 0, to convert the result back into an unsigned integer. This bitwise trick works because it discards the sign bit and shifts in zeros from the left, effectively giving us the 32 bit unsigned integer we want.

Here's how you could simplify your code:

```javascript
function flippingBits(n) {
    return (~n >>> 0);
}
```

This function works as follows:

1. `~n` performs the bitwise NOT operation on `n`, flipping all the bits.
2. `>>> 0` shifts the result zero places to the right. This doesn't change the bitwise representation, but it does convert the number to an unsigned integer, effectively interpreting the sign bit as part of the number.

This solution is more performant and easier to read than the original one. Remember, though, that JavaScript's bitwise operators treat their operands as 32 bit, so this solution will not work for numbers that need more than 32 bits. Given your constraints, this won't be a problem.