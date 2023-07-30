const fs = require('fs');
const inquirer = require('inquirer');
const { generateLogo } = require ('./lib/generate.js');


// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: checkTextLength,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['rectangular', 'circle', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:',
      },
]


// A function to check the length of the text inside the shape
function checkTextLength(text) {
    if (text.length > 0 && text.length < 4) {
      return true;
    }
    return 'Please check the length of text.';
}


// A function to write svg file
function writeToFile(fileName, data) {
    const svgFile = generateLogo(data);

    fs.writeFile(fileName, svgFile, (err) =>
        err ? console.log('Error!') : console.log('Success!')
    );
}

// A function to initialize app
async function init() {
    
        const fileName = "logo.svg";
        const userInput = await inquirer.prompt(questions);

        writeToFile(fileName, userInput);
}
    
init();