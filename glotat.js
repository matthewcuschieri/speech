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
function renderTextB() {
  if (!font) return;
  textToRender = document.getElementById("textFieldB").value;

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
  var snapCtx = document.getElementById("snapB").getContext("2d");

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
function renderTextTwoB() {
  if (!font) return;
  textToRender = document.getElementById("textFieldTwoB").value;
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
  var snapCtx = document.getElementById("snapTwoB").getContext("2d");
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
}
function renderTextThreeB() {
  if (!font) return;
  textToRender = document.getElementById("textFieldThreeB").value;

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

  var snapCtx = document.getElementById("snapThreeB").getContext("2d");
  snapCtx.clearRect(0, 0, 1940, 1300);
  snapPath.draw(snapCtx);
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

  var snapCtx = document.getElementById("snapFour").getContext("2d");
  snapCtx.clearRect(0, 0, 1940, 1300);
  snapPath.draw(snapCtx);
}
function renderTextFourB() {
  if (!font) return;
  textToRender = document.getElementById("textFieldFourB").value;

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
  var snapCtx = document.getElementById("snapFourB").getContext("2d");
  snapCtx.clearRect(0, 0, 1940, 1300);
  snapPath.draw(snapCtx);
}
function renderTextFiveB() {
  if (!font) return;
  textToRender = document.getElementById("textFieldFiveB").value;
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
  var snapCtx = document.getElementById("snapBFive").getContext("2d");
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
  renderTextB();
  renderTextTwoB();
  renderTextFourB();

  renderTextFive();

  renderTextThreeB();

  renderTextThree();
  renderTextFiveB();
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
enableHighDPICanvas("snapFourB");
enableHighDPICanvas("snapB");
enableHighDPICanvas("snapTwoB");
enableHighDPICanvas("snapBFive");
enableHighDPICanvas("snapFive");
enableHighDPICanvas("snapThreeB");

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
  snapStrength = 70;
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
  make_interpolators(prev, next);
  thirdU(this);

  value = "u";
};
function playUThree() {
  var audio = document.getElementById("uaudioThree");
  audio.play();
}
// }
// // `prev` and `next` are both lists of opentype paths
// function make_interpolators(prev, next, options = {}) {
//   // first, some edge cases
//   if (prev.length == 0 && 0 == next.length) {
//     return [];
//   }
//   if (next.length == 0) {
//     return prev.map((op) =>
//       flubber.interpolate(op.toPathData(), [op_center(op)], options)
//     );
//   }
//   if (prev.length == 0) {
//     return next.map((op) =>
//       flubber.interpolate([op_center(op)], op.toPathData(), options)
//     );
//   }

//   // normality
//   var prevpaths = prev.map((op) => op.toPathData());
//   var nextpaths = next.map((op) => op.toPathData());

//   const N = Math.min(prevpaths.length - 1, nextpaths.length - 1);
//   var interpolators = [];
//   for (var i = 0; i < N; i++) {
//     interpolators.push(
//       flubber.interpolate(prevpaths[i], nextpaths[i], options)
//     );
//   }
//   if (prevpaths.length > nextpaths.length) {
//     interpolators = interpolators.concat(
//       flubber.combine(
//         prevpaths.slice(N),
//         nextpaths[nextpaths.length - 1],
//         options
//       )
//     );
//   } else {
//     interpolators = interpolators.concat(
//       flubber.separate(
//         prevpaths[prevpaths.length - 1],
//         nextpaths.slice(N),
//         options
//       )
//     );
//   }
//   return interpolators;
// }

// function split_opentype_path(opath) {
//   // makes an empty clone of `opath`
//   const mkop = () => {
//     const op = new opentype.Path();
//     op.fill = opath.fill;
//     op.stroke = opath.stroke;
//     op.strokeWidth = opath.strokeWidth;
//     op.holes = [];
//     return op;
//   };
//   // decides whether bbox `b` contains bbox `c`
//   const contains = (b, c) =>
//     b.x1 < c.x1 && c.x2 < b.x2 && b.y1 < c.y1 && c.y2 < b.y2;

//   // split into parts
//   var opaths = opath.commands
//     .reduce(
//       (opaths, c) => {
//         if (c.type == "Z") {
//           return [mkop()].concat(opaths);
//         }
//         opaths[0].commands.push(c);
//         return opaths;
//       },
//       [mkop()]
//     )
//     .reverse()
//     .filter((l) => l.commands.length > 0);

//   // determine hole structure
//   opaths.forEach((op) => {
//     op.bbox = op.getBoundingBox();
//     op.centroid = op_center(op);
//   });
//   for (var j = 0; j < opaths.length; j++) {
//     const potential_hole = opaths[j];
//     const solid = _.find(
//       opaths,
//       (solid) => solid && contains(solid.bbox, potential_hole.bbox)
//     );
//     if (solid) {
//       solid.holes.push(potential_hole);
//       potential_hole.fill = "#eee";
//       opaths[j] = null;
//     }
//   }
//   opaths = opaths.filter((solid) => solid);

//   return opaths;
// }
// function zip(l, r) {
//   var z = [];
//   const N = Math.max(l.length, r.length);
//   for (var i = 0; i < N; i++) {
//     z.push({ le: l[i] || undefined, ri: r[i] || undefined });
//   }
//   return z;
// }
// function op_center(op) {
//   return [
//     d3.mean(op.commands.filter((c) => c.type != "Z").map((c) => c.x)),
//     d3.mean(op.commands.filter((c) => c.type != "Z").map((c) => c.y)),
//   ];
// }

//second row
document.getElementById("buttonBOne").onclick = function () {
  firstBA(this);
  value = "a";
};
function firstBA(o) {
  document.getElementById("textFieldB").value = o.innerHTML;
  snapDistance = 13;
  snapStrength = 50;
  fontSize = 150;
  snapX = 83;
  value = "a";
  playB();
  renderTextB();
}
document.getElementById("buttonBTwo").onclick = function () {
  secondBA(this);
  value = "b";
};
function secondBA(o) {
  document.getElementById("textFieldB").value = o.innerHTML;
  snapDistance = 53;
  snapStrength = 70;
  fontSize = 150;
  value = "a";
  playBTwo();
  renderTextB();
}

function thirdBA(o) {
  document.getElementById("textFieldB").value = o.innerHTML;
  snapDistance = 43;
  snapStrength = 10;
  snapX = 3;
  fontSize = 150;
  value = "a";
  playBThree();
  renderTextB();
}
document.getElementById("buttonBThree").onclick = function () {
  thirdBA(this);
  value = "b";
};

function playB() {
  var audio = document.getElementById("audioB");
  audio.play();
}
function playBTwo() {
  var audio = document.getElementById("audioBTwo");
  audio.play();
}

function playBThree() {
  var audio = document.getElementById("audioBThree");
  audio.play();
}
//eB button stuff//
function firstBE(o) {
  document.getElementById("textFieldTwoB").value = o.innerHTML;
  snapDistance = 43;
  snapStrength = 60;
  snapX = 83;
  fontSize = 150;
  value = "e";
  playBE();
  renderTextTwoB();
}
document.getElementById("ebuttonBOne").onclick = function () {
  firstBE(this);
  value = "e";
};
function playBE() {
  var audio = document.getElementById("eaudioB");
  audio.play();
}

function secondBE(o) {
  document.getElementById("textFieldTwoB").value = o.innerHTML;
  snapDistance = 103;
  snapStrength = 40;
  snapX = 13;
  snapY = 10;
  fontSize = 150;
  value = "e";
  playBETwo();
  renderTextTwoB();
}
document.getElementById("ebuttonBTwo").onclick = function () {
  secondE(this);
  value = "e";
};
function playBETwo() {
  var audio = document.getElementById("eaudioBTwo");
  audio.play();
}

function thirdBE(o) {
  document.getElementById("textFieldTwoB").value = o.innerHTML;
  snapDistance = 53;
  snapStrength = 30;
  snapX = 13;
  fontSize = 150;
  snapY = 20;
  value = "e";
  playBEThree();
  renderTextTwoB();
}
document.getElementById("ebuttonBThree").onclick = function () {
  thirdE(this);
  value = "e";
};
function playBEThree() {
  var audio = document.getElementById("eaudioBThree");
  audio.play();
}

//iB button stuff//
function firstBI(o) {
  document.getElementById("textFieldThreeB").value = o.innerHTML;
  snapDistance = 43;
  snapStrength = 60;
  snapX = 13;
  fontSize = 150;
  value = "i";
  playBI();
  renderTextThreeB();
}
document.getElementById("ibuttonBOne").onclick = function () {
  firstBI(this);
  value = "i";
};
function playBI() {
  var audio = document.getElementById("iaudioB");
  audio.play();
}

function secondBI(o) {
  document.getElementById("textFieldThreeB").value = o.innerHTML;
  snapDistance = 103;
  snapStrength = 30;
  snapX = 13;

  value = "i";
  playBITwo();
  renderTextThreeB();
}
document.getElementById("ibuttonBTwo").onclick = function () {
  secondBI(this);
  value = "i";
};
function playBITwo() {
  var audio = document.getElementById("iaudioBTwo");
  audio.play();
}

function thirdBI(o) {
  document.getElementById("textFieldThreeB").value = o.innerHTML;
  snapDistance = 53;
  snapStrength = 10;
  fontSize = 150;
  value = "i";
  playBIThree();
  renderTextThreeB();
}
document.getElementById("ibuttonBThree").onclick = function () {
  thirdBI(this);
  value = "i";
};
function playBIThree() {
  var audio = document.getElementById("iaudioBThree");
  audio.play();
}

//oB button stuff//
function firstBO(o) {
  document.getElementById("textFieldFourB").value = o.innerHTML;
  snapDistance = 43;
  snapStrength = 40;

  fontSize = 130;
  value = "o";
  playBO();
  renderTextFourB();
}
document.getElementById("obuttonBOne").onclick = function () {
  firstBO(this);
  value = "e";
};
function playBO() {
  var audio = document.getElementById("oaudioB");
  audio.play();
}

function secondBO(o) {
  document.getElementById("textFieldFourB").value = o.innerHTML;
  snapDistance = 103;
  snapStrength = 40;
  snapX = 13;
  snapY = 10;
  fontSize = 130;
  value = "o";
  playBOTwo();
  renderTextFourB();
}
document.getElementById("obuttonBTwo").onclick = function () {
  secondBO(this);
  value = "e";
};
function playBOTwo() {
  var audio = document.getElementById("oaudioBTwo");
  audio.play();
}

function thirdBO(o) {
  document.getElementById("textFieldFourB").value = o.innerHTML;
  snapDistance = 53;
  snapStrength = 40;
  snapX = 153;
  fontSize = 130;
  value = "e";
  playBOThree();
  renderTextFourB();
}
document.getElementById("obuttonBThree").onclick = function () {
  thirdBO(this);
  value = "e";
};
function playBOThree() {
  var audio = document.getElementById("oaudioBThree");
  audio.play();
}

//uB button stuff//
function firstBU(o) {
  document.getElementById("textFieldFiveB").value = o.innerHTML;
  snapDistance = 43;
  snapStrength = 60;
  snapX = 83;
  fontSize = 150;
  value = "u";
  playUB();
  renderTextFiveB();
}
document.getElementById("ubuttonBOne").onclick = function () {
  firstBU(this);
  value = "e";
};
function playUB() {
  var audio = document.getElementById("uaudioB");
  audio.play();
}

function secondBU(o) {
  document.getElementById("textFieldFiveB").value = o.innerHTML;
  snapDistance = 13;
  snapStrength = 60;
  snapX = 13;
  snapY = 10;
  fontSize = 150;
  value = "u";
  playUBTwo();
  renderTextFiveB();
}
document.getElementById("ubuttonBTwo").onclick = function () {
  secondBU(this);
  value = "e";
};
function playUBTwo() {
  var audio = document.getElementById("uaudioBTwo");
  audio.play();
}

function thirdBU(o) {
  document.getElementById("textFieldFiveB").value = o.innerHTML;
  snapDistance = 13;
  snapStrength = 40;
  snapX = 13;
  fontSize = 100;
  value = "e";
  playUBThree();
  renderTextFiveB();
}
document.getElementById("ubuttonBThree").onclick = function () {
  thirdBU(this);
  value = "e";
};
function playUBThree() {
  var audio = document.getElementById("uaudioBThree");
  audio.play();
}
