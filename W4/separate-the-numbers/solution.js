function separateNumbers(s) {
    // edge cases 
    if(s.length === 1){
        console.log('NO');
        return;
    }

    // determin the max length of the first number 32/2 = 16 & length of the first number [1:16]
    for(let i = 1; i <= s.length/2; i++){
        // get the first number 
        let firstNum = BigInt(s.substring(0, i)); // 必须使用BigInt，parseInt会溢出
        // copy the first number to a result variable that will be compared against the original string 
        let result = firstNum.toString();
        // while the result string is less than the original string
        while(result.length < s.length){
            // increment the first number by 1 and add it to the result string 
            result += (++firstNum).toString();
            };
        // compare the result string to the original string
        if(result === s){
            console.log('YES ' + s.substring(0, i));
            return;
        };
    };
    console.log('NO');
}
