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

// const addEmployeeQuestions = [
//   {
//     type: "confirm",
//     name: "addMember",
//     message: "Would you like to add another employee?",
//   },
// ];

let employeeArray = [];

// Function to start run the application
const start = async () => {
  const answers = await inquirer.prompt(introQuestions).then((answers) => {
    let name = answers.name;
    let id = answers.id;
    let email = answers.email;
    let role = answers.role;

    // If chosen role = manager
    if (role === "Manager") {
      // Prompt user with manager questions
      inquirer.prompt(managerQuestions).then(function ({ officeNumber }) {
        let employee = new Manager(name, id, email, officeNumber);
        // Push data into employee array.
        employeeArray.push(employee);
      });
    } else if (role === "Engineer") {
      // If chosen role = engineer
      // Prompt user with engineer questions
      inquirer.prompt(engineerQuestions).then(function ({ github }) {
        let github = answers.github;
        let employee = new Engineer(name, id, email, github);
        // Push data into employee array.
        employeeArray.push(employee);
      });
    } else if (role === "Intern") {
      // Else if the chosen role = intern
      // Prompt user with intern questions
      inquirer.prompt(internQuestions).then(function ({ school }) {
        let school = answers.school;
        let employee = new Intern(name, id, email, school);
        // Push data into employee array.
        employeeArray.push(employee);
      });
    }
  });

  const html = generateHtml(answers);
  writeToFile("generatedHTML.md", html);
};

const generateHtmlIntro = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />
  
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,700;0,900;1,100;1,200;1,600&display=swap"
        rel="stylesheet"
      />
  
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
        crossorigin="anonymous"
      />
  
      <link rel="stylesheet" href="./styles.css" />
      <title>My Team</title>
    </head>`;
};

const generateTeamName = (answers) => {
  return `<body>
  <header class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 bg-dark text-white">
          <h1 class="text-center">
            <i class="fas fa-users"></i> ${answers.teamName}
          </h1>
        </div>
      </div>
    </div>
  </header>

  <div class="container">
    <div class="row">
      <div
        class="team-area col-12 d-flex flex-wrap justify-content-between p-3"
      >`;
};

const generateManagerCard = (answers) => {
  return `<div class="card employee-card mr-1 mt-3">
  <div class="card-header">
    <h2 class="card-title">${answers.name}</h2>
    <h3 class="card-title">Manager</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">
        <span class="material-icons">fingerprint</span> ID: ${answers.id}
      </li>
      <li class="list-group-item text-dark">
        <span class="material-icons">email</span> Email:
        <a href="mailto:{{ email }}">${answers.email}</a>
      </li>
      <li class="list-group-item">
        <span class="material-icons">business</span> Office Number:
        ${answers.officeNumber}
      </li>
    </ul>
  </div>
</div>
`;
};

const generateEngineerCard = (answers) => {
  return `<div class="card employee-card mr-1 mt-3">
  <div class="card-header">
    <h2 class="card-title">${answers.name}</h2>
    <h3 class="card-title bg-info">Engineer</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">
        <span class="material-icons"></span> ID: ${answers.id}
      </li>
      <li class="list-group-item text-dark">
        <span class="material-icons">email</span> Email:
        <a href="mailto:{{ email }}">${answers.email}</a>
      </li>
      <li class="list-group-item text-dark">
        <span class="material-icons">code</span> GitHub:
        <a href="https://github.com/{{ github }}" target="_blank"
          >${answers.github}</a
        >
      </li>
    </ul>
  </div>
</div>
`;
};

const generateInternCard = (answers) => {
  return `<div class="card employee-card mr-1 mt-3">
  <div class="card-header">
    <h2 class="card-title">${answers.name}</h2>
    <h3 class="card-title">Intern</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">
        <span class="material-icons">fingerprint</span> ID: ${answers.id}
      </li>
      <li class="list-group-item text-dark">
        <span class="material-icons">email</span> Email:
        <a href="mailto:{{ email }}">${answers.email}</a>
      </li>
      <li class="list-group-item">
        <span class="material-icons">school</span> School: ${answers.school}
      </li>
    </ul>
  </div>
</div>
`;
};

const generateHtmlEnd = () => {
  return ` </div>
  </div>
</div>
</body>
</html>
`;
};

const generateHtml = (answers) => {
  return `${generateHtmlIntro(answers)}
  ${generateTeamName(answers)}
  ${generateManagerCard(answers)}
  ${generateEngineerCard(answers)}
  ${generateInternCard(answers)}
  ${generateHtmlEnd(answers)}`;
};

const writeToFile = (filePath, htmlFile) => {
  try {
    fs.writeFileSync(filePath, htmlFile);
  } catch (error) {
    console.log(error.message);
  }
};

start();
