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
            var manager = new Manager(response.name, response.id, response.email, response.role, response.officeNumber);
            teamMembers.push(manager);
            ManagerHtml =  
            `<div class="card shadow" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
            <h2 class="card-title">${response.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2">${response.role}</i></h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${response.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${response.email}"> ${response.email}</a></li>
                <li class="list-group-item">Office Number: ${newResponse.officeNumber}</li>
            </ul>
        </div>
    </div>
    </div>`
          }

          else if (response.role === "Engineer") {
            const engineer = new Engineer(response.name, response.id, response.email, response.role, newResponse.github);
            teamMembers.push(engineer);
            EngineerHtml =  
            `<div class="card shadow" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
            <h2 class="card-title">${response.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2">${response.role}</i></h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${response.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${response.email}"> ${response.email}</a></li>
                <li class="list-group-item">GitHub:<a href="https://github.com/${newResponse.github}" target="_blank" rel="noopener noreferrer"> ${newResponse.github}</a></li>
            </ul>
        </div>
    </div>
    </div>`
          }

           else if (response.role === "Intern") {
            const intern = new Intern(response.name, response.id, response.email, response.role, newResponse.school);
            teamMembers.push(intern);
          }
          if (newResponse.addMember) {
            createTeam();
          } 
          
          else {

        var starterHtml = 
        `<!DOCTYPE html>
        <html lang="en">

        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="Description" content="Enter your description here" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        
        <title>Team Generator</title>
        </head>

        <body>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron team-heading bg-danger text-white">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                    </div>
                </div>
            </div>`

            var HTML = starterHtml += ManagerHtml += EngineerHtml;


            fs.writeFile('Team_Generator.HTML', HTML, (err) => {
                if (err) {
                  throw err;
                }
                console.log("Success!");
                });
            };
            
      });
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
};

createTeam(); 











