let scene, boxes = [];
let rnd = (l,u) => Math.random()*(u-l)+l;
window.onload = function(){
  scene = document.querySelector("a-scene");
  /* Challenge
     Create 10 random boxes through the world
  */
  for(let i=0;i<10;i++){
    boxes.push( new Box(rnd(-8,8),0.5,rnd(-8,8)) );
  }

  loop();
 
}


function loop(){
  /* Challenge 
     Make the boxes blast off
  */
  for (let box of boxes){
    box.blast();
  }

  window.requestAnimationFrame( loop )
  
}