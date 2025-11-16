class redGhost{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.05;
        this.dx = 0.1;
        this.dr = 90;
    
        this.obj = red.cloneNode(true);

        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.obj.setAttribute("scale", "0.75 0.75 0.75");
        scene.append(this.obj);

    }

    fly(){
        this.x+= this.dx;
        this.y += this.dy;


        
        if (this.x<1){
            this.dx = -this.dx;
            this.dr = -this.dr;
            this.x+=4;
        } 
        if (this.x > 29){
            this.dx = -this.dx;
            this.dr = -this.dr;
            this.x-=4;
        }
        if(this.y <0.5 || this.y >1){
            this.dy = -this.dy;
        }
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.obj.setAttribute("rotation", {x:0, y:this.dr, z:0});
    }
}

class aquaGhost{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.05;
        this.dx = 0.1;
        this.dr = 90;
    
        this.obj = aqua.cloneNode(true);

        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.obj.setAttribute("scale", "0.75 0.75 0.75");
        scene.append(this.obj);

    }

    fly(){
        this.x+= this.dx;
        this.y += this.dy;


        
        if (this.x<-13){
            this.dx = -this.dx;
            this.dr = -this.dr;
            this.x+=4;
        } 
        if (this.x > 13){
            this.dx = -this.dx;
            this.dr = -this.dr;
            this.x-=4;
        }
        if(this.y <0.5 || this.y >1){
            this.dy = -this.dy;
        }
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.obj.setAttribute("rotation", {x:0, y:this.dr, z:0});
    }
}

class pinkGhost{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.05;
        this.dx = 0.1;
        this.dr = 0;
    
        this.obj = pink.cloneNode(true);

        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.obj.setAttribute("scale", "0.75 0.75 0.75");
        scene.append(this.obj);

    }

    fly(){
        this.z+= this.dx;
        this.y += this.dy;


        
        if (this.z<6.5){
            this.dx = -this.dx;
            this.dr = 0;
            this.z+=4;
        } 
        if (this.z > 24.5){
            this.dx = -this.dx;
            this.dr = 180;
            this.z-=4;
        }
        if(this.y <0.5 || this.y >1){
            this.dy = -this.dy;
        }
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.obj.setAttribute("rotation", {x:0, y:this.dr, z:0});
    }
}
