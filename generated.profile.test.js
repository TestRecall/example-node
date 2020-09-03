const generate = require('./generate');

generate({ name: "profile", tests: 10, failRate: 0.05, skipRate: 0, missChance: 0 })
