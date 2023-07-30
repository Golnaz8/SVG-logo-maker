const { Square } = require('../lib/shape.js');

describe('Square', () => {
    // Test to verify that the Square class can be instantiated.
    describe('Instantiate', () => {
        it('should be an instance of Square class', () => {
            const square = new Square();

            expect(square).toBeInstanceOf(Square);
        });
    });

    // Test to verify that shapeColor can be assigned.
    describe('Initialize shapeColor', () => {
        it('should set shapeColor properly', () => {
            const shapeColor = 'blue';
            const square = new Square(shapeColor);

            expect(square.shapeColor).toBe(shapeColor);
        });
    });

    // Test to verify that x can be assigned.
    describe('Initialize x', () => {
        it('should set x properly', () => {
            const x = '100';
            const square = new Square('blue', x);

            expect(square.x).toBe(x);
        });
    });

    // Test to verify that y can be assigned.
    describe('Initialize y', () => {
        it('should set y properly', () => {
            const y = '50';
            const square = new Square('blue', '100', y);

            expect(square.y).toBe(y);
        });
    });

    // Test to verify that width can be assigned.
    describe('Initialize width', () => {
        it('should set width properly', () => {
            const width = '150';
            const square = new Square('blue', '100', '50', width);

            expect(square.width).toBe(width);
        });
    });

    // Test to verify that height can be assigned.
    describe('Initialize height', () => {
        it('should set height properly', () => {
            const height = '150';
            const square = new Square('blue', '100', '50', '150', height);

            expect(square.height).toBe(height);
        });
    });

    // Test to verify that generateShape() returns the correct data.
    describe('generateShape() method', () => {
        it('should print message with data', () => {
            const square = new Square('blue', '100', '50', '150', '150');

            expect(square.generateShape()).toBe(
                `<rect x="100" y="50" width="150" height="150" fill="blue" />`
            );
        });
    });
});