/*
Question:
    Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).
    Your task is to write a program that creates or splits Camel Case variable, method, and class names.

Input Format:
    - Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
    - The operation will either be S (split) or C (combine)
    - M indicates method, C indicates class, and V indicates variable
    - In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
    - In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.


Output Format:
    - For each line of input, print to the console the appropriate converted string.

Sample Input:
    S;M;plasticCup()
    C;V;mobile phone
    C;C;coffee machine
    S;C;LargeSoftwareBook
    C;M;white sheet of paper
    S;V;pictureFrame

Sample Output:
    plastic cup
    mobilePhone
    coffeeMachine
    large software book
    whiteSheetOfPaper()
    picture frame
 */

function processData(input) {
    const operators = input.substring(0,4);
    const isFirstCapitalised = operators === "S;C;"? true:false
    const isRemoveParen = operators === "S;M;"? true:false
    const isOtherS = operators === "S;V;"? true:false
    const isAddParen = operators === "C;M;"? true:false
    const isOtherC = operators === "C;C;" || operators === "C;V;"? true:false
    let isCapitalised = false

    const inputArr=input.substring(4, input.length).split("")
    let result = ""

    inputArr.forEach((char,index)=>{
        if(isFirstCapitalised){
            if(index === 0){
                result += char.toLowerCase()
            }else{
                result = char === char.toUpperCase()? result+" "+char.toLowerCase(): result+char
            }
        }
        if(isRemoveParen){
            if(index < inputArr.length-2){
                result = char === char.toUpperCase()? result+" "+char.toLowerCase(): result+char
            }
        }
        if(isOtherS){
            result = char === char.toUpperCase()? result+" "+char.toLowerCase(): result+char
        }
        if(isAddParen){

            if(index<inputArr.length-1) {
                if (char === " ") {
                    isCapitalised = true
                } else {
                    if (isCapitalised) {
                        result += char.toUpperCase()
                        isCapitalised = false
                    } else {
                        result += char
                    }
                }
            }else{
                result = result + char + "()"
            }
        }
        if(isOtherC){

            if (char === " ") {
                isCapitalised = true
            } else {
                if(isCapitalised) {
                    result += char.toUpperCase()
                    isCapitalised = false
                }else {
                    result += char
                }
            }
        }
    })
    console.log(result)
}

processData("S;M;plasticCup()")
processData("C;V;mobile phone")
processData("C;C;coffee machine")
processData("S;C;LargeSoftwareBook")
processData("C;M;white sheet of paper")
processData("S;V;pictureFrame")
processData("C;M;mouse pad")