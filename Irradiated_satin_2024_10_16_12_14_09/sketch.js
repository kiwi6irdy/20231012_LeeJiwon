let img;
function setup() {
  img = loadImage("20231012.png");
  createCanvas(1280,720);
  
}

function draw() {
  background(200);
  image(img, 20, 20, 60, 60);
}
