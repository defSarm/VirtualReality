class Enemy{
    constructor(x,z){
        this.x = x;
        this.z = z;
        this.dx=0.05;

        this.obj = mech.cloneNode(true);
        this.obj.setAttribute("position", {x:this.x, y:2.5, z:this.z});

        scene.append(this.obj);
    }
    
    walk(){
        
        // spawnpoint1
        if (this.obj.object3D.position.x>= -14 && this.obj.object3D.position.x<=-3 && this.obj.object3D.position.z==-26){
            this.x+=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
            console.log("1");
            
        }

        if (this.obj.object3D.position.x >= -3 && this.obj.object3D.position.x<=-2 && this.obj.object3D.position.z==-26){
            this.obj.setAttribute("rotation",{x:0, y:0, z:0});
            console.log("1b");
        }

        // spawnpoint2
        if (this.obj.object3D.position.x<= 10 && this.obj.object3D.position.x>=3 && this.obj.object3D.position.z==-26){
            this.obj.setAttribute("rotation",{x:0,y:-90,z:0});
            this.x-=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
            console.log("2");
        }
        
        if (this.obj.object3D.position.x <= 3 && this.obj.object3D.position.x>=2 && this.obj.object3D.position.z==-26){
            this.obj.setAttribute("rotation",{x:0, y:0, z:0});
            console.log("2b");
        }

        // spawnpoint3
        if (this.obj.object3D.position.z<= 10 && this.obj.object3D.position.z>=-1 && this.obj.object3D.position.x==22){
            this.obj.setAttribute("rotation",{x:0,y:180,z:0});
            this.z-=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
            console.log("3");
        }
        
        if (this.obj.object3D.position.z <= -1 && this.obj.object3D.position.z>=-2 && this.obj.object3D.position.x==22){
            this.obj.setAttribute("rotation",{x:0, y:-90, z:0});
            console.log("3b");
        }

        // spawnpoint4
        if (this.obj.object3D.position.z>= -16 && this.obj.object3D.position.z<=-7 && this.obj.object3D.position.x==22){
            this.obj.setAttribute("rotation",{x:0,y:0,z:0});
            this.z+=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
            console.log("4");
            
        }
        
        if (this.obj.object3D.position.z >= -7 && this.obj.object3D.position.z <=-6 && this.obj.object3D.position.x==22){
            this.obj.setAttribute("rotation",{x:0, y:-90, z:0});
            console.log("4b");
        }

        // spawnpoint5
        if (this.obj.object3D.position.x<= 12 && this.obj.object3D.position.x>=3 && this.obj.object3D.position.z==18){
            this.obj.setAttribute("rotation",{x:0,y:-90,z:0});
            this.x-=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
            console.log("5");
        }
        
        
        if (this.obj.object3D.position.x <= 3 && this.obj.object3D.position.x >= 2 && this.obj.object3D.position.z==18){
            this.obj.setAttribute("rotation",{x:0, y:180, z:0});
            console.log("5b");
        }

        // spawnpoint6
        if (this.obj.object3D.position.x>= -10 && this.obj.object3D.position.x<=-3 && this.obj.object3D.position.z==18){
            this.obj.setAttribute("rotation",{x:0,y:90,z:0});
            this.x+=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
            console.log("6");
        }
        
        
        if (this.obj.object3D.position.x >= -3 && this.obj.object3D.position.x<=-2 && this.obj.object3D.position.z==18){
            this.obj.setAttribute("rotation",{x:0, y:180, z:0});
            console.log("6b");
        }

        // spawnpoint7
        if (this.obj.object3D.position.z<= 7 && this.obj.object3D.position.z>=-1 && this.obj.object3D.position.x==-22){
            this.obj.setAttribute("rotation",{x:0,y:180,z:0});
            this.z-=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
            console.log("7");
            
        }
        if (this.obj.object3D.position.z <= -1 && this.obj.object3D.position.z>=-2 && this.obj.object3D.position.x==-22){
            this.obj.setAttribute("rotation",{x:0, y:90, z:0});
            console.log("7b");
        }
        

        // spawnpoint8
        if (this.obj.object3D.position.z>= -16 && this.obj.object3D.position.z<=-7 && this.obj.object3D.position.x==-22){
            this.obj.setAttribute("rotation",{x:0,y:0,z:0});
            this.z+=this.dx;
            this.obj.setAttribute("position",{x:this.x, y:2.5, z:this.z});
            console.log("8");
            
        }
        
        if (this.obj.object3D.position.z >= -7 && this.obj.object3D.position.z<=-6 && this.obj.object3D.position.x==-22){
            this.obj.setAttribute("rotation",{x:0, y:90, z:0});
            console.log("8b");
            
        }
    }

}