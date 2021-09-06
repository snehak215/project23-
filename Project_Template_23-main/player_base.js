class PlayerBase{
    constructor(x,y,length,height){
        this.length=length
        this.height=height
        var options = {
            isStatic: true
          };
        this.body=Bodies.rectangle(x,y,this.length, this.height, options)
        World.add(world, this.body)
        this.image=loadImage("./assets/base2.png")
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
            translate(pos.x,pos.y)
            rectMode(CENTER)
            imageMode(CENTER)
            image(this.image,0,0,this.length,this.height)
            //rect(0,0,this.length,this.height)
        pop()
    }
}