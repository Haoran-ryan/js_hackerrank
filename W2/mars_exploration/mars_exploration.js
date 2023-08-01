function marsExploration(s) {
    // Write your code here
    const pattern = {
        0: 'S',
        1: 'O',
        2: 'S'
    };
    let count = 0; 

    for (let i in s){
        const cur = s[i]
        const re = pattern[i%3]
        if(cur !== re){
            count += 1
        }
    }
    return count
}

console.log(marsExploration('SOSSPSSQSSOR'))

console.log(marsExploration('SOSSOT'))