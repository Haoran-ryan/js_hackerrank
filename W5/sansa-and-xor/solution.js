function sansaXor(arr) {
  let result = 0;
  if (arr.length % 2 === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i += 2) {
      result ^= arr[i];
    }
  }
  return result;
}

// Test
const test1 = [3, 4, 5];
console.log(sansaXor(test1)); // Outputs the XOR of XORs of all subarrays
