const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


const writeFileAsync = util.promisify(fs.writeFile);

//ask user for their input
const promptUser = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
            {type: "input",
             message: "What is the project description, installation instructions, usage information, contribution guildlines, and test instructions?",
             name: "description",
        },
            {type: "list",
            message: "What is the license?",
            choices: [
                "MIT",
                "Apache"
                ],
            name: "license"
        },
            {type: "input",
            message: "What is your Github username?",
            name: "gitHubName"
            
            },
            {type: "input",
            message: "What is your Email?",
            name: "email"
            
            },
            {type: "checkbox",
            message: "How can you be reached?",
            choices: [
                "Cell Phone",
                "Twitter",
                "Slack"
            ],
            name: "contact"
            },
            
    ]).then (function(response){
        console.log(response);
        let createReadme = generateREADME(response);
        console.log(createReadme);
        writeFileAsync("README.md", createReadme).then(
            err => console.log("success!")
        )
    })
}

promptUser();

function generateREADME(response){
    let readMe =
`### **Table of Contents:**
    
[Go to Title](#title)
    
[Go to Description](#description)
    
[Go to License](#license)
    
[Go to GitHubName](#github)
    
[Go to Email](#email)
    
[Go to Contact](#contact)

# Title:
# ${response.title}

## Description:
${response.description}

## License:
_${response.license}_

## Github:
[**${response.gitHubName}**](http://github.com/${response.gitHubName})

## Email:
*${response.email}*

## Contact:
${response.contact}

## Link:
[Screen recording](https://drive.google.com/file/d/1h7HdjW6Uuaq9oOSgrP0KOpYiG-c8iUpu/view)
`
    return(readMe)
}
