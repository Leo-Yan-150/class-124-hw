noseX = 0;
noseY = 0;
difference = 0;
rwX = 0;
lwX = 0;
t = "( ͡° ͜ʖ ͡°)"
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
    background(255);
    document.getElementById("text_side").innerHTML = "width and height of the text will be = " + difference + " px.";

    stroke(0);
    textSize(difference);
    fill(255,0,0);
    if(key === "q" && keyIsPressed){
        fill(0,255,0);
        t = "( ͡° ͜ʖ ͡°)"
    }
    if(key === "w" && keyIsPressed){
        fill(0,0,255);
        t = ":("
    }
    if(key === "e" && keyIsPressed){
        fill(255,255,0);
        t = ":0"
    }
    if(key === "r" && keyIsPressed){
        fill(0,255,255);
        t = ":)"
    }
    text(t, noseX, noseY);

}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + " nose Y = " + noseY);
        
        lwX = results[0].pose.leftWrist.x;
        rwX = results[0].pose.rightWrist.x;
        difference = floor(lwX - rwX);
        console.log("left wrist x = " + lwX + " right wrist x = " + rwX + " difference = " + difference);
    }
}