/*
Given an array of integers, where all elements but one occur twice, find the unique element.

Example
a = [1,2,3,4,3,2,1]
The unique element is 4.

Function Description
Complete the lonelyinteger function in the editor below.
lonelyinteger has the following parameter(s):
int a[n]: an array of integers

Returns
int: the element that occurs only once

Input Format
The first line contains a single integer, n, the number of integers in the array.
The second line contains n space-separated integers that describe the values in a.

Constraints
1 <= n < 100
It is guaranteed that n is an odd number and that there is one unique element.
0 <= a[i] <= 100, where 0 <= i < n.
*/

function lonelyinteger(a) {
    // Write your code here
    const number_count = {};

    a.forEach(number => {
        if(number_count[number]){
            number_count[number] += 1
        }else{
            number_count[number] = 1
        }
    });

    for (const number in number_count) {
        if(number_count[number] === 1){
            return parseInt(number)
        }
    }

}

// test cases 
console.log(lonelyinteger([1,2,3,4,3,2,1]) === 4)
console.log(lonelyinteger([1,1,2]) === 2)
console.log(lonelyinteger([0,0,1,2,1]) === 2)
console.log(lonelyinteger([1]) === 1)
console.log(lonelyinteger([1,2,3,4,5,4,3,2,1]) === 5)
console.log(lonelyinteger([1,2,3,4,5,4,3,2,1,5]) === 5)
console.log(lonelyinteger([1,2,3,4,5,4,3,2,1,5,6]) === 6)
console.log(lonelyinteger([1,2,3,4,5,4,3,2,1,5,6,6]) === 6)
