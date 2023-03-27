//import shape class
const Shape = require("../shapes/shape");
//import other shapes
const Circle = require("../shapes/circle");
const Square = require("../shapes/square");
const Triangle = require("../shapes/triangle");

// test shape class
describe("Shape", () => {
  describe("Initialization", () => {
    it("should create an object with a text, color, background color, and isRendered property set to false when called with the 'new' keyword", () => {
      const shape = new Shape("A", "red", "blue");

      // Verify that the new object has the correct properties
      expect(shape.text).toEqual("A");
      expect(shape.color).toEqual("red");
      expect(shape.backgroundColor).toEqual("blue");
      expect(shape.isRendered).toEqual(false);
    });
  });
});

// test render method
describe("render", () => {
  it("should set isRendered to true", () => {
    const shape = new Shape("A", "red", "blue");

    shape.render();

    expect(shape.isRendered).toEqual(true);
  });
});

//test circle class
describe("Circle", () => {
  describe("Initialization", () => {
    it("should create an object with a text, color, background color, and isRendered property set to false when called with the 'new' keyword", () => {
      const circle = new Circle("A", "red", "blue");

      // Verify that the new object has the correct properties
      expect(circle.text).toEqual("A");
      expect(circle.color).toEqual("red");
      expect(circle.backgroundColor).toEqual("blue");
      expect(circle.isRendered).toEqual(false);
    });
  });
});

//test square class
describe("Square", () => {
  describe("Initialization", () => {
    it("should create an object with a text, color, background color, and isRendered property set to false when called with the 'new' keyword", () => {
      const square = new Square("A", "red", "blue");

      // Verify that the new object has the correct properties
      expect(square.text).toEqual("A");
      expect(square.color).toEqual("red");
      expect(square.backgroundColor).toEqual("blue");
      expect(square.isRendered).toEqual(false);
    });
  });
});

//test triangle class
describe("Triangle", () => {
  describe("Initialization", () => {
    it("should create an object with a text, color, background color, and isRendered property set to false when called with the 'new' keyword", () => {
      const triangle = new Triangle("A", "red", "blue");

      // Verify that the new object has the correct properties
      expect(triangle.text).toEqual("A");
      expect(triangle.color).toEqual("red");
      expect(triangle.backgroundColor).toEqual("blue");
      expect(triangle.isRendered).toEqual(false);
    });
  });
});
