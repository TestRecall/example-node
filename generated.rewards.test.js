const generate = require('./generate');

generate({ name: "rewards", tests: 10, failRate: 0.05, skipRate: 0.1, missChance: 0.1 })
