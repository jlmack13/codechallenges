/* Staircase problem with right aligned staircase.

Steps go up from left to right.

Take an input of a num n and print a staircase n levels deep, 
using spaces where there are no stairs and # for stairs.

Ex: n = 4
"   #"
"  ##"
" ###"
"####"

Problem from HackerRank: https: //www.hackerrank.com/challenges/staircase/

*/

function staircase(n) {
    for (let row = 0; row < n; row++) {
        let stair = "";
        for (let col = 0; col < n; col++) {
            if ((col - (n - 1) + row) < 0) {
                stair += " ";
            } else {
                stair += "#"
            }
        }
        console.log(stair)
    }
}

module.exports = staircase;