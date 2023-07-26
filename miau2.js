let canvas;
let img;
let caja;

function preload(){
  img = loadImage("media/magma.gif");
}

function setup() {
canvas = createCanvas(windowWidth, windowHeight, WEBGL);
canvas.position(0, 0);
camera(0, -30, 200, 0, 0, 0, 0, 1, 0);
normalMaterial();
debugMode(GRID);
caja = box(100,100,500);
}



function draw() {
background(0);
orbitControl();

translate(0,0,50);
rotateX(frameCount * 0.014);
texture(img);
cylinder(200,5500,24,16,false,false);

push();
box();
rotateX(frameCount * 0.1);
rotateY(frameCount * 0.05);
rotateZ(frameCount * 0.5);
pop();
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

