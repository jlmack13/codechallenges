const toLowerCase = require('./index.js');

test('toLowerCase function exists', () => {
    expect(typeof toLowerCase).toEqual('function')
});

test('Returns the string in lowercase', () => {
    expect(toLowerCase("HELLO")).toEqual("hello")
});

test('Returns the string in lowercase', () => {
    expect(toLowerCase("World")).toEqual("world")
});

test('Returns an entire sentence in lowercase', () => {
    expect(toLowerCase('ThiS WHoLe THiNg SHouLD BE lOwErCaSE!')).toEqual("this whole thing should be lowercase!")
});