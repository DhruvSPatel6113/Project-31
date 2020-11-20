class Ground{

    constructor(x , y , width , height , colour){

        var options={

            isStatic:true

        }

        this.body = Bodies.rectangle(x , y , width , height , options);

        World.add(world , this.body);

        this.colour=colour;
        this.width = width;
        this.height = height;
 
    }

    display(){

        var pos = this.body.position;

        rectMode(CENTER);
        fill(this.colour);
        rect(pos.x , pos.y , this.width , this.height);

    }

}