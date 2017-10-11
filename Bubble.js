function Bubble(x,y,r1,color){

    this.x = x;
    this.y = y;
    this.r1 = r1;
    this.color = color;

    this.show = function(){
        stroke(-this.color/2 + 120, 0, this.color/2 + 120);
        ellipse(this.x, this.y, this.r1, 0.33*this.r1);
    }

    this.grow = function(){
        this.r1 += 6;
    }

    this.done = function(w){
        return (this.r1 > 4*w/2.5);
    }
}
