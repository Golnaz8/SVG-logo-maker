# Object-oriented Programming: SVG Logo Maker

## Description

In this project I tried to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.


## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

The following walkthrough video, demonstrates aaplication's functionality and passes all of the tests:

https://drive.google.com/file/d/1GY7hRIKpRFgzSUDW9hnDY_c5c1DewfK0/view

## Installation

To install necessary dependencies, run the following command:

npm i 
npm install inquirer@8.2.4
npm install jest@24.9.0 --save-dev

## Questions

If you have any question, feel free to contact through this email address: golnaz.brj@gmail.com

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

