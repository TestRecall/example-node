const sum = require('./sum');

// simple test case
describe('outer', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
