const timeConversion = require('./index.js');

test('timeConversion function exists', () => {
    expect(typeof timeConversion).toEqual('function')
});

/*
Test 1 -->
input: 07:05:45PM
output: 19:05:45

Test 2-- >
input: 12:40:22AM
output: 00:40:22

*/