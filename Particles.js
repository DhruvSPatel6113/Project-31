class Particles{

    constructor(x , y , radius){

        var options = {

            restitution:0.4

        }

        this.body = Bodies.circle(x , y , radius , options);

        World.add(world , this.body);

        this.color = color(random(0 , 255) , random(0 , 255) , random(0 , 255));

        this.radius = radius;

    }

    display(){

        var pos = this.body.position;

        push();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(pos.x , pos.y , this.radius , this.radius);
        pop();

    }

}