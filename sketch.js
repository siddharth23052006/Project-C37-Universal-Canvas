var points = [];
var start = false;
function setup() {
 var canvas =  createCanvas(displayWidth,displayHeight-110);
}

function draw() {
  background(255);
  
  if (start){
    points.push(point(mouseX,mouseY));
  }

  stroke(0);
  strokeWeight(2);
  noFill();
  beginShape();
  //for loop for drawing the newest point in the array
  for(var i = 0; i < points.length; i++){
    var x = points[i].x;
    var y = points[i].y;
    vertex(x,y);
  }
  endShape();

  //console.log(points);
}

function mousePressed(){
  start = true;
  points = [];
}

function mouseReleased(){
  start = false;
}