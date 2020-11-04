var currentPath = [];
var canvas, db;
var drawings = [];
var saveButton; nameInput, nameVal, resetButton;
var isDrawing = false;

function setup(){
  canvas =  createCanvas(windowWidth, windowHeight - 80);
  canvas.mousePressed(startPath);
  canvas.parent('canvasContainer');
  canvas.mouseReleased(endPath);

  db = firebase.database();

  nameInput = createInput('Your Name');

  saveButton = select('#saveButton');
  saveButton.mousePressed(saveDrawing);

  resetButton = select('#resetButton');
  resetButton.mousePressed(clearDrawing)
}

function draw(){
  background(0);
  nameInput.html('Your Name');
  nameVal = nameInput.value();

  if (mouseIsPressed){
    var point = {x: mouseX, y: mouseY};
    currentPath.push(point);  }
  
  stroke(255);
  strokeWeight(2);
  noFill();

  //for loop for drawing the newest point in the array
  for(var i = 0; i < drawings.length; i++){
    var path = drawings[i];
    beginShape();
    for(var j = 0; j < path.length; j++){
      vertex(path[j].x, path[j].y);
    }
    endShape();
  }
}

function startPath(){
  isDrawing = true;
  currentPath = [];
  drawings.push(currentPath);
}

function endPath(){
  isDrawing = false;
}

function saveDrawing(){
  var ref = db.ref('drawings');
  var data = {
    name: nameVal,
    drawing: drawings
  }

  ref.push(data);
}

function clearDrawing(){
  drawings = [];
}