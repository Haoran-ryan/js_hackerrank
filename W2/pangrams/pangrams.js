/*
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

Example
s = 'The quick brown fox jumps over the lazy dog'
The string contains all letters in the English alphabet, so return pangram.

Function Description 
Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.
- string s: a string to test

Returns
- string: either pangram or not pangram

Input Format
A single line with string s.

Constraints
0 < |s| < 10^3
Each character of s, s[i] ∈ {a-z, A-Z, space}

Sample Input
Sample Input 0
We promptly judged antique ivory buckles for the next prize

Sample Output 0
not pangram
*/

function pangrams(s) {
    // Write your code here
    const re = new RegExp("[A-Za-z]")
    const count = new Array(26).fill(0)
    for(let char of s){
        console.log(char)
        if(re.test(char)){
            const index = char.toLowerCase().charCodeAt(0) - 97
            if(count[index] === 0){
                count[index] = 1 
            }
        }
    };
    // sum the array 
    const countSum = count.reduce((acu, cur) => acu+cur, 0)
    return countSum === 26? "pangram":"not pangram"

}

