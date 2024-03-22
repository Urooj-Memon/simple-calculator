#! /usr/bin/env node

import inquirer from "inquirer"; 

const answer = await inquirer.prompt([
{message: "Enter your first number", type: "number", name: "firstnumber" },
{message: "Enter your second number", type: "number", name: "secondnumber" },
{
 message: "select one of the operators to perform operation",
 type: "list",
 name: "operator",
 choices: ["Addition", "Subtraction", "Multiplication", "Division"],
},
]);

if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
 else if (answer.operator === "Multiplication") {
        console.log(answer.firstnumber*answer.secondnumber);          
 }
 else if (answer.operator === "Division") {
            console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid operator")
};