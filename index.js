// Linking in fileshare and inquirer

const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');

inquirer
.prompt([
    {
      type: 'confirm',
      message: 'Would you like to create a team page?',
      name: 'opener',
    }
])
.then((response)=> {
if (response.opener) {
    console.log('ohno');
    Manager.managerInfo();
}
})










