const missionCommander = require('./../app/missionComander')

describe("Unit test for Mission Commander Class", () => {
    test('1) Create a mission commander object', () => {
        const myMissionCommander = new missionCommander("Marcos")
        expect(myMissionCommander.name).toBe("Marcos")
    })
})