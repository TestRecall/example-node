const sum = require('./sum');

// simple test case
describe('outer', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

const suites = [
  { name: "comments", tests: 10, failRate: 0, skipRate: 0, missChance: 0 },
  { name: "accounts", tests: 10, failRate: 0, skipRate: 0, missChance: 0 },
  { name: "register", tests: 10, failRate: 0, skipRate: 0.1, missChance: 0 },
  { name: "billing", tests: 10, failRate: 0, skipRate: 0, missChance: 0 },
  { name: "rewards", tests: 10, failRate: 0.1, skipRate: 0.1, missChance: 0.1 },
  { name: "goals", tests: 10, failRate: 0, skipRate: 0, missChance: 0 },
  { name: "statistics", tests: 10, failRate: 0, skipRate: 0, missChance: 0.1 },
  { name: "teams", tests: 10, failRate: 0, skipRate: 0, missChance: 0 },
  { name: "profile", tests: 10, failRate: 0.1, skipRate: 0, missChance: 0 },
  { name: "history", tests: 10, failRate: 0, skipRate: 0, missChance: 0 },
]

// generate test data based off fail/skip/missing
suites.forEach(suite => {
  describe(suite.name, () => {
    for (let i = 0; i < suite.tests; i++) {
      const testName = suite.name + "_" + i;

      if (Math.random() < suite.skipRate) {
        test.skip(testName, () => { })
      } else if (Math.random() < suite.missChance) {
        continue;
      } else {
        const passRoll = Math.random();
        test(testName, () => {
          expect(passRoll).toBeGreaterThan(suite.failRate);
        })
      }

    }
  })
})
