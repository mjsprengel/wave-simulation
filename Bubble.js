function Bubble(x,y,r1,color){

    this.x = x;
    this.y = y;
    this.r1 = r1;
    this.color = color;

    this.show = function(){
        fill(-this.color/2 + 120, 0, this.color/2 + 120,2);
        stroke(-this.color/2 + 120, 0, this.color/2 + 120,200);
        //stroke(255,255,255);
        ellipse(this.x, this.y, this.r1, 0.33*this.r1);
    }

    this.grow = function(){
        this.r1 += 6;
    }

    this.done = function(w){
        return (this.r1 > 4*w/2.5);
    }
}