const employee = require("./employee");

class intern extends employee {
    constructor(name, ID, email, school) {
        super(name, ID, email)
        this.school = school;
    }
    getRole() { return "intern" }
    getSchool() { return this.school }
}
module.exports = intern;