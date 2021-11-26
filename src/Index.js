const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//  Starter questions
const introQuestions = [
  {
    type: "input",
    name: "teamName",
    message: "Enter team name:",
  },

  {
    type: "list",
    name: "role",
    message: "Which employee role do you want to add?",
    choices: ["Manager", "Engineer", "Intern", "None"],
  },
];

// Questions to be rendered depending on the role chosen
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter employee name:",
  },
    
  {
    type: "input",
    name: "id",
    message: "Enter employee ID:",
  },
    
  {
    type: "input",
    name: "email",
    message: "Enter employee email:",
  },

  {
    type: "input",
    name: "officeNumber",
    message: "Enter manager's office number:",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter employee name:",
  },
    
  {
    type: "input",
    name: "id",
    message: "Enter employee ID:",
  },
    
  {
    type: "input",
    name: "email",
    message: "Enter employee email:",
  },

  {
    type: "input",
    name: "github",
    message: "Enter engineer's github:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter employee name:",
  },
    
  {
    type: "input",
    name: "id",
    message: "Enter employee ID:",
  },
    
  {
    type: "input",
    name: "email",
    message: "Enter employee email:",
  }, 

  {
    type: "input",
    name: "school",
    message: "Enter Intern's school:",
  },
];

const addEmployee = [
    {
      type: "confirm",
      name: "newMember",
      message: "Would you like to add another employee?",
    },
];    

// Empty employee array to push up into
let employeeArray = [];

// Function to start run the application
const start = async () => {
  const answers = await inquirer.prompt(introQuestions);
  const html = generateHtml(answers);

  addEmployee();

  writeToFile("generatedHtml.md", html);
};


const newEmployee = async () => {
  const { role } = await inquirer.prompt(addEmployee)
   .then((answers) => {

    let name = answers.name;
    let id = answers.id;
    let email = answers.email;
    let role = answers.role;

    let officeNumber = answers.officeNumber;
    let school = answers.school;
   
   if(role === "Engineer") {
    
    inquirer.prompt(engineerQuestions).then((answers) => {
        let github = answers.github;  
        let employee = new Engineer (name, id, email, github );


    })
   }
  },
};


const generateHtml = (answers) => {
  return "";
};

const writeToFile = (filePath, htmlFile) => {
  try {
    fs.writeFileSync(filePath, htmlFile);
  } catch (error) {
    console.log(error.message);
  }
};
start();
