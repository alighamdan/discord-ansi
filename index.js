class Ansi {
  constructor(type = 0, fg = 0, bg = undefined) {
    /**
     * types are 0: default, 1: bold, 4: underline
     * @type {0 | 1 | 4}
     */
    this.type = type;
    /**
     * font colors 0: default, 30: gray, 31: red, 32: green, 33: yellow, 34: blue, 35: pink, 36: cyan, 37: white
     * @type {0 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37}
     */
    this.fg = fg;
    /**
     * background Colors: 40: dark blue (black), 41: orange, 42: marble blue, 42: greyish turquoise, 44: gray, 45: indigo, 46: light gray, 47: white
     * @type {40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | undefined}
     */
    this.bg = bg;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
  }

  /**
   *
   * @param {string | string[]} str
   * @param {boolean} reset
   * @returns {string}
   */
  toAnsi(str, reset) {
    if (Array.isArray(str)) str = str.join(" ");
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return `${this.style}${str}${reset ? "\u001b[0m" : ""}`;
  }

  /**
   *
   * @returns {string}
   */
  toString() {
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.style;
  }

  /**
   * this will reset all old styles for fg (font color)
   */
  reset() {
    this.fg = 0;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * this will reset all old styles for everything (fg, bg, type) (font color, background color, (bold, underline))
   */
  resetAll() {
    this.style = "\u001b[0m";
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the background to bg 40 => dark blue (black)
   */
  bgFirelyDarkBlue() {
    this.bg = 40;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the background to bg 41 => orange
   */
  bgOrange() {
    this.bg = 41;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the background to bg 42 => marble blue
   */
  bgMarbleBlue() {
    this.bg = 42;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the background to bg 43 => greyish turquoise
   */
  bgGreyishTurquoise() {
    this.bg = 43;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the background to bg 44 => gray
   */
  bgGray() {
    this.bg = 44;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * an alias for bgGray
   */
  bgGrey() {
    this.bg = 44;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the background to bg 45 => indigo
   */
  bgIndigo() {
    this.bg = 45;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the background to bg 46 => light gray
   */
  bgLightGray() {
    this.bg = 46;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * an alias for bgLightGray
   */
  bgLightGrey() {
    this.bg = 46;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the background to bg 47 => white
   */
  bgWhite() {
    this.bg = 47;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * reset the background to none
   */
  bgReset() {
    this.bg = undefined;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the font type to normal (no bold, no underline)
   */
  normal() {
    this.type = 0;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the font type to bold
   */
  bold() {
    this.type = 1;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the font type to underline
   */
  underline() {
    this.type = 4;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the font color to gray fg 30
   */
  gray() {
    this.fg = 30;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * an alias for gray
   */
  grey() {
    this.fg = 30;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the font color to red fg 31
   */
  red() {
    this.fg = 31;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the font color to green fg 32
   */
  green() {
    this.fg = 32;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the font color to yellow fg 33
   */
  yellow() {
    this.fg = 33;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the font color to blue fg 34
   */
  blue() {
    this.fg = 34;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the font color to magenta fg 35
   */
  pink() {
    this.fg = 35;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the font color to cyan fg 36
   */
  cyan() {
    this.fg = 36;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /**
   * set the font color to white fg 37
   */
  white() {
    this.fg = 37;
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    return this.print();
  }

  /** @protected */
  print() {
    let func = (...str) => this.toAnsi(str, true);
    this.style = `\u001b[${this.type}${this.fg ? `;${this.fg}` : ""}${
      this.bg ? ";" + this.bg : ""
    }m`;
    func.white = this.white;
    func.cyan = this.cyan;
    func.pink = this.pink;
    func.blue = this.blue;
    func.yellow = this.yellow;
    func.green = this.green;
    func.red = this.red;
    func.grey = this.grey;
    func.gray = this.gray;
    func.underline = this.underline;
    func.bold = this.bold;
    func.normal = this.normal;
    func.bgReset = this.bgReset;
    func.bgWhite = this.bgWhite;
    func.bgLightGray = this.bgLightGray;
    func.bgLightGrey = this.bgLightGrey;
    func.bgIndigo = this.bgIndigo;
    func.bgGrey = this.bgGrey;
    func.bgGray = this.bgGray;
    func.bgGreyishTurquoise = this.bgGreyishTurquoise;
    func.bgMarbleBlue = this.bgMarbleBlue;
    func.bgOrange = this.bgOrange;
    func.bgFirelyDarkBlue = this.bgFirelyDarkBlue;
    func.reset = this.reset;
    func.resetAll = this.resetAll;
    func.print = this.print;
    func.toAnsi = this.toAnsi;
    func.bg = this.bg;
    func.fg = this.fg;
    func.type = this.type;
    func.style = this.style;
    return func;
  }
}

module.exports = new Ansi();
module.exports.createAnsi =
  /**
   * creates a code block for discord (make it more easy)
   * @param {string} string
   * @returns {string}
   */
  function (string) {
    return `\`\`\`ansi\n${string}\`\`\``;
  };
module.exports.Ansi = Ansi;
module.exports.default = new Ansi();
module.exports.default.Ansi = Ansi;
module.exports.default.createAnsi =
  /**
   * creates a code block for discord (make it more easy)
   * @param {string} string
   * @returns {string}
   */
  function (string) {
    return `\`\`\`ansi\n${string}\`\`\``;
  };
