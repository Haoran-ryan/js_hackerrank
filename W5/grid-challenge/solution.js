function gridChallenge(grid) {
  // Assuming the grid is n x n
  const n = grid.length;

  // Sort each row and check if the grid is lexicographically sorted
  for (let row = 0; row < n; row++) {
    grid[row] = grid[row].split("").sort().join("");

    // Check if the current row is lexicographically smaller than the previous row
    if (row > 0 && grid[row] < grid[row - 1]) {
      return "NO";
    }
  }

  // Check each column
  for (let col = 0; col < n; col++) {
    for (let row = 1; row < n; row++) {
      if (grid[row][col] < grid[row - 1][col]) {
        return "NO";
      }
    }
  }

  return "YES";
}

// KEY TAKE AWAY
// 1. JS supports lexicographical comparison of strings natively
