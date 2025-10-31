let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;
let dudes = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for (let i = 0; i<10; i++){
    dudes.push (new Dude(rnd(-20, 20), 0.6, rnd(-20,20)));
  }

  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for (let dude of dudes){
    dude.jump();
  }
  window.requestAnimationFrame( loop );
}