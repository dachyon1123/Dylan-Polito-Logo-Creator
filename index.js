const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Shape, Triangle, Rectangle } = require('./lib/shapes')

inquirer
    .prompt([
        {
            type: 'input',
            message:'Type up to 3 characters.',
            name: 'text',
        },
        {
            type: 'input',
            message:'What color would you like your text to be? Enter a color or a hexadecimal value.',
            name: 'textColor',
        },
        {
            type: 'list',
            message:'What shape do you want? ',
            choices:    ['Square', 'Circle', 'Triangle'],
            name: 'shape',
        },
        {
            type: 'input',
            message:'What color would you like your shape to be? Ente ra color or a hexadecimal value.',
            name: 'shapeColor',
        }
    ]).then(answers => {
        let shape;
        let newSVG;

        if (answers.shape === 'Square') {
            shape = new Rectangle();
            newSVG = shape.createSVG(answers);
        } else if (answers.shape === 'Triangle') {
            shape = new Triangle();
            newSVG = shape.createSVG(answers);
        } else if (answers.shape === 'Circle') {
            shape = new Circle();
            newSVG = shape.createSVG(answers);
        } else {
            console.log("Enter an actual shape");
            return;
        }








        fs.writeFile('export.svg', newSVG, (err) => {
            if (err) {
                console.error('Error writing to file', err)
            }
            console.log('File has been written')
        })
    })