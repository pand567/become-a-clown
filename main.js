noseX=0;
noseY=0;
function preload(){
    cn = loadImage('https://i.postimg.cc/TYgSTBsr/clown.png')
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet is intialized');
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(cn, noseX, noseY, 30, 30);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function gotPoses(results)
{
    if(results.length > 0)
    { 
        console.log(results);
        noseX = results[0].pose.nose.x - 13;
        noseY = results[0].pose.nose.y - 13;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);

    }
   
}