let scene;
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
 
  for (let i=0; i<20; i++){
    mech1 = new MechTech(rnd(-40,40), 13, rnd(-40, 40));
  }

  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
