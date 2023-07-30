const { Shape } = require('../lib/shape.js');

describe('Shape', () => {
    // Test to verify that the Shape class can be instantiated.
    describe('Instantiate', () => {
        it('should be an instance of Shape class', () => {
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);
        });
    });

    describe('Initialize shapeColor', () => {
        it('should set shapeColor properly', () => {
            const shapeColor = 'blue';
            const shape = new Shape(shapeColor);

            expect(shape.shapeColor).toBe(shapeColor);
        });
    });

    describe('Initialize x', () => {
        it('should set x properly', () => {
            const x = '150';
            const shape = new Shape('blue', x);

            expect(shape.x).toBe(x);
        });
    });

    describe('Initialize y', () => {
        it('should set y properly', () => {
            const y = '100';
            const shape = new Shape('blue', '150', y);

            expect(shape.y).toBe(y);
        });
    });


    describe('generateShape() method', () => {
        it('should print message with data', () => {
            const shape = new Shape('blue');

            expect(shape.generateShape()).toBe('');
        });
    });
});