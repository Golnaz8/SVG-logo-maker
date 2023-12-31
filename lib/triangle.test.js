const { Triangle } = require('../lib/shape.js');

describe('Triangle', () => {
    // Test to verify that the Triangle class can be instantiated.
    describe('Instantiate', () => {
        it('should be an instance of Triangle class', () => {
            const triangle = new Triangle();

            expect(triangle).toBeInstanceOf(Triangle);
        });
    });

    // Test to verify that shapeColor can be assigned.
    describe('Initialize shapeColor', () => {
        it('should set shapeColor properly', () => {
            const shapeColor = 'blue';
            const triangle = new Triangle(shapeColor);

            expect(triangle.shapeColor).toBe(shapeColor);
        });
    });

    // Test to verify that x can be assigned.
    describe('Initialize x', () => {
        it('should set x properly', () => {
            const x = '150';
            const triangle = new Triangle('blue', x);

            expect(triangle.x).toBe(x);
        });
    });

    // Test to verify that y can be assigned.
    describe('Initialize y', () => {
        it('should set y properly', () => {
            const y = '50';
            const triangle = new Triangle('blue', '150', y);

            expect(triangle.y).toBe(y);
        });
    });

    // Test to verify that x2 can be assigned.
    describe('Initialize x2', () => {
        it('should set x2 properly', () => {
            const x2 = '50';
            const triangle = new Triangle('blue', '150', '50', x2);

            expect(triangle.x2).toBe(x2);
        });
    });

    // Test to verify that y2 can be assigned.
    describe('Initialize y2', () => {
        it('should set y2 properly', () => {
            const y2 = '200';
            const triangle = new Triangle('blue', '150', '50', '50', y2);

            expect(triangle.y2).toBe(y2);
        });
    });

    // Test to verify that x3 can be assigned.
    describe('Initialize x3', () => {
        it('should set x3 properly', () => {
            const x3 = '250';
            const triangle = new Triangle('blue', '150', '50', '50', '200', x3);

            expect(triangle.x3).toBe(x3);
        });
    });
    
    // Test to verify that y3 can be assigned.
    describe('Initialize y3', () => {
        it('should set y3 properly', () => {
            const y3 = '200';
            const triangle = new Triangle('blue', '150', '50', '50', '200', '250', y3);

            expect(triangle.y3).toBe(y3);
        });
    });

    // Test to verify that generateShape() returns the correct data.
    describe('generateShape() method', () => {
        it('should print message with data', () => {
            const triangle = new Triangle('blue', '150', '50', '50', '200', '250', '200');

            expect(triangle.generateShape()).toBe(
                `<polygon points="150,50 50,200 250,200" fill="blue" />`
            );
        });
    });
});