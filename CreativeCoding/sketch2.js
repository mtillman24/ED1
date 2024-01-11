function setup() {
 createCanvas (720,720);
}

function draw() {
background ('pink');
  translate (60,60);//resets origin point
  quad (
    0,0,
    300,0,
    300,300,
    0,300, 
  );
}