function preload() {}

function setup() {
    canvas = createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,640,480);
    fill('green');
    stroke('green');
    rect(5,5,10,469);
    rect(5,465,630,10);
    rect(5,5,630,10);
    rect(625,5,10,469);
}
function take_snapshot() {
    save('Photo.png');
}