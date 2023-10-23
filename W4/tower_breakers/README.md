Two players are playing a game of Tower Breakers! Player  always moves first, and both players always play optimally. The rules of the game are as follows:
- Initially there are `n` towers.
- Each tower is of height `m`.
- The players move in alternating turns.
- In each turn, a player can choose a tower of height `x` and reduce its height to `y`, where `1 <= y < x` and `y` evenly divides `x`.
- If the current player is unable to make a move, they lose the game.
Given the values of `n` and `m`, determine which player will win. If the first player wins, return `1`. Otherwise, return `2`.

### Example
`n = 2`
`m = 6`
There are 2 towers, each 6 units tall. Player 1 has a choice of two moves:
- Remove 3 pieces from a tower to leave 3 as `6 % 3 = 0`.
- Remove 5 pieces to leave 1.
Let Player 1 remove 3. Now the towers are `6` and `3` units tall. Player 2 matches the move. Now the towers are `3` and `3` units tall. Player 1 has only one move.
Player 1 removes `2` pieces leaving `1` piece. Player 2 matches again leaving `1` piece. 
Towers are both `1` unit tall.
Player 1 has no move and loses. Return `2`.

### Function Description
Complete the `towerBreakers` function in the editor below. It should return an integer that represents the winning player.

### Constraints
- `1 <= t <= 100`
- `1 <= n,m <= 100`

### Sample Input
```
STDIN   Function
-----   --------
2       t = 2 (number of test cases)
2 2     n = 2, m = 2
1 4     n = 1, m = 4
```
### Sample Output
```
2
1
```
### Explanation
We'll refer to player 1 as `P1` and player 2 as `P2`.
In the first test case, `P1` chooses one of the two towers and reduces it to `1`. Then `P2` matches. As both towers now have height `1`, `P1` has no move and loses.
In the second test case, there is only one tower of height `4`, so `P1` can reduce it to `1` and win the game.