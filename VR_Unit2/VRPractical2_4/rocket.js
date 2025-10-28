// Create a Rocket class using the following guidelines.
// 1) Rocket class accepts coordinates x,y, and z when created.
// 2) Rocket must consist of at least two components.  Make appropriate adjustments to 
//    attributes. Contain the rocket in an entity.
// 3) Add animation variables so that each rocket created “flies” up at different speeds. 
//    Hint: Random numbers for your delta.
// 4) Create launch( ) function which makes the rocket “fly” up

class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.dy = 0.05;
    this.z = z;

    // main rocket
    this.obj = document.createElement("a-entity");
    
    // separate parts of the rocket
    this.body = document.createElement("a-entity");
    this.legs = document.createElement("a-entity");

    // body of the rocket
    this.base = document.createElement("a-cylinder");
    this.base.setAttribute("height", 2);
    this.base.setAttribute("radius", 0.75);

    this.window = document.createElement("a-cylinder");
    this.window.setAttribute("height", 0.1);
    this.window.setAttribute("radius", 0.4);
    this.window.setAttribute("rotation", {x:90, y:0, z:0});
    this.window.setAttribute("position", {x:0, y:0.55, z:0.7});

    this.glass = document.createElement("a-circle");
    this.glass.setAttribute("side", "double");
    this.glass.setAttribute("radius", 0.3);
    this.glass.setAttribute("position", {x:0, y:0.55, z:0.76});
    this.glass.setAttribute("color", "#A8CCD7");
    


    // conical head of the rocket
    this.head = document.createElement("a-cone");
    this.head.setAttribute("radius-bottom", 0.75);
    this.head.setAttribute("position", {x:0, y:1.5, z:0});
    this.head.setAttribute("color", "#800000");

    //appending to the rocket
    this.body.append(this.base);
    this.body.append(this.window);
    this.body.append(this.glass);


    this.obj.append(this.head);
    this.obj.append(this.body);

    scene.append(this.obj);
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }


  // make it fly
  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }

}