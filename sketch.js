var points = [];
//var start = false;
var currentPath = [];
var canvas;

function setup(){
  canvas =  createCanvas(displayWidth-50,displayHeight-110);
}

function draw(){
  background(211);
  
  /*if (start){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
    //console.log(currentPath);
  }*/

  beginShape();
  stroke(0);
  strokeWeight(2);
  noFill();
  //for loop for drawing the newest point in the array
  for(var i = 0; i < points.length; i++){
    vertex(points[i].x,points[i].y);
  }
  endShape();
}

/*function mouseDragged(){
  start = true;
  currentPath = [];
  points.push(currentPath);
}*/

function mouseDragged(){
  var point = {x: mouseX, y: mouseY};
  points.push(point);
}

function mouseReleased(){
  start = false;
}