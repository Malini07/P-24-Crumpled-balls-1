class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
        }
    
        this.body = Bodies.rectangle (x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
        display(){
        var dustbinPos=this.body.position;
        fill("red")
        rect(dustbinPos.x, dustbinPos.y, this.width, this.height);

        }

    
}