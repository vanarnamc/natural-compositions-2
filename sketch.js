let song, amp;
let gridWidthSpacing= 15;
let gridHeightSpacing= 15;
let volumeAmp= 1800;
let level = 10;
let margin= 10; //margin for grid the smaller the number the bigger the margin
let wMargin;
let hMargin;

function preload() {  
  song = loadSound('audio/KenyonMillFalls.mp3');
}

function setup() {
  pixelDensity();

  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();
  angleMode(DEGREES);
  wMargin= width/margin;
   hMargin=height/margin;
}

function draw() {
  background(238,238,238, 40);
  let vol = amp.getLevel() * level;
  noFill();
  //ellipse(windowWidth/2, windowHeight/2, vol*volumeAmp, vol*volumeAmp);
 for (let w=0+wMargin; w<width-wMargin; w+=gridWidthSpacing){
  for (let h=0+hMargin; h<height-hMargin; h+=gridHeightSpacing){
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