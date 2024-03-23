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
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
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
function generateREADME(answers) {
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under ${answers.license}.

## Contributing
${answers.contributing}

## Tests
Include any test instructions here.

## Questions
For questions or feedback, please contact:
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
`;

    writeToFile('README.md', readmeContent);
}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            generateREADME(answers);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();
