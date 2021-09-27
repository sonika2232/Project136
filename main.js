video="";
status="";

function preload()
{
video= createVideo('video.mp4');
video.size(480 , 280);
video.hide();
}

function setup()
{
canvas= createCanvas(480 , 280);
canvas.center();
}

function draw()
{
image(video , 0 , 0 , 480 , 280);
}

function start()
{
objectDetector= ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML="status: detecting objects";
}

function modelLoaded()
{
console.log("modelLoaded");
status= true;
video.loop();
video.speed(1);
video.volume(0);
}