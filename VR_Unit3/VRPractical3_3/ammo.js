class Ammo{
    constructor(x,z){
        this.x=x;
        this.z=z;
        this.dr=1;
        this.r = 0;

        this.obj = ammobox.cloneNode(true);
        this.obj.setAttribute("position",{x:this.x,y:0,z:this.z});
        scene.append(this.obj);
    }

    rotate(){
        this.r+=this.dr;

        this.obj.setAttribute("position",{x:this.x,y:0,z:this.z});
        this.obj.setAttribute("rotation",{x:0, y:this.r,z:0});
     
    }

}