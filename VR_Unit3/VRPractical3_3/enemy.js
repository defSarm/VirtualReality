class Enemy{
    constructor(x,z){
        this.x = x;
        this.z = z;

        this.obj = mech.cloneNode(true);
        this.obj.setAttribute("position", {x:this.x, y:3, z:this.z});

        scene.append(this.obj);
    }
    


}