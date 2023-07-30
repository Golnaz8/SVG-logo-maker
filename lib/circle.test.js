const { Shape, Circle } = require('../lib/shape.js');

describe('Circle', () => {
  // Test to verify that the Circle class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of Circle class', () => {
      const circle = new Circle();

      expect(circle).toBeInstanceOf(Circle);
    });
  });

  describe('Initialize shapeColor', () => {
    it('should set shapeColor properly', () => {
      const shapeColor = 'blue';
      const circle = new Circle(shapeColor);

      expect(circle.shapeColor).toBe(shapeColor);
    });
  });

  describe('generateShape() method', () => {
    it('should print message with data', () => {
        const circle = new Circle('blue','150','100','80');

      expect(circle.generateShape()).toBe(
      `<circle cx="150" cy="100" r="80" fill="blue" />`
      );
    });
  });
});