var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var size = 82;

opentype.load("fonts/SourceSansPro-Regular.otf", function (err, font) {
  if (err) {
    alert("Font could not be loaded: " + err);
  } else {
    // Now let's display it on a canvas with id "canvas"
    const ctx = document.getElementById("canvas").getContext("2d");

    // Construct a Path object containing the letter shapes of the given text.
    // The other parameters are x, y and fontSize.
    // Note that y is the position of the baseline.
    let baba = letters[getRandomInt(0, 25)];
    const path = font.getPath(baba, 3, 130, size);

    // If you just want to draw the text you can also use font.draw(ctx, text, x, y, fontSize).
    path.draw(ctx);
  }
});
console.log(baba);
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
