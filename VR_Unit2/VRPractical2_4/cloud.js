class Cloud{
    constructor(x,y,z, dx){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dx = dx;

        this.obj = document.createElement("a-entity");

        let cloudL = document.createElement("a-sphere");
        cloudL.setAttribute("position","-0.5 0 0");
        cloudL.setAttribute("radius","0.6");

        let cloudM = document.createElement("a-sphere");
        cloudM.setAttribute("position","0 0 0");
        cloudM.setAttribute("radius","0.8");

        let cloudR = document.createElement("a-sphere");
        cloudR.setAttribute("position","0.5 0 0");
        cloudR.setAttribute("radius","0.6");

        this.obj.append(cloudL);
        this.obj.append(cloudM);
        this.obj.append(cloudR);

        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        scene.append(this.obj);
    }
    
    fly(){
        this.x+=this.dx/30;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        if (this.x > 30){
            this.x = -30;
        }
    
    }
}