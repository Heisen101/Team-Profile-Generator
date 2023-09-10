const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamMembers = []; //answer stored
function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Provide us with manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Provide us with manager's emploee ID, please:",
      },
      { type: "input", name: "email", message: "Enter the manager's email: " },
      {
        type: "input",
        name: "officeNumber",
        message: "Provide us with the manager's office number:",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
}
function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Provide us with engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Provide us with engineer's emploee ID, please:",
      },
      { type: "input", name: "email", message: "Enter the engineer's email: " },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username:",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptMenu();
    });
}
function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Provide us with intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Provide us with intern's emploee ID, please:",
      },
      { type: "input", name: "email", message: "Enter the intern's email: " },
      {
        type: "input",
        name: "school",
        message: "Enter the inter's school::",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(intern);
      promptMenu();
    });
}
