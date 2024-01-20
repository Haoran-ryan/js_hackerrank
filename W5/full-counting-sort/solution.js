function countSort(arr) {
  let freq = Array(100)
    .fill()
    .map(() => []);

  for (let i = 0; i < arr.length; i++) {
    let num = parseInt(arr[i][0]);
    let str = i < arr.length / 2 ? "-" : arr[i][1]; // Replace string with dash for the first half
    freq[num].push(str);
  }

  // Construct and return the sorted output
  let sortedOutput = freq.flat().join(" ");
  return sortedOutput;
}
