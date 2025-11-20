class House{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
        this.dy=0.1;
        this.fall=false;

        this.obj = house.cloneNode(true);
        this.obj.addEventListener("click", ()=>{
            this.fall=true;
        })
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

        scene.append(this.obj);
    }

    destroy(){
        if (this.fall){
            this.y-=this.dy
        }
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }
}
