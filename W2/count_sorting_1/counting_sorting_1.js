function countingSort(arr) {
    // Write your code here
    // create an array of 100 elements
    let count = new Array(100).fill(0);
    arr.forEach(element => {
        count[element] += 1
    });

    return count;
}