/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix arr is shown below:
    1 2 3
    4 5 6
    9 8 9
The left-to-right diagonal = 1+5+9 = 15. The right to left diagonal = 3+5+9 = 17. Their absolute difference is |15-17| = 2.

Function description
Complete the diagonalDifference function in the editor below. It must return an integer representing the absolute diagonal difference.
diagonalDifference takes the following parameter:
- int arr[n][m]: an array of integers.

Return
- int: the absolute diagonal difference.

Input Format
The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].

Constraints
- -100 <= arr[i][j] <= 100

Output Format
Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
*/


function diagonalDifference(arr) {
    let offset = 0
    let left_sum = 0
    let right_sum = 0 
    for (let i =0; i<arr.length; i++){
        const left = arr[i][i] 
        const right = arr[i][arr.length - 1 -offset]
        left_sum += left
        right_sum += right
        offset += 1 
        // console.log('left: ',left, 'right: ', right)
    }
    return Math.abs((left_sum - right_sum))

}

const sample1 = [[1,2,3],
                [4,5,6],
                [9,8,9]
                ]
const sample2= [[11,2,4],
                [4,5,6],
                [10,8,-12]
                ]
console.log(diagonalDifference(sample2))