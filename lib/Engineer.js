const Employee = require("./Employee");

// Creates an Engineer class which extends the Employee class and then adds new methods 
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github; 
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer"; 
  }
}

module.exports = Engineer;