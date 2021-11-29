const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeeArray = [];

const start = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "teamName",
        message: "Enter team Name:",
      },
    ])
    .then(function (answers) {
      const teamName = answers.teamName;
      employeeArray.push(teamName);
    });
};

const addEmployee = () => {
  const addManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter manager's name:",
        },
        {
          type: "input",
          name: "id",
          message: "Enter manager's ID:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter manager's email:",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter manager's officeNumber:",
        },
      ])

      .then(function (answers) {
        const name = answers.name,
          id = answers.id,
          email = answers.email,
          officeNumber = answers.officeNumber,
          manager = new Manager(name, id, email, officeNumber);
        employeeArray.push(manager);
      });
  };

  const addEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter engineer's name:",
        },
        {
          type: "input",
          name: "id",
          message: "Enter engineer's ID:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter engineer's email:",
        },
        {
          type: "input",
          name: "github",
          message: "Enter engineer's github:",
        },
      ])

      .then(function (answers) {
        const name = answers.name,
          id = answers.id,
          email = answers.email,
          github = answers.github,
          engineer = new Engineer(name, id, email, github);
        employeeArray.push(engineer);
      });
  };

  const addIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter intern's name:",
        },
        {
          type: "input",
          name: "id",
          message: "Enter intern's ID:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter intern's email:",
        },
        {
          type: "input",
          name: "school",
          message: "Enter intern's school:",
        },
      ])

      .then(function (answers) {
        const name = answers.name,
          id = answers.id,
          email = answers.email,
          school = answers.school,
          intern = new Intern(name, id, email, school);
        employeeArray.push(intern);
      });
  };

  const addNewMember = () => {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "newMember",
          message: "Would you like to add another employee?",
        },
      ])

      .then(function (answers) {
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
            generateHtml();
            break;
        }
      });
  };

  addManager();
  addEngineer();
  addIntern();
  addNewMember();
};

start();
addEmployee();
