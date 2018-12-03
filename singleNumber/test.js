const singleNumber = require('./index.js');

test('singleNumber function exists', () => {
    expect(typeof singleNumber).toEqual('function')
});

test('Test should return 1 with input: [1, 2, 4, 4, 2]', () => {
    expect(singleNumber([1, 2, 4, 4, 2])).toEqual(1)
});

test('Test should return 5 with input: [1, 6, 3, 3, 4, 6, 5, 4, 1]', () => {
    expect(singleNumber([1, 6, 3, 3, 4, 6, 5, 4, 1])).toEqual(5)
});