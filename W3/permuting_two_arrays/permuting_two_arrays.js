function twoArrays(k, A, B) {
    // sort the arrays 
    A.sort((a,b)=> a-b)
    B.sort((a,b)=> b-a)

    // loop through the arrays and check if the sum of the elements is greater than k
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return 'NO'
        }
    }
    return 'YES'

}


// sample tests

console.log(twoArrays(10, [2,1,3], [7,8,9])) // YES
console.log(twoArrays(5, [1,2,2,1], [3,3,3,4]))  // NO