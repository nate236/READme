// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [

  {
    type: 'input',
    name: 'github',
    message: 'What is your git hub username:',
  },

  {
    type: 'input',
    name: 'email',
    message: 'What is your email address:',
  },

  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
  },

  {
    type: 'input',
    name: 'description',
    message: 'please write a short desricption of your project',
  },

  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'None'],
  },

  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions:',
  },

  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions:',
  },

  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using this repo?',
  },

  {
    type: 'input',
    name: 'contribution',
    message: 'Hwat does the user need to know about contributing to the repo',
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
  inquirer.prompt(questions).then((responses) => {
    const markdown = generateMarkdown(responses);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();