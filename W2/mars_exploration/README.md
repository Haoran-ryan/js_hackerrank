# Mars Exploration 

## Problem Statement
A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

Letters in some of the SOS messsages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, `s`, determine how many letters of the SOS message have been changed by radiation.

### Example
`s = 'SOSTOT'`
The original message was `SOSSOS`. Two of the message's characters were changed in transit.

### Function Description
Complete the `marsExploration` function in the editor below. 
marsExploration has the following parameter(s):
- string s: the string as received on Earth

### Returns
- int: the number of letters changed during transmission

### Input Format
There is one line of input: a single string, `s`.

### Constraints
- 1 <= |s| <= 99
- |s| % 3 = 0
- `s` will contain only uppercase English letters, ascii[A-Z].

### Explanation
#### Sample 0 
```
s = 'SOSSPSSQSSOR'
signal length = 12. Sami sent 4 SOS messages (i.e.: 12/3 = 4).

Expected signal: SOSSOSSOSSOS
Recieved signal: SOSSPSSQSSOR
Difference:          X  X   X

```
Sample Output 0
```
3
```
#### Sample 1
```
s = 'SOSSOT'
signal length = 6. Sami sent 2 SOS messages (i.e.: 6/3 = 2).
Expected Signal: SOSSOS
Received Signal: SOSSOT
Difference:           X
```
Sample Output 1
```
1
```
# Solutions 
- reduce 
```js
const length = s.length;
const sosMessage = Array(length/3).fill("SOS").join("");

return s.split("").reduce((a, c, i)=>{
    if(c !== sosMessage[i]) a++;
    return a;
}, 0);

```