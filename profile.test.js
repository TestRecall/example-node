const generate =  require('./utils/generate');

generate({ name: "profile", tests: 10, failRate: 0.01, skipRate: 0, missChance: 0 })
