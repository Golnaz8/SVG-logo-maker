class Shape {
    constructor(shapeColor,x,y) {
        this.shapeColor = shapeColor;
        this.x = x;
        this.y = y;
    }

    generateShape(){
        return '';
    }
}


class Rectangle extends Shape {
    constructor(shapeColor,x,y,width,height) {
        super(shapeColor,x,y);
        this.width = width;
        this.height = height;
    }

    generateShape() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.shapeColor}" />`;
    }
}


class Circle extends Shape {
    constructor(shapeColor,x,y,radius) {
        super(shapeColor,x,y);
        this.radius = radius;
    }

    generateShape() {
        return `<rect cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.shapeColor}" />`;
    }
}


class Triangle extends Shape {
    constructor(shapeColor,x,y,x2,y2,x3,y3) {
        super(shapeColor,x,y);
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }

    generateShape() {
        return `<polygon points="${this.x},${this.y} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.shapeColor}" />`;
    }
}


module.exports = {
    Rectangle,
    Circle,
    Triangle
};