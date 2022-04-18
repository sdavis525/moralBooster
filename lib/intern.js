const Employee = require("./employee");

class intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id , email, school)
        this.schoolName= this.school;  
        
    }
    getSchool() {
        return this.schoolName;

    }

    getRole() {
        return intern;
    }
}

module.exports = intern;