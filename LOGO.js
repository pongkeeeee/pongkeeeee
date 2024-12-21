let logo; // Variable to store the image
let angle = 0; // Rotation angle
let scaleFactor = 1; // Scale factor
let scaleSpeed=0.05;
let growing = false; // Flag to control scaling direction

function preload() {
  // Load the logo image (replace 'logo.png' with your image file)
  logo = loadImage('logo.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER); // Set image draw mode to center
}

function draw() {
  background(255); 
  translate(width / 2, height / 2); 

  if (growing) {
    angle += 2; 
    scaleFactor += scaleSpeed; 
    scaleSpeed=scaleSpeed*1.02;
  }
  if (scaleFactor >= 200) {
      growing = false; 
      scaleSpeed = 0.01; 
    setTimeout(()=>{
      window.location.href="2nd_page.html";
    }, 400)
    }

  rotate(radians(angle)); 
  scale(scaleFactor); 
  image(logo, 0, 0, 400, 400); 
}

function mousePressed() {
  growing = true; 
  
}
