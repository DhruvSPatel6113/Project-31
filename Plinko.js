class Plinko{

    constructor(x , y){

        var options = {

            isStatic:true

        }

        this.body = Bodies.circle(x , y , 10 , options);

        World.add(world , this.body);

        this.radius = 10;

    }

    display(){

        var pos = this.body.position;

        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x , pos.y , this.radius , this.radius);

    }

}