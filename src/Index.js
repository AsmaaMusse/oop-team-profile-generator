const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

//  Starter questions
const teamQuestion = [
  {
    type: "input",
    name: "teamName",
    message: "Enter team name:",
  },
];

const teamRole = [
  {
    type: "list",
    name: "role",
    message: "Which employee role do you want to add?",
    choices: ["Manager", "Engineer", "Intern"],
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

const continueQuestion = {
  type: "confirm",
  message: "Do you want to add another employee?",
  name: "quit",
};

let employeeArray = [];

// Function to start run the application
const start = async () => {
  let inProgress = true;
  const results = [];

  const { teamName } = await inquirer.prompt(teamQuestion);
  console.log(teamName);

  while (inProgress) {
    const { role } = await inquirer.prompt(teamRole);

    if (role === "Manager") {
      const { name, id, email, officeNumber } = await inquirer.prompt(
        managerQuestions
      );

      const employee = new Manager(name, id, email, officeNumber);

      employeeArray.push(employee);
    } else if (role === "Engineer") {
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );

      const employee = new Engineer(name, id, email, github);

      employeeArray.push(employee);
    } else if (role === "Intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );

      const employee = new Intern(name, id, email, school);

      employeeArray.push(employee);
    }

    const { quit } = await inquirer.prompt(continueQuestion);

    if (!quit) {
      inProgress = false;
      fs.mkdirSync(fileDirectory);
    }
    const writeToFile = (filePath, htmlFile) => {
      try {
        fs.writeFileSync(filePath, htmlFile);
      } catch (error) {
        console.log(error.message);
      }
    };
  }

  const htmlFile = generateHtml(employeeArray);
  writeToFile("generatedHTML.md", htmlFile);
  const html = generateHtml(employeeArray);
  writeToFile("generatedHTML.md", html);
};

// const generateHtmlIntro = () => {
//   return `<!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta http-equiv="X-UA-Compatible" content="ie=edge" />

//       <link
//         rel="stylesheet"
//         href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
//         integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
//         crossorigin="anonymous"
//       />

//       <link rel="preconnect" href="https://fonts.gstatic.com" />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,700;0,900;1,100;1,200;1,600&display=swap"
//         rel="stylesheet"
//       />

//       <link
//         href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
//         rel="stylesheet"
//         integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
//         crossorigin="anonymous"
//       />

//       <link rel="stylesheet" href="./styles.css" />
//       <title>My Team</title>
//     </head>`;
// };

// const generateTeamName = (teamName) => {
//   return `<body>
//   <header class="header">
//     <div class="container-fluid">
//       <div class="row">
//         <div class="col-12 jumbotron mb-3 bg-dark text-white">
//           <h1 class="text-center">
//             <i class="fas fa-users"></i> ${teamName.teamName}
//           </h1>
//         </div>
//       </div>
//     </div>
//   </header>

//   <div class="container">
//     <div class="row">
//       <div
//         class="team-area col-12 d-flex flex-wrap justify-content-between p-3"
//       >`;
// };

// const generateHtmlEnd = () => {
//   return ` </div>
//   </div>
// </div>
// </body>
// </html>
// `;
// };

// const generateHtml = (answers) => {
//   return `${generateHtmlIntro(answers)}
//   ${generateTeamName(answers)}
//   ${generateManagerCard(manager)}
//   ${generateEngineerCard(engineer)}
//   ${generateInternCard(intern)}
//   ${generateHtmlEnd(answers)}`;
// };

start();
