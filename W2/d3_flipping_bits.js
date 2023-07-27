/*
You will be given a list of 32 bits unsigned integers. Flip all the bits (1->0 and 0->1 ) and print the result as an unsigned integer.

Example:
n = 9_10
9_10 = 1001_2. we're working with 32 bits, so:
00000000000000000000000000001001_2 = 9_10
11111111111111111111111111110110_2 = 4294967286_10

return 4294967286

Function Description:
Complete the flippingBits function in the editor below. It should return the unsigned decimal integer result.
- int  n: an integer

returns
- int: the unsigned decimal integer result

Input Format
The first line of the input contains q, the number of queries.
Each of the next q lines contain an integer, n, to process.

Constraints
1 <= q <= 100
0 <= n < 2^32

Sample Input 
3
2147483647
1
0

Sample Output
2147483648
4294967294
4294967295
*/

function flippingBits(n) {
    // convert to binary 
    const binN = n.toString(2);
    for (let i =0; i < 32; i++){

    };
}


const a = 1001
console.log(~a)