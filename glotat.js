var font = null;
var fontSize = 350;

var drawPoints = true;

var kerning = true;
var ligatures = true;
var hinting = false;
var fillStyle = "rgba(255, 165, 0, 1)";

var snapStrength = 1;
var snapDistance = 1;
var snapX = 0;
var snapY = 0;
var fontSizeSlider = document.getElementById("font-size-range");
var hintingCheckbox = document.getElementById("hinting-checkbox");
var hintingLabel = document.getElementById("hinting-label");

// Round a value to the nearest "step".
function snap(v, distance, strength) {
  return v * (1.0 - strength) + strength * Math.round(v / distance) * distance;
}

function doSnap(path) {
  var i;
  var strength = snapStrength / 100.0;
  for (i = 0; i < path.commands.length; i++) {
    var cmd = path.commands[i];
    if (cmd.type !== "Z") {
      cmd.x = snap(cmd.x + snapX, snapDistance, strength) - snapX;
      cmd.y = snap(cmd.y + snapY, snapDistance, strength) - snapY;
    }
    if (cmd.type === "Q" || cmd.type === "C") {
      cmd.x1 = snap(cmd.x1 + snapX, snapDistance, strength) - snapX;
      cmd.y1 = snap(cmd.y1 + snapY, snapDistance, strength) - snapY;
    }
    if (cmd.type === "C") {
      cmd.x2 = snap(cmd.x2 + snapX, snapDistance, strength) - snapX;
      cmd.y2 = snap(cmd.y2 + snapY, snapDistance, strength) - snapY;
    }
  }
}

function renderText() {
  if (!font) return;
  textToRender = document.getElementById("textField").value;

  var options = {
    kerning: kerning,
    hinting: hinting,

    features: {
      liga: ligatures,
      rlig: ligatures,
    },
  };
  snapPath = font.getPath(textToRender, 0, 200, fontSize, options);
  doSnap(snapPath);
  //   fill(green);
  var snapCtx = document.getElementById("snap").getContext("2d");

  snapCtx.clearRect(0, 0, 1940, 1300);
  snapPath.draw(snapCtx);
}
function renderTextTwo() {
  if (!font) return;
  textToRender = document.getElementById("textFieldTwo").value;
  var options = {
    kerning: kerning,
    hinting: hinting,
    features: {
      liga: ligatures,
      rlig: ligatures,
    },
  };
  snapPath = font.getPath(textToRender, 0, 200, fontSize, options);
  doSnap(snapPath);

  //   fill(green);
  var snapCtx = document.getElementById("snapTwo").getContext("2d");
  snapCtx.clearRect(0, 0, 1940, 1300);
  snapPath.draw(snapCtx);
}
function renderTextThree() {
  if (!font) return;
  textToRender = document.getElementById("textFieldThree").value;
  fontSize = 250;
  var options = {
    kerning: kerning,
    hinting: hinting,
    features: {
      liga: ligatures,
      rlig: ligatures,
    },
  };
  snapPath = font.getPath(textToRender, 0, 200, fontSize, options);
  doSnap(snapPath);
  //   fill(green);
  var snapCtx = document.getElementById("snapThree").getContext("2d");
  snapCtx.clearRect(0, 0, 1940, 1300);
  snapPath.draw(snapCtx);
  fill("green");
}
function renderTextFour() {
  if (!font) return;
  textToRender = document.getElementById("textFieldFour").value;

  var options = {
    kerning: kerning,
    hinting: hinting,
    features: {
      liga: ligatures,
      rlig: ligatures,
    },
  };
  snapPath = font.getPath(textToRender, 0, 200, fontSize, options);
  doSnap(snapPath);
  //   fill(green);
  var snapCtx = document.getElementById("snapFour").getContext("2d");
  snapCtx.clearRect(0, 0, 1940, 1300);
  snapPath.draw(snapCtx);
}
function renderTextFive() {
  if (!font) return;
  textToRender = document.getElementById("textFieldFive").value;
  var options = {
    kerning: kerning,
    hinting: hinting,
    features: {
      liga: ligatures,
      rlig: ligatures,
    },
  };
  snapPath = font.getPath(textToRender, 0, 200, fontSize, options);
  doSnap(snapPath);
  //   fill(green);
  var snapCtx = document.getElementById("snapFive").getContext("2d");
  // ctx.fillStyle = "orange";

  snapCtx.clearRect(0, 0, 1940, 1300);

  snapPath.draw(snapCtx);
}
function enableHighDPICanvas(canvas) {
  if (typeof canvas === "string") {
    canvas = document.getElementById(canvas);
  }
  var pixelRatio = window.devicePixelRatio || 1;
  if (pixelRatio === 1) return;
  var oldWidth = canvas.width;
  var oldHeight = canvas.height;
  canvas.width = oldWidth * pixelRatio;
  canvas.height = oldHeight * pixelRatio;
  canvas.style.width = oldWidth + "px";
  canvas.style.height = oldHeight + "px";
  canvas.getContext("2d").scale(pixelRatio, pixelRatio);
}

function onFontLoaded(font) {
  var glyphsDiv, i, x, y, fontSize;
  window.font = font;
  renderText();
  renderTextTwo();
  renderTextFour();
  renderTextFive();
  renderTextThree();
}

function onReadFile(e) {
  document.getElementById("font-name").innerHTML = "";
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    try {
      font = opentype.parse(e.target.result);
      onFontLoaded(font);
      showErrorMessage("");
    } catch (err) {
      showErrorMessage(err.toString());
    }
  };
  reader.onerror = function (err) {
    showErrorMessage(err.toString());
  };

  reader.readAsArrayBuffer(file);
}

var fontFileName = "fonts/source-gen.otf";

document.getElementById("font-name").innerHTML = fontFileName.split("/")[1];

var fileButton = document.getElementById("file");
fileButton.addEventListener("change", onReadFile, false);

enableHighDPICanvas("snap");
enableHighDPICanvas("snapTwo");
enableHighDPICanvas("snapThree");
enableHighDPICanvas("snapFour");
enableHighDPICanvas("snapFive");

opentype.load(fontFileName, function (err, font) {
  var amount, glyph, ctx, x, y, fontSize;
  if (err) {
    showErrorMessage(err.toString());
    return;
  }
  onFontLoaded(font);
});
//button stuff//
document.getElementById("buttonOne").onclick = function () {
  firstA(this);
  value = "b";
};
function firstA(o) {
  document.getElementById("textField").value = o.innerHTML;
  snapDistance = 13;
  snapStrength = 50;
  fontSize = 350;
  snapX = 83;
  value = "a";

  play();
  renderText();
}
document.getElementById("buttonTwo").onclick = function () {
  secondA(this);
  value = "b";
};
function secondA(o) {
  document.getElementById("textField").value = o.innerHTML;
  snapDistance = 53;
  snapStrength = 200;
  fontSize = 350;
  value = "a";
  playTwo();
  renderText();
}

function thirdA(o) {
  document.getElementById("textField").value = o.innerHTML;
  snapDistance = 43;
  snapStrength = 90;
  snapX = 3;
  fontSize = 350;
  value = "a";
  playThree();
  renderText();
}
document.getElementById("buttonThree").onclick = function () {
  thirdA(this);
  value = "b";
};

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
function playTwo() {
  var audio = document.getElementById("audioTwo");
  audio.play();
}

function playThree() {
  var audio = document.getElementById("audioThree");
  audio.play();
}
//e button stuff//
function firstE(o) {
  document.getElementById("textFieldTwo").value = o.innerHTML;
  snapDistance = 43;
  snapStrength = 60;
  snapX = 83;
  fontSize = 350;
  value = "e";
  playE();
  renderTextTwo();
}
document.getElementById("ebuttonOne").onclick = function () {
  firstE(this);
  value = "e";
};
function playE() {
  var audio = document.getElementById("eaudio");
  audio.play();
}

function secondE(o) {
  document.getElementById("textFieldTwo").value = o.innerHTML;
  snapDistance = 103;
  snapStrength = 90;
  snapX = 13;
  snapY = 10;
  fontSize = 350;
  value = "e";
  playETwo();
  renderTextTwo();
}
document.getElementById("ebuttonTwo").onclick = function () {
  secondE(this);
  value = "e";
};
function playETwo() {
  var audio = document.getElementById("eaudioTwo");
  audio.play();
}

function thirdE(o) {
  document.getElementById("textFieldTwo").value = o.innerHTML;
  snapDistance = 53;
  snapStrength = 90;
  snapX = 153;
  fontSize = 350;
  snapY = 20;
  value = "e";
  playEThree();
  renderTextTwo();
}
document.getElementById("ebuttonThree").onclick = function () {
  thirdE(this);
  value = "e";
};
function playEThree() {
  var audio = document.getElementById("eaudioThree");
  audio.play();
}
//i button stuff//
function firstI(o) {
  document.getElementById("textFieldThree").value = o.innerHTML;
  snapDistance = 13;
  snapStrength = 500;
  snapX = 43;
  fontSize = 250;
  value = "i";
  playI();
  renderTextThree();
}
document.getElementById("ibuttonOne").onclick = function () {
  firstI(this);
  value = "i";
};
function playI() {
  var audio = document.getElementById("iaudio");
  audio.play();
}

function secondI(o) {
  document.getElementById("textFieldThree").value = o.innerHTML;
  snapDistance = 13;
  snapStrength = 100;
  snapX = 23;
  snapY = 20;
  value = "i";
  fontSize = 250;
  playITwo();
  renderTextThree();
}
document.getElementById("ibuttonTwo").onclick = function () {
  secondE(this);
  value = "i";
};
function playITwo() {
  var audio = document.getElementById("iaudioTwo");
  audio.play();
}

function thirdI(o) {
  document.getElementById("textFieldThree").value = o.innerHTML;
  snapDistance = 33;
  snapStrength = 60;
  snapX = 30;
  snapY = -90;
  value = "i";
  fontSize = 250;

  playIThree();
  renderTextThree();
}
document.getElementById("ibuttonThree").onclick = function () {
  thirdE(this);
  value = "i";
};
function playIThree() {
  var audio = document.getElementById("iaudioThree");
  audio.play();
}
//o button stuff//
function firstO(o) {
  document.getElementById("textFieldFour").value = o.innerHTML;
  snapDistance = 43;
  snapStrength = 60;
  snapX = 83;
  fontSize = 350;
  value = "o";
  playO();
  renderTextFour();
}
document.getElementById("obuttonOne").onclick = function () {
  firstO(this);
  value = "o";
};
function playO() {
  var audio = document.getElementById("oaudio");
  audio.play();
}

function secondO(o) {
  document.getElementById("textFieldFour").value = o.innerHTML;
  snapDistance = 13;
  snapStrength = 60;
  snapX = 23;
  snapY = 20;
  fontSize = 350;
  value = "o";
  playOTwo();
  renderTextFour();
}
document.getElementById("obuttonTwo").onclick = function () {
  secondO(this);
  value = "o";
};
function playOTwo() {
  var audio = document.getElementById("oaudioTwo");
  audio.play();
}

function thirdO(o) {
  document.getElementById("textFieldFour").value = o.innerHTML;
  snapDistance = 93;
  snapStrength = 60;
  snapX = 43;
  fontSize = 350;
  snapY = 0;
  value = "o";
  playOThree();
  renderTextFour();
}
document.getElementById("obuttonThree").onclick = function () {
  thirdO(this);
  value = "o";
};
function playOThree() {
  var audio = document.getElementById("oaudioThree");
  audio.play();
}
//u button stuff//
function firstU(o) {
  document.getElementById("textFieldFive").value = o.innerHTML;
  snapDistance = 43;
  snapStrength = 60;
  snapX = 83;
  fontSize = 350;
  value = "u";
  playU();
  renderTextFive();
}
document.getElementById("ubuttonOne").onclick = function () {
  firstU(this);
  value = "u";
};
function playU() {
  var audio = document.getElementById("uaudio");
  audio.play();
}

function secondU(o) {
  document.getElementById("textFieldFive").value = o.innerHTML;
  snapDistance = 13;
  snapStrength = 60;
  snapX = 23;
  snapY = 20;
  fontSize = 350;
  value = "u";
  playUTwo();
  renderTextFive();
}
document.getElementById("ubuttonTwo").onclick = function () {
  secondU(this);
  value = "u";
};
function playUTwo() {
  var audio = document.getElementById("uaudioTwo");
  audio.play();
}

function thirdU(o) {
  document.getElementById("textFieldFive").value = o.innerHTML;
  snapDistance = 93;
  snapStrength = 60;
  snapX = 43;
  fontSize = 350;
  snapY = 0;
  value = "u";
  playUThree();
  renderTextFive();
}
document.getElementById("ubuttonThree").onclick = function () {
  thirdU(this);
  value = "u";
};
function playUThree() {
  var audio = document.getElementById("uaudioThree");
  audio.play();
}
