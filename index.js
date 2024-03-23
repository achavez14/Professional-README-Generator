const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project:'
        },
    // Add more prompts for other sections (installation, usage, etc.)
]).then((answers) => {
    // Logic to handle user input
    console.log(answers); // For testing purposes
});
