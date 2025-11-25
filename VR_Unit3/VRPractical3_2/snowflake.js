class Snowflake{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.opac = 1;
    this.gone = false;
    this.dy = 0.1;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",0.2);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    
    this.obj.addEventListener("click",()=>{
        this.gone = true;
    })

    scene.append( this.obj );
  }

  fall(){
    this.y -= this.dy;
    if (this.gone){
        this.opac-=0.1;
    }
    if(this.y<-2 || this.opac<=0){
      this.y = rnd(8,15);
      this.gone=false;
    }
    this.obj.setAttribute("opacity",this.opac);
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    
  }
}