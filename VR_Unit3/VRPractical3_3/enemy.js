class Enemy{
    constructor(x,z){
        this.x = x;
        this.z = z;
        this.dx=0.05;
        this.attack = false;

        this.obj = mech.cloneNode(true);
        this.obj.setAttribute("position", {x:this.x, y:2.5, z:this.z});

        scene.append(this.obj);
    }
    
    walk(){
        
        // spawnpoint1
        if (this.obj.object3D.position.x>= -14 && this.obj.object3D.position.x<=-3 && this.obj.object3D.position.z==-26){
            this.x+=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
            
        }

        if (this.obj.object3D.position.x >= -3 && this.obj.object3D.position.x<=-2 && this.obj.object3D.position.z==-26){
            this.obj.setAttribute("rotation",{x:0, y:0, z:0});
            this.center = true;
        }

        // spawnpoint2
        if (this.obj.object3D.position.x<= 10 && this.obj.object3D.position.x>=3 && this.obj.object3D.position.z==-26){
            this.obj.setAttribute("rotation",{x:0,y:-90,z:0});
            this.x-=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
        }
        
        if (this.obj.object3D.position.x <= 3 && this.obj.object3D.position.x>=2 && this.obj.object3D.position.z==-26){
            this.obj.setAttribute("rotation",{x:0, y:0, z:0});
            this.center = true;
        }

        // spawnpoint3
        if (this.obj.object3D.position.z<= 10 && this.obj.object3D.position.z>=-1 && this.obj.object3D.position.x==22){
            this.obj.setAttribute("rotation",{x:0,y:180,z:0});
            this.z-=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
        }
        
        if (this.obj.object3D.position.z <= -1 && this.obj.object3D.position.z>=-2 && this.obj.object3D.position.x==22){
            this.obj.setAttribute("rotation",{x:0, y:-90, z:0});
            this.center = true;
        }

        // spawnpoint4
        if (this.obj.object3D.position.z>= -16 && this.obj.object3D.position.z<=-7 && this.obj.object3D.position.x==22){
            this.obj.setAttribute("rotation",{x:0,y:0,z:0});
            this.z+=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
            
        }
        
        if (this.obj.object3D.position.z >= -7 && this.obj.object3D.position.z <=-6 && this.obj.object3D.position.x==22){
            this.obj.setAttribute("rotation",{x:0, y:-90, z:0});
            this.center = true;
        }

        // spawnpoint5
        if (this.obj.object3D.position.x<= 12 && this.obj.object3D.position.x>=3 && this.obj.object3D.position.z==18){
            this.obj.setAttribute("rotation",{x:0,y:-90,z:0});
            this.x-=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
        }
        
        
        if (this.obj.object3D.position.x <= 3 && this.obj.object3D.position.x >= 2 && this.obj.object3D.position.z==18){
            this.obj.setAttribute("rotation",{x:0, y:180, z:0});
            this.center = true;
        }

        // spawnpoint6
        if (this.obj.object3D.position.x>= -10 && this.obj.object3D.position.x<=-3 && this.obj.object3D.position.z==18){
            this.obj.setAttribute("rotation",{x:0,y:90,z:0});
            this.x+=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
        }
        
        
        if (this.obj.object3D.position.x >= -3 && this.obj.object3D.position.x<=-2 && this.obj.object3D.position.z==18){
            this.obj.setAttribute("rotation",{x:0, y:180, z:0});
            this.center = true;
        }

        // spawnpoint7
        if (this.obj.object3D.position.z<= 7 && this.obj.object3D.position.z>=-1 && this.obj.object3D.position.x==-22){
            this.obj.setAttribute("rotation",{x:0,y:180,z:0});
            this.z-=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
            
        }
        if (this.obj.object3D.position.z <= -1 && this.obj.object3D.position.z>=-2 && this.obj.object3D.position.x==-22){
            this.obj.setAttribute("rotation",{x:0, y:90, z:0});
            this.center = true;
        }
        

        // spawnpoint8
        if (this.obj.object3D.position.z>= -16 && this.obj.object3D.position.z<=-7 && this.obj.object3D.position.x==-22){
            this.obj.setAttribute("rotation",{x:0,y:0,z:0});
            this.z+=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
            
        }
        
        if (this.obj.object3D.position.z >= -7 && this.obj.object3D.position.z<=-6 && this.obj.object3D.position.x==-22){
            this.obj.setAttribute("rotation",{x:0, y:90, z:0});
            this.center = true;
            
        }

        if (this.center){
            if (this.obj.object3D.position.z<=-5 && this.obj.object3D.position.z>=-26){
                this.z+=this.dx;
                this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
                console.log("1");
       
            } 

            if (this.obj.object3D.position.z<=19 && this.obj.object3D.position.z>=2 ){
                this.z-=this.dx;
                this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
                console.log("2");
            
            }

            
            if (this.obj.object3D.position.x<=23 && this.obj.object3D.position.x>=2){
                
                this.x-=this.dx;
                this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
                console.log("3");
      
            }

            if (this.obj.object3D.position.x>=-23 && this.obj.object3D.position.x<=-4){
                this.x+=this.dx;
                this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
                console.log("4");
         
            }
            if ((this.obj.object3D.position.x<=2 && this.obj.object3D.position.x>=-4) && (this.obj.object3D.position.z>=-5 && this.obj.object3D.position.x<=2)){
                this.attack=true;
                this.center=false;
            }
        }


       

        

        if (this.attack){
            if (distance(generator,this.obj)>2){
                if (generator.object3D.position.x>this.obj.object3D.position.x){
                    this.x+=this.dx;
                    this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});

                }
                if(generator.object3D.position.x<this.obj.object3D.position.x){
                    this.x-=this.dx;
                    this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});

                } 
                if(generator.object3D.position.z>this.obj.object3D.position.z){
                    this.z+=this.dx;
                    this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});

                }
                if(generator.object3D.position.z<this.obj.object3D.position.z){
                    this.z-=this.dx;
                    this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});

                }

            } 
        }
    }

}