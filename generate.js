// generate test data based off fail/skip/missing
module.exports = function (suite) {
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
}
