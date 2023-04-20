const inquirer = require('inquirer');
const fs = require('fs')
inquirer

.prompt([
    {
        type: 'input',
        message: 'Project Title: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Project Description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Add instructions for usage here, add your screenshots later.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Add GitHub URLs to project contributors: ',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Did you have any third party collaborators?',
        name: 'ThreeP',
    },
    {
        type: 'input',
        message: 'Did you follow any tutorials? Add link here: ',
        name: 'tuts',
    },
    {
        type: 'list',
        message: 'What license did you use?',
        choices: ['MIT','Apache2.0','GPL3.0', 'BSD3', 'None'],
        name: 'license',
    },
]).then(ans=>{
    const readmeFile = `

    # ${ans.title}
    ${licenseBadge(ans.license)}

    ## Description
    
    ${ans.description}

    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${ans.installation}
    
    ## Usage
    
    ${ans.usage}
    
    To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:
    
    ![alt text](assets/images/screenshot.png)
    
    ## Credits
    
    ${ans.credits}
    ${ans.ThreeP}
    ${ans.tuts}
    
    ## License
    ${ans.license}
    `
    console.log(ans)
    fs.writeFile(`./output/README.md`,readmeFile,(err)=>{
        if (err){
            throw err
        }
        console.log('success!')
    })
})
function licenseBadge(license) {
    if (license !== "None"){
      return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ""
  }