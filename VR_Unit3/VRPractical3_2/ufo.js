class UFO{
    constructor(x, y , z){
        this.x = x;
        this.y = y;
        this.dy=0.1;
        this.z = z;

        this.obj = document.createElement("a-entity");

        this.body = document.createElement("a-cylinder");
        this.body.setAttribute("height", 0.2);
        this.body.setAttribute("radius", 1.5);
        this.body.setAttribute("color", "#708090");

        this.glass = document.createElement("a-sphere");
        this.glass.setAttribute("phi-start", 0);
        this.glass.setAttribute("phi-length", 180);
        this.glass.setAttribute("rotation", {x:-90, y:0, z:0});
        this.glass.setAttribute("opacity", 0.2);
        this.glass.setAttribute("color", "blue");
        this.glass.setAttribute("side", "double");

        this.bottom = document.createElement("a-sphere");
        this.bottom.setAttribute("position", {x:0, y:0.25, z:0});
        this.bottom.setAttribute("phi-start", 0);
        this.bottom.setAttribute("phi-length", 180);
        this.bottom.setAttribute("rotation", {x:90, y:0, z:0});
        this.bottom.setAttribute("color", "#708090");
        this.bottom.setAttribute("side", "double");

        this.legs1 = document.createElement("a-entity");
        
        this.l1 = document.createElement("a-cylinder");
        this.l1.setAttribute("radius", 0.15);
        this.l1.setAttribute("color", "#B2BEB5");

        this.s1 = document.createElement("a-sphere");
        this.s1.setAttribute("radius", 0.15);
        this.s1.setAttribute("phi-start", 0);
        this.s1.setAttribute("phi-length", 180);
        this.s1.setAttribute("rotation", {x:90, y:0, z:0});
        this.s1.setAttribute("position", {x:0, y:-0.5, z:0});
        this.s1.setAttribute("color", "#B2BEB5");

        this.legs1.setAttribute("rotation", {x:20, y:180, z:0});
        this.legs1.append(this.l1);
        this.legs1.append(this.s1);
        this.legs1.setAttribute("position", {x:0, y:-0.35, z:0.65});    
        
        //
        
        this.legs2 = document.createElement("a-entity");
        
        this.l2 = document.createElement("a-cylinder");
        this.l2.setAttribute("radius", 0.15);
        this.l2.setAttribute("color", "#B2BEB5");

        this.s2 = document.createElement("a-sphere");
        this.s2.setAttribute("radius", 0.15);
        this.s2.setAttribute("phi-start", 0);
        this.s2.setAttribute("phi-length", 180);
        this.s2.setAttribute("rotation", {x:90, y:0, z:0});
        this.s2.setAttribute("position", {x:0, y:-0.5, z:0});
        this.s2.setAttribute("color", "#B2BEB5");

        this.legs2.setAttribute("rotation", {x:25, y:65, z:0});
        this.legs2.append(this.l2);
        this.legs2.append(this.s2);
        this.legs2.setAttribute("position", {x:-0.5, y:-0.35, z:-0.4}); 
        
        //

        this.legs3 = document.createElement("a-entity");
        
        this.l3 = document.createElement("a-cylinder");
        this.l3.setAttribute("radius", 0.15);
        this.l3.setAttribute("color", "#B2BEB5");

        this.s3 = document.createElement("a-sphere");
        this.s3.setAttribute("radius", 0.15);
        this.s3.setAttribute("phi-start", 0);
        this.s3.setAttribute("phi-length", 180);
        this.s3.setAttribute("rotation", {x:90, y:0, z:0});
        this.s3.setAttribute("position", {x:0, y:-0.5, z:0});
        this.s3.setAttribute("color", "#B2BEB5");

        this.legs3.setAttribute("rotation", {x:25, y:-65, z:0});
        this.legs3.append(this.l3);
        this.legs3.append(this.s3);
        this.legs3.setAttribute("position", {x:0.5, y:-0.35, z:-0.4}); 


        this.obj.append(this.body);
        this.obj.append(this.glass);
        this.obj.append(this.bottom);
        this.obj.append(this.legs1);
        this.obj.append(this.legs2);
        this.obj.append(this.legs3);

        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

        this.shoot=false;
        this.obj.addEventListener("mouseenter", ()=>{
            this.shoot=true;
        });

        scene.append(this.obj);
    }

    invade(){
        

        if (this.shoot){
            this.y-=this.dy;
            
        }
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

        
    }

}