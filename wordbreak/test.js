const wordBreak = require('./wordbreak.js');

test('wordBreak function exists', () => {
    expect(typeof wordBreak).toEqual('function')
});

test('Should return false with an empty WordDict', () => {
    expect(wordBreak("a", [])).toBeFalsy()
});

test('Should return true even if it can be split into two of the same word', () => {
    expect(wordBreak("appleapple", ["apple", "pear", "orange"])).toBeTruthy()
});

test('Test should return true with input: s = "bb", wordDict = ["a", "b", "bbb", "bbbb"]', () => {
    expect(wordBreak("bb", ["a", "b", "bbb", "bbbb"])).toBeTruthy()
});

test('1st test should return true with input: "leetcode", ["leet", "code"]', () => {
    expect(wordBreak("leetcode", ["leet", "code"])).toBeTruthy()
});

test('2nd test should return true with input: s = "applepenapple", wordDict = ["apple", "pen"]', () => {
    expect(wordBreak("applepenapple", ["apple", "pen"])).toBeTruthy()
});

test('3rd test should return false with input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]', () => {
    expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBeFalsy()
});

test('4th test should return false with input: s = "cars", wordDict = ["car", "ca", "rs"]', () => {
    expect(wordBreak("cars", ["car", "ca", "rs"])).toBeTruthy()
});

test('5th test should return true with input: s = "helloworld", wordDict = ["hello", "world"]', () => {
    expect(wordBreak("helloworld", ["hello", "world"])).toBeTruthy()
});

