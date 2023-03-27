// import inquire and fs
const inquirer = require("inquirer");
const fs = require("fs");
//import shape classes
const Circle = require("./assets/shapes/circle");
const Square = require("./assets/shapes/square");
const Triangle = require("./assets/shapes/triangle");
const Shape = require("./assets/shapes/shape");

// array of questions for user

const questions = [
  {
    type: "input",
    name: "logoText",
    message: "Enter up to 3 characters for your logo",
    validate: (logo) => {
      if (logo.length > 4) {
        return "Please enter up to 3 characters";
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    name: "shapePrompt",
    message: "What shape would you like your logo to be?",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "colorText",
    message: "What color would you like your text to be?",
  },

  {
    type: "input",
    name: "colorBackground",
    message: "What color would you like your shape to be?",
  },
];

inquirer.prompt(questions).then((answers) => {
  const { logoText, shapePrompt, colorText, colorBackground } = answers;
  let shape = "";
  switch (shapePrompt) {
    case "Circle":
      shape = new Circle(logoText, colorText, colorBackground);
      break;
    case "Square":
      shape = new Square(logoText, colorText, colorBackground);
      break;
    case "Triangle":
      shape = new Triangle(logoText, colorText, colorBackground);
      break;
  }
  const logo = shape.render();
  //create logo.svg file to ./assets/dest folder
    fs.writeFile("./assets/dest/logo.svg", logo, (err) =>
    err ? console.log(err) : console.log("Success!")

//   fs.writeFile("logo.svg", logo, (err) =>
//     err ? console.log(err) : console.log("Success!")
  );
});

// const logo = new Circle("ABC", "red", "blue");
// const logo = new Square("ABC", "red", "blue");
// const logo = new Triangle("ABC", "red", "blue");
// const logo = new Shape("ABC", "red", "blue");
