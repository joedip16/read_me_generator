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
             message: "What is the project description, intallation instructions, usage information, contribution guildlines, and test instructions?",
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
    `# ${response.title}
#-title

**Description, Installation, Usage, Contributing, and Tests: ${response.description}**

_${response.license}_

[**${response.gitHubName}**](http://github.com/joedip16)

*${response.email}*

**${response.contact}**

**Table of Contents**

[Go to Title](#title)

[description](READEME.md/description)

[license](READEME.md/license)

[gitHubName](READEME.md/githubname)

[email](READEME.md/email)

[contact](READEME.md/contact)
`
    return(readMe)
}

//using input generate html file to string format