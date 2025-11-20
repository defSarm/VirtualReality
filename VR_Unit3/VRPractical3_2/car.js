class Car{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
        this.dx=0.1;
        this.drive = false;

        this.obj = car.cloneNode(true);
    
        this.obj.addEventListener("click",( ) =>{
            this.drive=true;
        
        });

        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        scene.append(this.obj);
    }

    start(){
        if (this.drive){
            this.x+=this.dx;
        }
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }

}