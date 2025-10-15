let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let r = rnd(0, 180);
    createTree(x,-0.5,z);
    createCloud(x, 8, z, r);
    createHouse(x, z, r);
    
  }
  createHouse(0, 0);
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.

   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x, y, z, rotate){
  let cloud = document.createElement("a-entity");

  let sphereL = document.createElement("a-sphere");
  sphereL.setAttribute("radius", "0.5");
  sphereL.setAttribute("position", {x:-0.75, y:0, z:0});

  let sphereM = document.createElement("a-sphere");
  sphereM.setAttribute("radius","0.75");

  let sphereR = document.createElement("a-sphere");
  sphereR.setAttribute("radius", "0.5");
  sphereR.setAttribute("position", {x:0.75, y:0, z:0});

  cloud.append(sphereL);
  cloud.append(sphereM);
  cloud.append(sphereR);

  cloud.setAttribute("position", {x:x, y:y, z:z});
  cloud.setAttribute("rotation", {x:0, y:rotate, z:0});


  scene.append(cloud);

}

/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x, z, rotate){
  let house = document.createElement("a-entity");
  let base = document.createElement("a-entity");
  let roof = document.createElement("a-entity");

  // house base
  let frontwall = document.createElement("a-box");
  frontwall.setAttribute("depth", 0.1);
  frontwall.setAttribute("height", 3);
  frontwall.setAttribute("width", 5);
  frontwall.setAttribute("position", {x:0, y:1.5, z:0});

  let leftwall = document.createElement("a-box");
  leftwall.setAttribute("depth", 0.1);
  leftwall.setAttribute("height", 3);
  leftwall.setAttribute("width", 5);
  leftwall.setAttribute("position", {x:-2.5, y:1.5, z:-2.5});
  leftwall.setAttribute("rotation", "0 90 0");

  let rightwall = document.createElement("a-box");
  rightwall.setAttribute("depth", 0.1);
  rightwall.setAttribute("height", 3);
  rightwall.setAttribute("width", 5);
  rightwall.setAttribute("position", {x:2.5, y:1.5, z:-2.5});
  rightwall.setAttribute("rotation", "0 -90 0");

  let backwall = document.createElement("a-box");
  backwall.setAttribute("depth", 0.1);
  backwall.setAttribute("height", 3);
  backwall.setAttribute("width", 5);
  backwall.setAttribute("position", {x:0, y:1.5, z:-5});

  base.append(frontwall);
  base.append(leftwall);
  base.append(rightwall);
  base.append(backwall);

  // house roof
  let frontTri = document.createElement("a-triangle");
  frontTri.setAttribute("side", "double");
  frontTri.setAttribute("position", "0 0 2");
  frontTri.setAttribute("scale", "10 1 1");

  let leftRoof = document.createElement("a-box");
  leftRoof.setAttribute("rotation", "0 0 -80");
  leftRoof.setAttribute("width", 0.1);
  leftRoof.setAttribute("depth", 5);
  leftRoof.setAttribute("height", 5.1);
  leftRoof.setAttribute("position", "-2.5 0 0")

  let rightRoof = document.createElement("a-box");
  rightRoof.setAttribute("rotation", "0 0 80");
  rightRoof.setAttribute("width", 0.1);
  rightRoof.setAttribute("depth", 5);
  rightRoof.setAttribute("height", 5.1);
  rightRoof.setAttribute("position", "2.5 0 0")

  let backTri = document.createElement("a-triangle");
  backTri.setAttribute("side", "double");
  backTri.setAttribute("position", "0 0 -2");
  backTri.setAttribute("scale", "10 1 1");

  roof.append(frontTri);
  roof.append(backTri);
  roof.append(leftRoof);
  roof.append(rightRoof);
  roof.setAttribute("position", "0 3.5 -2.5");
  roof.setAttribute("scale", "0.5 1 1.25");


  house.append(base);
  house.append(roof);

  house.setAttribute("scale", "0.25 0.5 0.5");
  house.setAttribute("position", {x:x, y:-0.5, z:z});
  house.setAttribute("rotation", {x:0, y:rotate, z:0});

  scene.append(house);

}

function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



