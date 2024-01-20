function caesarCipher(s, k) {
    // Write your code here
    const pattern = /[a-zA-Z]/i;
    let result = '';
    for (const char of s) {
        if(pattern.test(char)){
            const unicode = char.charCodeAt(0);
            if(unicode >= 65 && unicode <= 90){
                result += String.fromCharCode((unicode - 65 + k) % 26 + 65);
            }else if(unicode >= 97 && unicode <= 122){
                result += String.fromCharCode((unicode - 97 + k) % 26 + 97);
            }
        }else{
            result += char;
        }
    }
    return result;
}


// methods
// 1. String.charCodeAt(index) - returns the unicode value of the character at the index
// 2. String.fromCharCode(unicode) - returns the character for the unicode value
// 3. regex - /[a-zA-Z]/i - matches all alphabets
// 4. Pattern.test(string) - returns true if the string matches the pattern
// 5. unicode for a - 97, z - 122, A - 65, Z - 90


//test cases
console.log(caesarCipher('middle-Outz', 2)); // okffng-Qwvb