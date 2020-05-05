var drawing = [];
var currentpath = [];

function setup() {
  canvas = createCanvas(800,400);
  canvas.mousePressed(start);
}

function draw() {
  background("black"); 
  if(mouseIsPressed){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentpath.push(point);
  } 
  strokeWeight(5);
  noFill();
  stroke(178,102,255);

  for(var i=0; i<drawing.length; i++){
    var path = drawing[i];
    beginShape();
    for(var j=0; j<path.length; j++){
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }
}

function start(){
  currentpath = [];
  drawing.push(currentpath);
}
