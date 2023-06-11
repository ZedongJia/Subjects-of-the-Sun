window.onload = () => {
  // my define
  const charNum = 21;
  // 
  const CANVAS = document.getElementsByTagName("canvas")[0];
  if (CANVAS == null) {
    return;
  }
  const CTX = CANVAS.getContext("2d");
  const CHARS = [];
  const MAX_CHARS = 75;
  const SEPARATION = 10;

  let ww, wh, camera;

  class Vector {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    rotate(dir, ang) {
      const X = this.x;
      const Y = this.y;
      const Z = this.z;

      const SIN = Math.sin(ang);
      const COS = Math.cos(ang);

      if (dir === "x") {
        this.y = Y * COS - Z * SIN;
        this.z = Y * SIN + Z * COS;
      } else if (dir === "y") {
        this.x = X * COS - Z * SIN;
        this.z = X * SIN + Z * COS;
      }
    }

    project() {
      const ZP = this.z + camera.z;
      const DIV = ZP / 600;
      const XP = (this.x + camera.x) / DIV;
      const YP = (this.y + camera.y) / DIV;
      const CENTER = getCenter();
      return [XP + CENTER[0], YP + CENTER[1], ZP];
    }
  }

  class Char {
    constructor(letter, pos) {
      this.letter = letter;
      this.pos = pos;
    }

    rotate(dir, ang) {
      this.pos.rotate(dir, ang);
    }

    render() {
      const PIXEL = this.pos.project();
      const XP = PIXEL[0];
      const YP = PIXEL[1];

      //from there change
      let img = new Image();
      img.src = toImg(this.letter);
      CTX.drawImage(img, XP, YP, 30, 30);
      //end
    }
  }

  function toImg(img) {
    return require('../fontImgs/' + img);
  }

  function getCenter() {
    return [ww / 2, wh / 2];
  }

  function signedRandom() {
    return Math.random() - Math.random();
  }

  function render() {
    for (let i = 0; i < CHARS.length; i++) {
      CHARS[i].render();
    }
  }

  let time = 0;
  function update() {
    CTX.clearRect(0, 0, ww, wh);
    for (let i = 0; i < CHARS.length; i++) {
      const DX = 0.005 * Math.sin(time * 0.001);
      const DY = 0.005 * Math.cos(time * 0.001);
      CHARS[i].rotate("x", DX);
      CHARS[i].rotate("y", DY);
    }
    ++time;
  }

  function loop() {
    window.requestAnimationFrame(loop);
    update();
    render();
  }

  //my define
  function randomChar() {
    return Math.floor(Math.random() * (charNum)) + '.png';
  }
  //

  function createChars() {
    for (let i = 0; i < MAX_CHARS; i++) {
      // change here
      const CHARACTER = randomChar();
      // 
      const X = signedRandom() * SEPARATION;
      const Y = signedRandom() * SEPARATION;
      const Z = signedRandom() * SEPARATION;
      const POS = new Vector(X, Y, Z);
      const CHAR = new Char(CHARACTER, POS);
      CHARS.push(CHAR);
    }
  }

  function setDim() {
    ww = window.innerWidth;
    wh = window.innerHeight;
    CANVAS.width = ww;
    CANVAS.height = wh;
  }

  function initCamera() {
    camera = new Vector(0, 0, SEPARATION + 1);
  }

  window.onresize = setDim;

  (() => {
    setDim();
    initCamera();
    createChars();
    loop();
  })();
};