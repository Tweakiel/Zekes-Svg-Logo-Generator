//shape class to render shapes svg string/template

class Shape {
  constructor(text, color, backgroundColor) {
    this.text = text;
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.isRendered = false; // set isRendered to false to indicate that the shape has not been rendered
  }

  render() {
    this.isRendered = true; // set isRendered to true to indicate that the shape has been rendered
  }
}

module.exports = Shape;
