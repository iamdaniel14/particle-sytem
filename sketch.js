
let bubbles=[];
let target;
let f=6;
let s;
let n;
let size;
let lineCheckbox;
let chooseColor;
let backgroundColor;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  n=int(width/f);
  v=select('#view'); //
  size=select ('#size-particles');
  lineCheckbox=select('#checkbox');
  chooseColor=select('#chooseColor');
  backgroundColor=select('#backgroundColor');

   sp=int(random(3,5));

  for (let i=0; i<n; i++){
let x=random (width);
let y=random (height);
bubbles[i]=new Bubbles (x,y,sp);
  }
  //draw
}

function draw() {
  background(backgroundColor.value());

let newRadius=size.value();
let view=v.value();

let colorValue=chooseColor.value();

 target=createVector(mouseX,mouseY);
  for (let b of bubbles){
   let steering=b.flee(target);
      b.applyForce(steering) ;
      b.edges();
      b. move ();
      b.show(colorValue);
      b. updateRadius(newRadius);
   b.direction (target);
     for (let other of bubbles){
       
    if (b!==other && b.intersection (other,view,lineCheckbox,colorValue)){ 
        b.overlapping=true;
       }
    if (b.overlapping){    
   b.colorChange (other);     
   } else {
     b.colorNormal ();
     }
     }}
     document.querySelector('#currentValue').innerText=n;
   
  }

function windowResized () {
  resizeCanvas (windowWidth,windowHeight);
  setup()
}