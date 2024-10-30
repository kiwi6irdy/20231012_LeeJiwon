let img;

function preload() {
  img = loadImage("https://raw.githubusercontent.com/kiwi6irdy/20231012_LeeJiwon/e5bfdb8078109d8aad48145367057f95af9ed071/20231012.png"); 
}

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(200);
  image(img, 0, 0, 1280 ,720);
  console.log(mouseX);
  console.log(mouseY);
  noStroke();
  //forehead
  fill(243,215,205); 
  triangle(547,256,568,315,610,274);
  fill(206,174,159); 
  triangle(568,315,570,346,617,335);
  fill(239,211,202); 
  triangle(568,315,610,274,617,335);
  fill(224,191,168);
  triangle(610,274,617,335,673,310);
  fill(209,173,143); 
  triangle(673,310,645,360,708,335);
  //hat#1
  fill(172,191,221); 
  triangle(591,209,545,256,610,274);
  fill(147,170,202); 
  triangle(591,210,653,229,610,274);
  fill(104,132,169); 
  triangle(673,311,653,229,610,274);
  fill(82,123,167); 
  triangle(673,311,653,229,696,272);
  fill(57,70,87); 
  triangle(673,311,707,334,696,272);
  fill(48,71,102); 
  triangle(785,327,707,334,696,272);
  fill(32,33,53); 
  triangle(786,327,707,334,753,379);
  //hat#2
  fill(103,144,190); //purple
  triangle(754,270,696,272,653,229);
  fill(57,99,141); //green
  triangle(754,270,696,272,784,328);
  fill(48,84,132); //lightgreen
  triangle(754,270,819,264,784,328);
  fill(34,36,49); 
  triangle(848,320,819,264,784,328);
  //hat#3
  fill(163,179,205); 
  triangle(591,210,582,149,675,163);
  fill(171,192,223); 
  triangle(591,210,653,229,675,163);
  fill(144,173,213); 
  triangle(756,229,653,229,675,163);
  fill(161,193,234); 
  triangle(757,229,653,229,755,270);
  fill(37,72,114); 
  triangle(757,229,819,264,755,270);
  //hat#3
  fill(126,138,160); //r
  triangle(671,118,582,149,675,163);
  fill(149,179,207); //b
  triangle(671,118,738,126,675,163);
  fill(121,155,193); //g
  triangle(756,229,739,125,675,163);
  fill(107,137,173); //l.g
  triangle(756,229,739,125,824,214);
  fill(51,80,114); 
  triangle(756,229,819,264,825,214);
  
}
