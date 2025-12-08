class Enemy{
    constructor(x,z){
        this.x = x;
        this.z = z;

        this.obj = mech.cloneNode(true);
        this.obj.setAttribute("position", {x:this.x, y:2, z:this.z});
    }
    


}