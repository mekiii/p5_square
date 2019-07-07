let edgeLength = 300;
let counter = 0;


function setup() {
  colorMode(RGB, 255, 255, 255, 1);
  background(0,0,0,1);
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  // put setup code here
  stroke(205, 203, 113, 1);
  strokeWeight(1);
  fill(24, 202, 230, 0.05)
}



function draw() {
  background(0,0,0,1);
  counter += 0.01;
  for (let i = 0; i < 20; i++) {
    let angle = counter+i*0.3;
    beginShape();
    //---------------start
      vertex(1*edgeLength, 0*edgeLength, 0);
      vertex(sin(angle)+0, cos(angle)+0, 0);
      vertex(cos(angle), sin(angle)*edgeLength, 0);
      vertex(cos(angle)*edgeLength, -noise(-angle)*sin(-angle)*edgeLength , 0);
      vertex(sin(angle)*edgeLength, cos(angle)+0, 0);
    endShape(CLOSE);
  }

  // put drawing code here
}