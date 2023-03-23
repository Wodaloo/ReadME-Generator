const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const generateHTML = ({ title, description, test, Usage, contribution, installation, tblconts, license, Github, Email }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>ReadME.Generator</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
  <div class="container">
    <h1 class="display-4"> ${title}</h1>
    <p class="lead"> Description: ${description}.</p>
    <h3>  <span class="badge bg-secondary">${license}</span></h3>
    <ul class="list-group">
    <li class="list-group-item">Installation: ${installation}</li>
    <li class="list-group-item">Usage: ${Usage}</li>
    <li class="list-group-item">Contributing: ${contribution}</li>
    <li class="list-group-item">Tests: ${test}</li>
    <li class="list-group-item">This app is covered by the ${license} license.</li>
    <li class="list-group-item">Questions: Github: https://github.com/${Github} Email: ${Email} you can reach me by email or my number 801-234-3322 </li>
     <li class="list-group-item">Table of Contents: ${tblconts}</li> 
      </ul>
    </div>
  </header>
</body>
</html>`;



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Project Title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your Project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation Intructions:',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Usage Information:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'contribution guidelines:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Test instructions:',
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'license:',
            choices: ['MIT', 'Apache License 2.0', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'tblconts',
            message: 'Table of Contents:',
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Enter your GitHub Username:',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Your Email Address',
        },

    ]);
};

const init = () => {
    promptUser()

        .then((answers) => writeFile('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();