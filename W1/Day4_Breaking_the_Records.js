function breakingRecords(scores) {
    // Write your code here
    let mininum = scores[0];
    let maximum = scores[0];
    let min_count = 0;
    let max_count = 0;

    for (let i = 1; i<scores.length; i++){
        const score = scores[i];
        if (score > maximum){
            maximum = score;
            max_count++;
        }else if (score < mininum){
            mininum = score;
            min_count++;
        }
    }
    console.log([max_count, min_count]) ;
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])