const generate =  require('./utils/generate');

generate({ name: "goals", tests: 10, failRate: 0, skipRate: 0, missChance: 0.1 })
