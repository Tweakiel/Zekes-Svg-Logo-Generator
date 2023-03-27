const Shape = require("./shape");

//circle class to render square svg string/template
class Circle extends Shape {
  constructor(text, color, backgroundColor) {
    super(text, color, backgroundColor);
  }
  render() {
    super.render();
    return `
        <svg height="200" width="300">
        <circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="${this.backgroundColor}" />
        <text x="150" y="100" fill="${this.color}" text-anchor="middle" dominant-baseline="central" font-size="50">${this.text}</text>
    </svg>
        `;
  }
}

module.exports = Circle;
