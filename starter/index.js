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
const teamMembers = [];
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
    .then((answers) => {});
}
