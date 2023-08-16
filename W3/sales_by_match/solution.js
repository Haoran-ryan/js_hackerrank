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
