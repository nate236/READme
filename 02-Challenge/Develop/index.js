// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Whatt is the Description of your file:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines:',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your git hub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('DONE!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions).then((responses) => {
    const markdown = generateMarkdown(responses);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();