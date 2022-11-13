let song, amp;
let gridWidthSpacing= 15;
let gridHeightSpacing= 15;
let volumeAmp= 1800;
let level = 10;
function preload() {  
  song = loadSound('audio/KenyonMillFalls.mp3');
}

function setup() {
  pixelDensity();

  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();
  angleMode(DEGREES);


}

function draw() {
  background(238,238,238, 40);
  let vol = amp.getLevel() * level;
  noFill();
  //ellipse(windowWidth/2, windowHeight/2, vol*volumeAmp, vol*volumeAmp);
 for (let w=0; w<width; w+=gridWidthSpacing){
  for (let h=0; h<height; h+=gridHeightSpacing){
    circle(w,h,random(2,300)*vol);

  }

 }



}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    // background(255, 0, 0);
  } else {
    song.loop();
    // background(0, 255, 0);
  }
}