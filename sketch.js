var stars = [];

var speed;

let slider;

function setup() {
  slider = createSlider(0, 110, 0, 1);
  //slider2 = createSlider();
 // slider3 = createSlider(400, window.innerWidth, window.innerWidth, 1);
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
    speed++;
    //slider.value(slider++)
  }
}



function draw() {
  speed = slider.value();
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}