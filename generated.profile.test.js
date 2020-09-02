const generate = require('./generate');

generate({ name: "profile", tests: 10, failRate: 0.1, skipRate: 0, missChance: 0 })
