class Tree{
  constructor(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
    this.obj = document.createElement("a-entity");
  
    let pines = document.createElement("a-cone");
    pines.setAttribute("color","green");
    pines.setAttribute("position","0 1.5 0");
    pines.setAttribute("height","2");
    this.obj.append( pines );
  
    let stump = document.createElement("a-cylinder");
    stump.setAttribute("position","0 0 0");
    stump.setAttribute("color","brown");
    stump.setAttribute("radius","0.25");
    this.obj.append( stump );
  
    this.fall = false;
    this.obj.addEventListener("click",()=>{
        this.fall=true;
    })

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
  timber(){
    if (this.fall){
        this.y-=0.1;
    }
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
}