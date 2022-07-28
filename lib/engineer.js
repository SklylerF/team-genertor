const employee = require("./employee");

class engineer extends employee{
    constructor(name, ID, email, GitHub){
        super(name,ID,email)
        this.GitHub = GitHub;
    }
    getRole() {return "engineer"}
    getGitHub() {return this.GitHub}
}
module.exports = engineer;