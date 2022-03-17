var font = null;
var fontSize = 350;

var drawPoints = true;

var kerning = true;
var ligatures = true;
var hinting = false;

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
  var snapCtx = document.getElementById("snap").getContext("2d");
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
  snapDistance = 33;
  snapStrength = 100;
  value = "a";
  playTwo();
  renderText();
}

function thirdA(o) {
  document.getElementById("textField").value = o.innerHTML;
  snapDistance = 43;
  snapStrength = 60;
  snapX = 83;
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

function firstE(o) {
  document.getElementById("textField").value = o.innerHTML;
  snapDistance = 43;
  snapStrength = 60;
  snapX = 83;
  value = "e";
  playE();
  renderText();
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
  document.getElementById("textField").value = o.innerHTML;
  snapDistance = 13;
  snapStrength = 60;
  snapX = 23;
  snapY = 20;
  value = "e";
  playETwo();
  renderText();
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
  document.getElementById("textField").value = o.innerHTML;
  snapDistance = 93;
  snapStrength = 60;
  snapX = 13;
  snapY = 20;
  value = "e";
  playEThree();
  renderText();
}
document.getElementById("ebuttonThree").onclick = function () {
  thirdE(this);
  value = "e";
};
function playEThree() {
  var audio = document.getElementById("eaudioThree");
  audio.play();
}
