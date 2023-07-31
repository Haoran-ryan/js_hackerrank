/*
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there. Points scored in the future games are compared to her record.

Example:
scores = [12, 24, 10, 24]
Scores are in the same order as the games played. She tabulates her results as follows:
    Game Score  Minimum  Maximum   Min Max
    0      12     12       12       0   0
    1      24     12       24       0   1
    2      10     10       24       1   1
    3      24     10       24       1   1

 Given the scores for a season, find and print the number of times Maria breaks her records for most and least points scored during the season.
 Complete the breakingRecords function in the editor below. It must return an integer array containing the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.
 */

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