


function preload(){

}

function setup(){
canvas=createCanvas(500,500);
canvas.position(800,150);
s = 'Hello';
fill(50);
textSize(70);
text(s, 200, 60, 70, 70);
video=createCapture(VIDEO);
video.size(500,500);
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}

function draw(){

}


function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }
}


function modelloaded(){
    console.log("model is loaded");
}