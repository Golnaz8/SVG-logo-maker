const { Circle, Rectangle, Triangle } = require('./shape');


function generateLogo(data) {

    let shapeObj;
    let xOfText;
    let yOfText;

    switch (data.shape) {
        case 'rectangular':
            shapeObj = new Rectangle(data.shapeColor, 100, 50, 150, 150); 
            xOfText = 175;
            yOfText = 140;
            break;
        case 'circle':
            shapeObj = new Circle(data.shapeColor, 150, 100, 80); 
            xOfText = 150;
            yOfText = 112;
            break;
        case 'triangle':
            shapeObj = new Triangle(data.shapeColor, 150, 50, 50, 200, 250, 200); 
            xOfText = 150;
            yOfText = 175;
            break;
    }

    console.log(shapeObj);
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeObj.generateShape()}
    <text x="${xOfText}" y="${yOfText}" text-anchor="middle" font-size="50" fill="${data.textColor}">${data.text}</text>
  </svg>`;
}

module.exports = {
    generateLogo,
};