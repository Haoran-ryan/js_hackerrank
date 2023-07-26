/*
HackerLand University has the following grading policy:
- Every student receives a grade in the inclusive range from 0 to 100.
- Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's grade according to these rules:
- If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
- If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

Examples:
- grade = 84 round to 85 (85 - 84 is less than 3)
- grade = 29 do not round (result is less than 40)
- grade = 57 do not round (60 - 57 is 3 or higher)

Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

Function Description:
Complete the function gradingStudents in the editor below.
gradingStudents has the following parameter(s):
- int grades[n]: the grades before rounding

Returns:
- int[n]: the grades after rounding as appropriate

Input Format:
The first line contains a single integer, n, the number of students.
Each line i of the n subsequent lines contains a single integer, grades[i].

Constraints:
- 1 <= n <= 60
- 0 <= grades[i] <= 100
*/

function gradingStudents(grades) {
    if(grades < 38){
        return grades
    }
   // modulo operation: last digit 
   const last = grades % 10 
   const secondLast = (grades - last) % 100 

   if(last === 0){
    return grades
   }else if(last < 5 && last >=3){
    return secondLast + 5
   }else if(last > 7){
    
    if(secondLast === 90){
        return 100
    }else{
        return secondLast + 10

    }
   }else{
    return grades
   }
};


// solution proposed by CHATGPT
/*
Certainly, I'd be glad to break this down for you:

1. **If the grade is 38 or more:** The rule about rounding to the next multiple of 5 only applies to grades of 38 or more. This is because a score lower than 38, even when rounded, will still be less than 40 (a failing grade), so there's no point in rounding it.

2. **We check the remainder when the grade is divided by 5:** This is done using the modulus operator (%), which gives the remainder of a division operation. For example, if the grade is 73, the remainder when divided by 5 is 3. 

3. **If this remainder is 3 or more:** If the remainder of the division by 5 is 3 or 4, it means that the grade is within 2 points of the next multiple of 5. This is based on the rule "If the difference between the grade and the next multiple of 5 is less than 3, round the grade up to the next multiple of 5."

   Let's take a few examples:
   
   - If the grade is 73, the next multiple of 5 is 75. The difference is 2 (75-73), so we should round up to 75. You can also see this with the modulus operation: 73 % 5 gives us 3, which is >= 3, so we round up.
   
   - If the grade is 81, the next multiple of 5 is 85. The difference is 4 (85-81), which is more than 3, so we shouldn't round up. Again, you can see this with the modulus operation: 81 % 5 gives us 1, which is < 3, so we don't round up.
   
4. **We round up to the next multiple of 5:** If the conditions above are met, we round the grade up to the next multiple of 5. This can be done by adding `(5 - remainder)` to the grade. 

   For example, if the grade is 73, the remainder is 3 when we divide by 5, so we add `(5 - 3)` to the grade to get 75.
   
5. **Otherwise, we do not round the grade:** If the grade is less than 38, or if the remainder when divided by 5 is less than 3, we don't need to round the grade, so it stays the same.

This logic is used to implement the grading policy described in the problem statement.

*/
function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) {
            return grade;
        }
        let remainder = grade % 5;
        if (remainder >= 3) {
            return grade + (5 - remainder);
        }
        return grade;
    });
}
