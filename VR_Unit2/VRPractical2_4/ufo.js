// Challenge 4 (Hint: Use Challenge 2 and 3 as your guide for this challenge)
  // 1) Create a UFO class similar in logic to the Rocket class except that they fall 
  //    from the sky.  Use at least two components to model the UFO. Add an invade( ) 
  //    function to make the UFO drop to the ground at random speeds and stay on the ground. 
  // 2) Create an array of UFOs at random high locations and make them invade.

class UFO{
    constructor(x, y , z, dy){
        this.x = x;
        this.y = y;
        this.dy=dy;
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


        this.obj.append(this.body);
        this.obj.append(this.glass);
        this.obj.append(this.bottom);
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

        scene.append(this.obj);
    }

    invade(){
        
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

        if (this.y >= 0.5){
            this.y-=this.dy/20;
            console.log(this.dy, this.y);
        }
    }

}