class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=bodyB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
       if (this.chain.bodyA!=null) {
           var pointA = this.chain.bodyA.position;
        //var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
       }
    }
}