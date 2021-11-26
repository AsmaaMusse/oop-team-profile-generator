const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the employee?",
  },

  {
    type: "input",
    name: "id",
    message: "What is the Id of the employee?",
  },

  {
    type: "input",
    name: "email",
    message: "What is this email of this employee?",
  },

  {
    type: "list",
    name: "role",
    message: "Which employee role do you want to add?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];
