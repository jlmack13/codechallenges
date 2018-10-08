//Word Break challenge from LeetCode: https://leetcode.com/problems/word-break/description/

// Given a non - empty string s and a dictionary wordDict containing a list of non - empty words, determine
// if s can be segmented into a space - separated sequence of one or more dictionary words.

// Note:

//     The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.

var wordBreak = function (s, wordDict) {
    const result = [];
    wordDict.map(word => {
        if(s.match(word)) {
            if (result.indexOf(word) === -1) {
                result.push(word);
            }
        }
    });

    return result.join("") === wordDict.join("");
};