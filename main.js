leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#666464");
    textSize(difference);
    fill("#94ecf7");
    text('Arya', 100, 100);
}

function modelLoaded() {
    console.log("Model Has Loaded");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}