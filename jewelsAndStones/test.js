const numJewelsInStones = require('./index.js');

test('numJewelsInStones function exists', () => {
    expect(typeof numJewelsInStones).toEqual('function')
});

test('Test should return 3 with input: J = "aA", S = "aAAbbbb"', () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toEqual(3)
});

test('Test should return 0 with input: J = "z", S = "ZZ"', () => {
    expect(numJewelsInStones("z", "ZZ")).toEqual(0)
});

test('Test should return 6 with input: J = "abc", S = "ABCabcabc"', () => {
    expect(numJewelsInStones("abc", "ABCabcabc")).toEqual(6)
});

test('Test should return 10 with input: J = "xyzSrD", S = "UxaEeVxtSYrDooOzSrrIy"', () => {
    expect(numJewelsInStones("xyzSrD", "UxaEeVxtSYrDooOzSrrIy")).toEqual(10)
});