//Word Break challenge from LeetCode: https://leetcode.com/problems/word-break/description/

// Given a non - empty string s and a dictionary wordDict containing a list of non - empty words, determine
// if s can be segmented into a space - separated sequence of one or more dictionary words.

// Note:

//     The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.

function wordBreak (s, wordDict) {
    if (s === '') {
        return true;
    }

    for(let i = 1; i <= s.length; i++) {
        const prefix = s.substring(0, i);
        console.log(prefix);
        const rest = s.substring(i);
        console.log(rest);
        if(wordDict.includes(prefix) && wordBreak(rest, wordDict)) {
            return true;
        }
    }

    return false;
};

module.exports = wordBreak;

//My original, non-working solution. It fails because if the first word matches it removes it even if the next two word would be match if it didn't 
// const result = [];
// wordDict.map(word => {
//     if (s.match(word)) {
//         result.push(word);
//         s = s.replace(word, "");
//     }
// });
// if (s !== "") {
//     result.push(s);
// }
// for (let word of result) {
//     if (wordDict.indexOf(word) === -1) {
//         return false;
//     }
// }
// return true;