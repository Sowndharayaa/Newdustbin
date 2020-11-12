class Ground {
    constructor(x,y,width,height){
        var options = {
            'isStatic' : false,
            'density': 999,
        }
        this.body = Bodies.rectangle (x,y,width,height,options);
        this.width = width;
        this.height = height;

        this.image = loadImage ("wood2.png" );
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}