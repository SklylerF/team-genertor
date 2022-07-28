
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown");
const manager = require('./lib/manager')
const intern = require('./lib/intern')
const engineer = require('./lib/engineer')
const employee = require('./lib/employee')
// manager questions
const managerQuestions = [
  {
    type: 'input',
    message: "what is the team managers name?",
    name: "manager",
  },
  {
    type: 'input',
    message: "What is the managers employee ID?",
    name: 'managerID'
  },
  {
    type: 'input',
    message: "What is the managers email adress?",
    name: 'managerEmail'
  },
  {
    type: 'input',
    message: 'what is the managers office number?',
    name: 'managerOfficeNumber'
  },
 
];

// intern questions
const internQuestions = [
  {

    type: 'input',
    message: "Enter intern's name",
    name: 'intern',
  },
  {
    type: 'input',
    message: "What is the intern employee ID?",
    name: 'internID'
  },
  {
    type: 'input',
    message: "What is the intern email adress?",
    name: 'internEmail'
  },
  {
    type: 'input',
    message: "what is the intern's school?",
    name: 'internSchool'
  }]
// engineer questions
const engineerQuestions = [
  {
    type: 'input',
    message: "Enter engineer's name",
    name: 'engineer',
  },
  {
    type: 'input',
    message: "What is the engineer employee ID?",
    name: 'engineerID'
  },
  {
    type: 'input',
    message: "What is the engineer email adress?",
    name: 'engineerEmail'
  },
  {
    type: 'input',
    message: "what is the engineer office number?",
    name: 'engineerOfficeNumber'
  },
  {
    type: 'input',
    message: "what is the engineer's GitHub?",
    name: 'engineerGitHub'
  }]
  const menue = [{
    type: "list",
    message: "Add team members or finish building your team.",
    name: 'menue',
    choices: ["add an engineer", "add an intern", "or finish"],
  },]
 
async function init() {
  let response = await inquirer.prompt(managerQuestions)
}
init()