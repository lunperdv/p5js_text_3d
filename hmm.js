let slider;
let font1;
let tex;
let texs = [];
let inicio = 0;
let move = true;
let link;

let copia_ancho, copia_alto;
let angulo1 = 0;
let scala = 20;

let frases = [
    ["PRESIONA TECLA??", "BUSCA"],
    ["ALEJATE", "ACERCATE"],
    ["INGRESA", "ingresaaaa"]
];


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function preload() {
    font1 = loadFont("fonts/gothic.otf");
}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    link = createA("segundo.html", "puedes proceder","_self");
    
    slider = createSlider(6, 80, 8);
    slider.position(windowWidth / 2 - 50, 670);
    slider.style("width", "200px");

    tex = createGraphics(windowWidth, windowHeight);
    tex.background(200);
    tex.fill(90, 10, 90);
    tex.textFont(font1);
    tex.translate(width / 2, height / 2);
    tex.textAlign(CENTER, CENTER);
}


function draw() {

    background(0);

    copia_ancho = windowWidth / slider.value();
    copia_alto = windowHeight / slider.value();

    let ang1 = radians(angulo1);
    let x1 = scala * cos(ang1);

    tex.background(99, 50, 255);
    push();
    if (move) {
        tex.translate(x1, 0);
    }
    pop();

    let t1 = map(frases[inicio][0].length, 4, 20, 400, 100);
    tex.textSize(t1);
    tex.text(frases[inicio][0], 0, 0);
    tex.textSize(90);
    let y2 = map(t1, 400, 100, 320, 80);
    tex.text(frases[inicio][1], -200, y2 - 30);

    for (let i = slider.value(); i > 1; i--) {
        imageMode(CENTER);
        push();
        translate(width / 2, height / 2);
        image(tex, 0, 0, copia_ancho * i, copia_alto * i);
        pop();
    }

    if (move) {
        angulo1 += 2;
    }  
}


function keyPressed(){
     if (keyCode == OPTION){
        move == false;
        inicio++;
        inicio = inicio % frases.length;
        move = true;
    }
    
    push()
    if(key == '0'){
    link.position(windowWidth/3,windowHeight/3);
    pop()
    }
  }


