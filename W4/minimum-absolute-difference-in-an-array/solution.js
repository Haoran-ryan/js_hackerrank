function minimumAbsoluteDifference(arr) {
    // Write your code here
    let min = Number.MAX_SAFE_INTEGER;
    arr.sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i++) {
        let prev = arr[i - 1];
        let cur = arr[i];
        min = Math.min(min, Math.abs(prev - cur));

        // min = Math.min(min, arr[i] - arr[i - 1]);
    }
    return min;
}

// test smaples
console.log(minimumAbsoluteDifference([3, -7, 0])); // 3
console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])); // 1
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17])); // 3

