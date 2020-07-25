var points = [];
var start = false;
var currentPath = [];
function setup() {
 var canvas =  createCanvas(displayWidth,displayHeight-110);
}

function draw() {
  background(255);
  
  if (start){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
    //console.log(currentPath);
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

  console.log(start);
}

function mousePressed(){
  start = true;
  currentPath = [];
  points.push(currentPath);
}

function mouseReleased(){
  start = false;
}