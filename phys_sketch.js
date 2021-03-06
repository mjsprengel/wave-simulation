var bubble;
var bubbles = [];

function setup(){

    var width = displayWidth;
    var height = displayHeight;
    createCanvas(displayWidth, displayHeight); 
    document.documentElement.style.overflow = 'hidden'; //hide scroll bars for better viewing chrome/firefox
    document.body.scroll = "no"; //hide scrollbars for ie
    noFill();
    
    var amplitude = height/12;
    var sig = height/12;
}

function draw(){
    background(0);

    var T = sin(frameCount*0.05);
    var Tsig = sin(frameCount*0.092);

    var w = map(width*sin(frameCount*.01)**2, 0, width, 75, width/1.5);
    //var w = width/6;
    bubbles.push(new Bubble(width/2, height/2 + amplitude*T + sig*Tsig, 0, 255*Tsig));

    for(let i = bubbles.length-1; i >= 0; i--){
        bubbles[i].show();
        bubbles[i].grow();
        if(bubbles[i].done(w)){
           bubbles.splice(i,1);
        }
    }
}

