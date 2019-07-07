let edgeLength = 300;
let counter = 0;


function setup() {
  colorMode(RGB, 255, 255, 255, 1);
  background(0,0,0,1);
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  // put setup code here
  stroke(24, 202, 230, 1);
  strokeWeight(1);
  fill(24, 202, 230, 0.1)
}



function draw() {
  background(0,0,0,1);
  counter += 0.01;
  for (let i = 0; i < 40; i++) {
    let angle = counter+i*0.3;
    beginShape();
    //---------------start
      curveVertex(sin(angle)*edgeLength, cos(angle)*edgeLength, 0);
      curveVertex(sin(angle)+0, cos(angle)+0, 0);
      curveVertex(cos(angle), sin(angle)*edgeLength, 0);
      curveVertex(cos(angle)*edgeLength, -noise(-angle)*sin(-angle)*edgeLength , 0);
      curveVertex(sin(angle)*edgeLength, cos(angle)+0, 0);
      curveVertex(sin(angle)+0, cos(angle)+0, 0);
      curveVertex(sin(angle)+0, cos(angle)+0, 0);
    endShape();
  }

  // put drawing code here
}