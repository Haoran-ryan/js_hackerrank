Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

### Example

```
grid = ['abc', 'ade', 'efg']
```

The grid is illustrated below.

```
a b c
a d e
e f g
```

The rows are already in alphabetical order. The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. Only elements within the same row can be rearranged. They cannot be moved to a different row.

### Function Description

Complete the gridChallenge function in the editor below.
gridChallenge has the following parameter(s):

- string grid[n]: an array of strings

### Retruns

- string: either YES or NO

### Input Format

The first line contains t, the number of testcases.
Each of the next t sets of lines are described as follows:

- The first line contains n, the number of rows and columns in the grid.
- The next n lines contains a string of length n

### Constraints

- 1 <= t <= 10
- 1 <= n <= 100
- grid[i][j] is a permutation of ascii[a-z]

### Output Format

For each test case, on a separate line print YES if it is possible to rearrange the grid alphabetically ascending in both its rows and columns, or NO otherwise.
