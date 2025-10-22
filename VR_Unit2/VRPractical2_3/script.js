let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
    let house = new House(x + rnd(-5,5), z + rnd(-5,5));
    let cloud = new Cloud(x + rnd(-10,10), rnd(10,20), z + rnd(-10,10));
  }

})
