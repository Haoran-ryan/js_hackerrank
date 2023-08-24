function maximumPerimeterTriangle(sticks) {
    // sort the array in descending order
    sticks.sort((a,b)=>b-a);
    for(let i=0; i < sticks.length - 2; i++){
        // compare the sum of the two smaller sides with the largest side
        if(sticks[i] < sticks[i+1] + sticks[i+2]){
            return [sticks[i+2], sticks[i+1], sticks[i]];
        }
    };
    return [-1];
}

/*
Mistakes:
1. .sort() callback
2. triangle condition: a + b > c
3. return [-1] outside the for loop
*/