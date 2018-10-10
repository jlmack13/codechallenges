const staircase = require('./index.js');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});

test('staircase function exists', () => {
    expect(typeof staircase).toEqual('function')
});

test('staircase called with n = 3', () => {
    staircase(3);
    expect(console.log.mock.calls[0][0]).toEqual('  #');
    expect(console.log.mock.calls[1][0]).toEqual(' ##');
    expect(console.log.mock.calls[2][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(3);
});

test('staircase called with n = 1', () => {
    staircase(1);
    expect(console.log.mock.calls[0][0]).toEqual('#');
    expect(console.log.mock.calls.length).toEqual(1);
});

test('staircase called with n = 6', () => {
    staircase(6);
    expect(console.log.mock.calls[0][0]).toEqual('     #');
    expect(console.log.mock.calls[1][0]).toEqual('    ##');
    expect(console.log.mock.calls[2][0]).toEqual('   ###');
    expect(console.log.mock.calls[3][0]).toEqual('  ####');
    expect(console.log.mock.calls[4][0]).toEqual(' #####');
    expect(console.log.mock.calls[5][0]).toEqual('######');
    expect(console.log.mock.calls.length).toEqual(6);
});