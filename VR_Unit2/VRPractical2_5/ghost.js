class redGhost{
    constructor(x, y, z, r){
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = r;
        this.dy = 0.01;
        this.dx = 0.1;
        this.dr = 90;
    
        this.obj = red.cloneNode(true);

        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.obj.setAttribute("scale", "0.75 0.75 0.75");
        scene.append(this.obj);
        console.log(this.x, this.z);
    }

    fly(){
        this.x+= this.dx;
        this.y += this.dy;
        this.r = this.dr;        

        
        if (this.x<5 || this.x > 25){
            this.dx = -this.dx;
            this.dr = -this.dr;
        } 
        if(this.y <0.5 || this.y >1){
            this.dy = -this.dy;
        }
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.obj.setAttribute("rotation", {x:0, y:this.r, z:0});
    }
}

class yellowGhost{
    constructor(x, y, z){

    }
}