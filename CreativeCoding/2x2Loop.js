function setup() {
 createCanvas (720,720);
}

function draw() {//runs in a loop 
background ('pink');
  translate (60,60);//resets origin point

  for(var y = 0; y < 600; y = y + 300) {//loop to create a grid in the y direction
  for (var x = 0; x < 600; x = x + 300) {
      quad (
    x,y,
    x + 300,y,
    x + 300,y + 300,
    x,y + 300 
  );// loop to create a row in the x direction 
  }