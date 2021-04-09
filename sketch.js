//Simple star drawing code
//Written by Vittoria Ventura, 2020 / vittoriaventura.vv@gmail.com


function setup() {

  createCanvas(displayWidth, displayHeight);
  frameRate(60);
  background(0);
  smooth();

}

function draw() {
  //Set mouse position as centre of drawing
  translate(mouseX, mouseY);

  //Determine different values to r,g,b
  //Map the values that will be used for fill
  
  //r,g,b set for 1st gradient:
  let r = map(mouseY,0,windowHeight,1,255);
  let g = map(mouseX,0,windowHeight,1,255);
  let b = map(mouseY,0,windowWidth,255,1);
  
  //Determine default fill for stars   
  //Combine the mapped r,g,b values to create a gradient
  fill(r, g, b, 50);
  noStroke();

  //Create different sets of r,g,b mappings 
  //Each set is a new gradient
  
  //r,g,b set for 2nd gradient:
  let r2 = map(mouseY, 0, displayHeight, 255,1);
  let g2 = map(mouseX, 0, displayHeight, 1, 255);
  let b2 = map(mouseY, 0, displayHeight, 1, 255);
  
  //r,g,b set for 3rd gradient:
  let r3 = map(mouseY, 0, displayHeight, 255,1);
  let g3 = map(mouseY, 0, displayHeight, 1, 255);
  let b3 = map(mouseX, 0, displayHeight, 1, 255);
  
  //r,g,b set for 4th gradient:
  let r4 = map(mouseY, 0, displayHeight, 255, 1);
  let g4 = map(mouseX, 0, displayWidth, 1, 255);
  let b4 = map(mouseX, 0, displayHeight, 255, 1);
  
  //r,g,b set for 5th gradient:
  let r5 = map(mouseY, 0, displayHeight, 1, 255);
  let g5 = map(mouseX, 0, displayWidth, 1, 255);
  let b5 = map(mouseY, 0, displayHeight, 255, 1);
  //r,g,b set for 6th gradient:
  let r6 = map(mouseY, 0, displayHeight, 255,1);
  let g6 = map(mouseY, 0, displayHeight, 1, 255);
  let b6 = map(mouseY, 0, displayHeight, 1, 255);
  //r,g,b set for 7th gradient:
  let r7 = map(mouseY, 0, displayHeight, 1, 255);
  let g7 = map(mouseY, 0, displayHeight, 255, 1);
  let b7 = map(mouseY, 0, displayHeight, 1, 255);
  //r,g,b set for 8th gradient:
  let r8 = map(mouseY, 0, displayHeight, 1, 255);
  let g8 = map(mouseX, 0, displayWidth, 255, 1);
  let b8 = map(mouseY, 0, displayWidth, 255, 1);
  //r,g,b set for 9th gradient:
  let r9 = map(mouseY, 0, displayHeight, 1, 255);
  let g9 = map(mouseY, 0, displayHeight, 1, 255);
  let b9 = map(mouseY, 0, displayHeight, 255, 1);
  


  //If certain key is pressed, change fill
  //Each number key corresponds to a different fill
  if (key === "1") {
    fill(r, g, b, 50);
    noStroke();


  } else if (key === "2") {
    fill(r2, g2, b2, 50);
    noStroke();
  } else if (key === "3") {
    fill(r3, g3, b3, 50);
    noStroke();
  } else if (key === "4") {
    fill(r4, g4, b4, 50);
    noStroke();
  } else if (key === "5") {
    fill(r5, g5, b5, 50);
    noStroke();
  } else if (key === "6") {
    fill(r6, g6, b6, 50);
    noStroke();
  } else if (key === "7") {
    fill(r7, g7, b7, 50);
    noStroke();
  } else if (key === "8") {
    fill(r8, g8, b8, 50);
    noStroke();
  } else if (key === "9") {
    fill(r9, g9, b9, 50);
    noStroke();
    
    //The "0" key corresponds to a special option
    //No fill, just white stroke
  } else if (key === "0") {
    stroke(255, 50)
    noFill()
    strokeWeight(2)
  } 
   //If spacebar is pressed, clear canvas
   //
  if (keyCode === 32) {
    createCanvas(displayWidth, displayHeight);
      background(0);
  } 
  
  //If mouse is pressed draw star
  if (mouseIsPressed) {
    
  //Map size of star
  //Size is small at top, large at bottom
    let size = map(mouseY, 0, windowWidth, 10, 300)
    
  //Set the number of points in a star to 5  
    p = 5;
  //Determine measuraments for the star   
    star(0, 0, size / 2, size, p);

  }

}
//Star Shape Function
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape(); 
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  //Make star rotate
  rotate(radians(frameCount + mouseX));
  endShape(CLOSE);
}