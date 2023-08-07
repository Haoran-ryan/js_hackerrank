function birthday(s, d, m) {
    // edge cases 
    if (s.length === 1 && s[0] === d) return 1;
    let count = 0 
    for(let i =0; i < s.length - m + 1; i++){
        let subArr = s.slice(i,i + m)
        console.log('subArr: ', subArr)
        const subArrSum = subArr.reduce((a,c) => a+c,0)
        if(subArrSum === d){
            count++
        }
    }; 
    console.log(count)

}
//
// birthday([1,2,1,3,2],3, 2) //2
birthday([2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1],18,7)