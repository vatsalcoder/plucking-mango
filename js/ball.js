class Ball{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB
        this.Ball = Constraint.create(options)
        World.add(world, this.Ball)

    }
    fly(){
        this.Ball.bodyA=null
    }

    Launch(bodyA){
        this.Ball.bodyA=bodyA
    }

    display(){
        
    }
}