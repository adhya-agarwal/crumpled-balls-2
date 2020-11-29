class Ball{
    constructor(x,y,r){
        var options= {
            isStatic:true
            //'restitution':0.5,
            //'friction':1.0,
            //'density':2.0
        }

        
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
        this.image=loadImage("sprites/paper.png")
        World.add(world,this.body);
    }
    display(){

var paperpos=this.body.position;
push()
translate(paperpos.x,paperpos.y);
rectMode(CENTER);
strokeWeight(3);
stroke("magenta")
fill("lightpurple");
//ellipse(0,0,this.r,this.r);
image(this.image,0,0,this.r,this.r);
pop()
}
};
