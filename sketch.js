var currentPath = [];
var canvas, db;
var drawing = [];
var saveButton, nameInput, nameVal;
var isDrawing = false;

function setup(){
  canvas =  createCanvas(windowWidth, windowHeight - 80);
  canvas.mousePressed(startPath);
  canvas.parent('canvasContainer');
  canvas.mouseReleased(endPath);

  db = firebase.database();

  saveButton = select('#saveButton');
  saveButton.mousePressed(saveDrawing(nameVal));

  nameInput = createInput('h2');
}

function draw(){
  background(0);
  nameInput.position(saveButton.position.x + 70, saveButton.position.y);
  nameInput.html('Your Name');
  nameVal = nameInput.value();

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
  isDrawing = true;
  currentPath = [];
  drawing.push(currentPath);
}

function endPath(){
  isDrawing = false;
}

function saveDrawing(name){
  var ref = db.ref('drawings');
  var data = {
    name: name,
    drawing: drawing
  }

  ref.update(data/*, dataSent=(status)=>{
    //console.log(status);
  });
  //console.log(result.key*/);
}