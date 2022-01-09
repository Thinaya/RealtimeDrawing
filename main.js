function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Intialized');
}

function draw() {
    background('#E6E6FA');
    document.getElementById("square_side").innerHTML = "Width And Heightof a Square will be - " - difference + "px";
    fill('#42e0f5');
    stroke('#42e0f5');
    square(noseX, noseY, difference);
}

noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}



