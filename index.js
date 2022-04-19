const missionCommander = require("./app/missionComander")

const marcos = new missionCommander('Marcos')
const fer = new missionCommander('Fer')
const carlo = new missionCommander('Carlo')

console.log(carlo.name)
console.log(fer.name)
console.log(marcos.name)