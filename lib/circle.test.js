const { Circle } = require('../lib/shape.js');

describe('Circle', () => {
    // Test to verify that the Circle class can be instantiated.
    describe('Instantiate', () => {
        it('should be an instance of Circle class', () => {
            const circle = new Circle();

            expect(circle).toBeInstanceOf(Circle);
        });
    });

    // Test to verify that shapeColor can be assigned.
    describe('Initialize shapeColor', () => {
        it('should set shapeColor properly', () => {
            const shapeColor = 'blue';
            const circle = new Circle(shapeColor);

            expect(circle.shapeColor).toBe(shapeColor);
        });
    });

    // Test to verify that cx can be assigned.
    describe('Initialize cx', () => {
        it('should set cx properly', () => {
            const x = '150';
            const circle = new Circle('blue', x);

            expect(circle.x).toBe(x);
        });
    });

    // Test to verify that cy can be assigned.
    describe('Initialize cy', () => {
        it('should set cy properly', () => {
            const y = '100';
            const circle = new Circle('blue', '150', y);

            expect(circle.y).toBe(y);
        });
    });
    
    // Test to verify that radius can be assigned.
    describe('Initialize radius', () => {
        it('should set radius properly', () => {
            const radius = '80';
            const circle = new Circle('blue', '150', '100', radius);

            expect(circle.radius).toBe(radius);
        });
    });

    // Test to verify that generateShape() returns the correct data.
    describe('generateShape() method', () => {
        it('should print message with data', () => {
            const circle = new Circle('blue', '150', '100', '80');

            expect(circle.generateShape()).toBe(
                `<circle cx="150" cy="100" r="80" fill="blue" />`
            );
        });
    });
});