class Dustbin{
    
        constructor(x,y,width,height){
        var options={
        
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
         }
        this.x=x;
        this.y=y;
       this.width=width;
       this.height=height
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
        
        }
        display()
        {
        var dustbinpos=this.body.position
        push()
        translate(dustbinpos.x,dustbinpos.y);
        rectMode(CENTER);
        fill="white";
        rect(0,0,this.width,this.height)
        pop()
        
          }
     
}