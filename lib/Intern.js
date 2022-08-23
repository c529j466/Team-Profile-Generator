const Employee = require("./Employee");

// Creates an Intern class which extends the Employee class and then adds new methods 
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  } 
}

module.exports = Intern;

