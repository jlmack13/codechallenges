/* Convert 12-hour time to military time

Problem from HackerRank: https: //www.hackerrank.com/challenges/time-conversion/problem
*/

//Fix and test function to work without the repeated removal of "AM/PM" at the end of the string.
//It always needs to be removed so it doesn't make sense to keep it multiple time in if statements.
function timeConversion(s) {
    let t = s.split(":");
    let m = t[2].substring(2);
    if (t[0] === "12" && m === "AM") {
        t[0] = "00";
        t[2] = t[2].substring(0, 2);
    } else if (m === "AM" || (t[0] === "12" && m === "PM")) {
        t[2] = t[2].substring(0, 2);
    } else {
        t[0] = (parseInt(t[0]) + 12).toString();
        t[2] = t[2].substring(0, 2);
    }
    return t.join(":");

}
module.exports = timeConversion;