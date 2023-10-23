// Constraints

// x % y === 0 && x > y


function towerBreakers(n, m) {
    if(m ===1 || n % 2 ===0){
        return '2'
    }
    return '1'

}

/*Game Rules:
There are n towers.
Each tower is of height m.
The players move in alternating turns.
In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y < x and y evenly divides x.
If the current player is unable to make a move, they lose the game.
With the given rules, let's analyze some patterns:

If a tower is of height 1, no player can make a move on it.
If all towers are of height 1, the current player will lose.
Patterns & Observations:
If m is 1, then P1 can't make any move and will lose. So, the answer will be 2.
If n is even, then no matter what P1 does, P2 can always replicate that move on another tower, which will lead to P1 losing in the end. So, the answer will be 2.
If n is odd and m is greater than 1, then P1 can always force a win. He can do so by making the first tower height 1, and then whatever P2 does, P1 will always replicate that move and eventually win. So, the answer will be 1.
If there's only 1 tower (n=1) and its height is greater than 1, P1 can reduce its height to 1 and win immediately. So, the answer will be 1.*/