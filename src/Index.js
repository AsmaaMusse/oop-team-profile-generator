const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

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

const engineerQuestion = [
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

const internQuestion = [
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

const start = async () => {
  const answers = await inquirer.prompt(questions);
  const html = generateHtml(answers);

  addEmployee();

  writeToFile("generatedHtml.md", html);
};

const addEmployee = async () => {
  const { role } = await inquirer.prompt(questions)
   .then((answers) => {

    let name = answers.name;
    let id = answers.id;
    let email = answers.email;
    let role = answers.role;

    let officeNumber = answers.officeNumber;
    let school = answers.school;
   
   if(role === "Engineer") {
    
    inquirer.prompt(engineerQuestion).then((answers) => {
        let github = answers.github;  
        let employee = new Engineer (name)

    })
   }
  },
};


const generateHtml = (answers) => {
  return "";
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};
start();
