function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(175,275);
    
    canvas=createCanvas(550,400);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw(){

}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
