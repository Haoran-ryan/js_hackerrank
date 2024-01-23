Sansa has an array. She wants to find the value obtained by XOR-ing the contiguous subarrays, followed by XOR-ing the values thus obtained. Can you help her in this task?

### Example

arr = [3, 4, 5]

```
Subarray	Operation	Result
3		None		3
4		None		4
5		None		5
3,4		3 XOR 4		7
4,5		4 XOR 5		1
3,4,5		3 XOR 4 XOR 5	2
```

Now we take the resultant values and XOR them together:

```
3 XOR 4 XOR 5 XOR 7 XOR 1 XOR 2 = 6
```

### Function Description

Complete the sansaXor function in the editor below.
sansaXor has the following parameter(s):

- int arr[n]: an array of integers

### Returns

- int: the result of calculation

### Input Format

The first line contains an integer t, the number of the test cases.
Each of the next t pairs of lines is as follows:

- The first line of each test case contains an integer n, the number of elements in arr.
- The second line of each test case contains n space-separated integers arr[i].

### Constraints

- 1 <= t <= 5
- 2 <= n <= 10^5
- 1 <= arr[i] <= 10^8
