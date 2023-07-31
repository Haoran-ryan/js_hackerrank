# Panpram 

## Program design 
1. an array of 26 elements pre-filled with 0 
2. loop through the string and increment the value of the corresponding index in the array
3. if the sum of the array is greater than or equal to 26, then it is a panpram

## Methods 
1. Array(26).fill(0)
2. regex 
    ```js
    // create a regex pattern
    const re = new RegExp("[A-Za-z]");
    // check if the string contains a letter
    letterString.match(re)
    // or 
    re.test(letterString)
    ```
3. charCodeAt() 
4. Loop through a string : for ... in ? VS for ... of ? 