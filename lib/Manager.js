const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(office) {
       super(name, id, email) 
       this.office = office;

    }

getRole() {
return "Manager";
}
}


const managerInfo= function() {
    inquirer
    .prompt([
        {
          type: 'input',
          message: 'What is your name',
          name: 'managerName',
        },
        {
          type: 'input',
          message: 'What is your ID number?',
          name: 'managerId',
        },
        {
          type: 'input',
          message: 'What is your email address?',
          name: 'managerEmail',
        },
        {
          type: 'input',
          message: 'What is your office number',
          name: 'officeNumber',
        },
    ])
.then((response)=> {

})
}

module.exports = {
    managerInfo,
}