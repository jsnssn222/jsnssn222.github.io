let width = 800;
let height = 400;
function setup() {
  createCanvas(width, height);
}

// car variable, named carX
let carX = 0;

function draw() {
  // background(RGB)
  background(220, 220, 220);
  // rect(x position, y position, width, height)
  rect(carX, 200, 50, 30); // Simple car shape
  carX += 2;
  reset_car_position();
}

function reset_car_position() {
  if (carX >= width) {
    carX = -50; // Start from just outside the left side
  }
}
