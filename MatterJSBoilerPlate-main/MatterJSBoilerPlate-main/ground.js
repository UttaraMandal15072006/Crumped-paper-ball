 class Ground
 {
    constructor(x,y,w,h)
    {
        let options=
        {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }

    ground()
    {
        var a=this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(5);
        stroke("grey");
        fill("lightgrey");
        rect(a.x,a.y,this.w,this.h);
        pop();
    }
 }