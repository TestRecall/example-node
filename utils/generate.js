// generate test data based off fail/skip/missing
module.exports = function (suite) {
  describe(suite.name, () => {
    for (let i = 0; i < suite.tests; i++) {
      const testName = "test_" + i;

      if (Math.random() < suite.skipRate) {
        // generate skipped test
        test.skip(testName, () => { })
      } else if (Math.random() < suite.missChance) {
        // do not generate test
        continue;
      } else {
        // generate pass or fail test
        const passRoll = Math.random();
        test(testName, () => {
          expect(passRoll).toBeGreaterThan(suite.failRate);
        })
      }
    }
  })
}
