var currentPath = [];
var canvas, database;
var drawing = [];

function setup(){
  canvas =  createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(startPath);
  database = firebase.database();
}

function draw(){
  background(0);

  if (mouseIsPressed){
    var point = {x: mouseX, y: mouseY};
    currentPath.push(point);  }

  
  stroke(255);
  strokeWeight(2);
  noFill();

  //for loop for drawing the newest point in the array
  for(var i = 0; i < drawing.length; i++){
    var path = drawing[i];
    beginShape();
    for(var j = 0; j < path.length; j++){
      vertex(path[j].x, path[j].y);
    }
    endShape();
  }
}

function startPath(){
  currentPath = [];
  drawing.push(currentPath);
}