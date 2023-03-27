const Shape = require("./shape");

class Triangle extends Shape {
  constructor(text, color, backgroundColor) {
    super(text, color, backgroundColor);
  }
  render() {
    super.render();
    return `
          <svg height="200" width="300">
          <polygon points="150,10 295,200 5,200" style="fill:${this.backgroundColor};"/>
          <text x="150" y="120" fill="${this.color}" text-anchor="middle" dominant-baseline="central" font-size="50">${this.text}</text>
      </svg>
              `;
  }
}

module.exports = Triangle;
