class employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    }


    getName() { return this.name }
    getId() { return this.ID }
    getEmail() { return this.email }
};
module.exports = employee;