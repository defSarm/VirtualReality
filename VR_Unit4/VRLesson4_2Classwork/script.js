let rnd = (l,u) => Math.floor(Math.random()*(u-l)+l);
let rocks=[]; 
window.onload = function(){
  scene = document.querySelector("a-scene");
  for (let i = 0; i<30; i++){
    rocks.push(new Rock(rnd(-20,20), rnd(-20,20)));
  }

}

