const Shape = require("./shape");

//square class to render square svg string/template
class Square extends Shape {
  constructor(text, color, backgroundColor) {
    super(text, color, backgroundColor);
  }
  render() {
    super.render();
    return `
        <svg width="300" height="210">
        <rect width="300" height="200" style="${this.backgroundColor};stroke-width:3;stroke:rgb(0,0,0)" />
         <text x="150" y="100" fill="${this.color}" text-anchor="middle" dominant-baseline="central" font-size="50">${this.text}</text>
        
      </svg>
                `;
  }
}

module.exports = Square;
