const { Square } = require('../lib/shape.js');

describe('Square', () => {
    // Test to verify that the Square class can be instantiated.
    describe('Instantiate', () => {
        it('should be an instance of Square class', () => {
            const square = new Square();

            expect(square).toBeInstanceOf(Square);
        });
    });

    describe('Initialize shapeColor', () => {
        it('should set shapeColor properly', () => {
            const shapeColor = 'blue';
            const square = new Square(shapeColor);

            expect(square.shapeColor).toBe(shapeColor);
        });
    });

    describe('Initialize x', () => {
        it('should set x properly', () => {
            const x = '100';
            const square = new Square('blue', x);

            expect(square.x).toBe(x);
        });
    });

    describe('Initialize y', () => {
        it('should set y properly', () => {
            const y = '50';
            const square = new Square('blue', '100', y);

            expect(square.y).toBe(y);
        });
    });

    describe('Initialize width', () => {
        it('should set width properly', () => {
            const width = '150';
            const square = new Square('blue', '100', '50', width);

            expect(square.width).toBe(width);
        });
    });

    describe('Initialize height', () => {
        it('should set height properly', () => {
            const height = '150';
            const square = new Square('blue', '100', '50', '150', height);

            expect(square.height).toBe(height);
        });
    });

    describe('generateShape() method', () => {
        it('should print message with data', () => {
            const square = new Square('blue', '100', '50', '150', '150');

            expect(square.generateShape()).toBe(
                `<rect x="100" y="50" width="150" height="150" fill="blue" />`
            );
        });
    });
});