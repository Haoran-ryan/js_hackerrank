function closestNumbers(arr) {
    // sort the array in the ascending order
    arr.sort((a, b) => a - b);
    let result = [];
    let minDiff = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
        let prevNum = arr[i - 1];
        let curNum = arr[i];
        let curDiff = Math.abs( curNum - prevNum);
        if(curDiff === minDiff){
            result.push(prevNum, curNum);
        }else if(curDiff < minDiff){
            minDiff = curDiff;
            result = [prevNum, curNum];
        };
    };
    return result;
}

/*
时间复杂度:
arr.sort((a, b) => a - b); - 排序的时间复杂度是 O(n log n)，其中 n 是数组 arr 的长度。
循环 for (let i = 1; i < arr.length; i++) 的时间复杂度是 O(n)，因为它迭代了 arr 的每个元素一次。
综上所述，您的代码的总体时间复杂度是 O(n log n + n) = O(n log n)，其中 O(n log n) 是主导部分。

空间复杂度:
arr.sort() - 原地排序，不需要额外的空间，所以它的空间复杂度是 O(1)。
结果数组 result 在最坏的情况下可能存储所有的 arr 元素，因此其空间复杂度是 O(n)。
因此，您的代码的总体空间复杂度是 O(n)。
* */

