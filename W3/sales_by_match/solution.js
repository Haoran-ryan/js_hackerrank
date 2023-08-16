function sockMerchant(n, ar) {
    if(n===1){
        return 0
    }
    let pairs = new Array(100).fill(0);
    let count = 0;
    for (let i in ar){
        pairs[ar[i]]++
    };
    pairs.forEach((pair)=>{
        count += Math.floor(pair/2)
    })
    return count


}

// better solution
function sockMerchant(n, ar) {
    if(n === 1) {
        return 0;
    }

    let socks = {};
    let count = 0;

    for (let sock of ar) {
        if (socks[sock]) {
            count++;
            socks[sock] = 0; // reset the count for that sock color
        } else {
            socks[sock] = 1; // this sock is waiting for its pair
        }
    }

    return count;
}
