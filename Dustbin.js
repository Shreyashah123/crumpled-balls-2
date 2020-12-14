class Dustbin{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
            friction:1.0,
            density:1.0
        }
        this.image = loadImage("dustbingreen.png");
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        
        fill(255);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}