const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const employeeArray = [];

const start = async () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "teamName",
            message: "Enter team Name:"
        }
    ])
    .then (function(answers) {
        const teamName = answers.teamName;
        employeeArray.push(teamName);
        addEmployee();
    })
}

const addEmployee = () => {
    const addManager = () => {
        inquirer.prompt ([
            {
                type: "input",
                name: "name",
                message: "Enter manager's name:"
            },
            {
                type: "input",
                name: "id",
                message: "Enter manager's ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter manager's email:"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter manager's officeNumber:"
            }
        ])

        .then(function(answers) {
            const name = answers.name,
            const id = answers.id,
            const email = answers.email,
            const officeNumber = answers.officeNumber,
            const manager = new Manager (name, id, email, officeNumber)
            employeeArray.push(manager)
        })
    }

    const addEngineer = () => {
        inquirer.prompt ([
            {
                type: "input",
                name: "name",
                message: "Enter engineer's name:"
            },
            {
                type: "input",
                name: "id",
                message: "Enter engineer's ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter engineer's email:"
            },
            {
                type: "input",
                name: "github",
                message: "Enter engineer's github:"
            }
        ])

        .then(function(answers) {
            const name = answers.name,
            const id = answers.id,
            const email = answers.email,
            const github = answers.github,
            const engineer = new Engineer (name, id, email, github)
            employeeArray.push(engineer)
        })
    }

    const addIntern = () => {
        inquirer.prompt ([
            {
                type: "input",
                name: "name",
                message: "Enter intern's name:"
            },
            {
                type: "input",
                name: "id",
                message: "Enter intern's ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter intern's email:"
            },
            {
                type: "input",
                name: "school",
                message: "Enter intern's school:"
            }
        ])

        .then(function(answers) {
            const name = answers.name,
            const id = answers.id,
            const email = answers.email,
            const school = answers.school,
            const intern = new Intern (name, id, email, school)
            employeeArray.push(intern)
        })
    }

    const addNewMember = () => {
        inquirer.prompt ([
            {
                type: "confirm",
                name: "newMember",
                message: "Would you like to add another employee?"
            }
        ])
        .then (function(answers) {
            switch (answers.newMember) {
                case "Yes, add manager":
                    addManager();
                    break;

                case "Yes, add engineer":
                    addEngineer();
                    break;
            
                case "Yes, add intern":
                    addIntern();
                    break;
                
                case "No, my is done":
                    createHTML();    
                    break;
            }
        });
    }

    addManager();
    addEngineer();
    addIntern();
    addNewMember();
}
start();
