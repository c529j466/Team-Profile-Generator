const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");


const teamMembers = [];

const createTeam = function() {
  inquirer
  .prompt([
      {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'name',
      },
    
      {
        type: 'input',
        message: "What is the employee's ID number?",
        name: 'id',
      },
      {
        type: 'input',
        message: "What is the employee's email?",
        name: 'email',
      },
      {
        type: "list",
        message: "What is the employee's role?",
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern'],
      },
    ])
    
   .then((response)=> {
        inquirer
        .prompt([
          {
            
            type: 'input',
            message: 'What is your office number',
            name: 'officeNumber',
            when: () => response.role === "Manager",
          },
          {
            type: 'input',
            message: "What is your Github Username?",
            name: 'github',
            when: () => response.role === "Engineer",
          },

          {
            type: 'input',
            message: "What is your school's name?",
            name: 'school',
            when: () => response.role === "Intern",
          },

          {
            type: 'confirm',
            message: "Would you like to add another team member?",
            name: 'addMember',
          },
        ])

        .then((newResponse) => {
          if (response.role === "Manager") {
            const manager = new Manager(response.name, response.id, response.email, response.role, response.officeNumber);
            teamMembers.push(manager);
          }

          else if (response.role === "Engineer") {
            const engineer = new Engineer(response.name, response.id, response.email, response.role, newResponse.github);
            teamMembers.push(engineer);
          }

           else if (response.role === "Intern") {
            const intern = new Intern(response.name, response.id, response.email, response.role, newResponse.school);
            teamMembers.push(intern);
          }
          
          if (newResponse.addMember) {
            createTeam();
          } 
          
          else {
            teamMembers.forEach((members) => {
                console.log(members);
            })
            };
            
    fs.writeFile('Team_Generator.HTML', 'comming soon template literal variable', (err) => {
        if (err) {
          throw err;
        }
        console.log("Success!");
        });
      });
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
};

createTeam(); 











