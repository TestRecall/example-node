const generate =  require('./utils/generate');

generate({ name: "rewards", tests: 10, failRate: 0.01, skipRate: 0.1, missChance: 0.1 })
