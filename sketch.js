// let tree;
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  stroke(255, 0, 0);
  strokeWeight(5);
  // tree = new Tree(width / 2, height / 2);
  slider = createSlider(0, 360, 45, 0);
}

function draw() {
  background(0, 255, 255);
  // translate(tree.x, tree.y);
  // tree.show();
  translate(width / 2, height / 3 * 2);
  drawTree(100);
  // slider.value(frameCount % 360); Animation
}

function drawTree(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 3) {
    push();
    rotate(radians(slider.value()));
    drawTree(len * 0.67);
    pop();
    push();
    rotate(-radians(slider.value()));
    drawTree(len * 0.67);
    pop();
  }
}
