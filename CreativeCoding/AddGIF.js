//adding a GIF to my grid

let gif;

function preload (){
  gif = loadImage ('assets/MayaGIF.gif');
}

function setup() {
  //runs one time
 createCanvas (windowWidth, windowHeight);

}

function draw() {
  //runs in a loop 

  var num = 50;
  var sideLen = windowWidth/num;
  
  for(var y = 0; y < windowHeight; y = y + sideLen) {
    //loop to create a grid in the y direction
    
  for (var x = 0; x < windowWidth; x = x + sideLen) {
  image (gif, x, y, sideLen, SideLen);
  }
  }
  }

function windowResized(){
  resizeCanvas ( windiwWidth, windowHeight);
}