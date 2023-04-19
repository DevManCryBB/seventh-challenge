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
        type: 'checkbox',
        message: 'What would you like in your table of contents?',
        name: 'TOC',
        choices: ['Installation','Usage','Credits','License']
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
]).then(ans=>{
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./style.css"/>
    </head>
    <body>
        <h1 class=h1>${ans.title}</h1>
        <h1 class=h1>Description</h1>
        <p>${ans.description}</p>
        <h1 class=h1>Table of Contents</h1>
            <p><ul>
            <li>${ans.TOC}</li>
            <li>${ans.TOC}</li>
            <li>${ans.TOC}</li>
            <li>${ans.TOC}</li>
            </ul></p>
        <h1 class=h1>Installation</h1>
        <p>${ans.installation}</p>
        <h1 class=h1>Usage</h1>
        <p>${ans.usage}</p>
        <p><a href="${ans.credits}">${ans.credits}</a></p>
    </body>
    </html>`
    console.log(ans)
    fs.writeFile(`./output/${ans.name}.html`,html,(err)=>{
        if (err){
            throw err
        }
        console.log('success!')
    })
})