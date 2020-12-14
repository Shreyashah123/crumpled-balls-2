class Paper{
    constructor(x,y){
        var options ={
            density:1.0
        }
        this.image = loadImage("paper.png");
        this.body= Bodies.circle(x,y,70,options);
        World.add(world,this.body);
        this.radius=70;
        
    }
    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(255);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}
