class Cloud{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dx = 0.1;

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
        this.x+=this.dx;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }
}