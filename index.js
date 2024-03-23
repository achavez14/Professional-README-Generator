// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can users install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should users use your project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the license for your project?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README file created successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // Generate README content based on user input
            const readmeContent = `# ${answers.title}\n\n${answers.description}\n`;
            // Write README file
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();
