/*
Question:

There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings.

Example
strings = ['ab', 'ab', 'abc']
queries = ['ab', 'abc', 'bc']

There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array, results = [2, 1, 0].

Function Description

Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

matchingStrings has the following parameters:
- strings - an array of strings to search
- queries - an array of query strings

returns
- int[] - an array of results for each query

Input Format
The first line contains and integer n, the size of strings.
Each of the next n lines contains a string strings[i].
The next line contains q, the size of queries.
Each of the next q lines contains a string q[i].

Constraints
1 <= n <= 1000
1 <= q <= 1000 
1 <= |strings[i]|, |queries[i]| <= 20

*/

function matchingStrings(strings, queries) {
    let result = Array(queries.length).fill(0);
    for (let x=0; x<queries.length; x++){
        const query = queries[x]
        for (let y=0; y< strings.length; y++){
            const string = strings[y]
            if(query === string){
                result[x] += 1
            }
        };
    };
    return result
}