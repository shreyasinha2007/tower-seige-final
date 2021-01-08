class Roof{
    constructor(x,y,width,height){
   var options= {
        isStatic:true
}
 
this.bodyy = Matter.Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
Matter.World.add(world,this.bodyy)
}
display(){
    var pos =this.bodyy.position;
    push();
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
}
}
