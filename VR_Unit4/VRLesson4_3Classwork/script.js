let rnd = (l,u) => Math.random()*(u-l)+l;
let scene, balls=[];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  //Challenge 2: Create 200 Balls at random locations and watch them fall or push them off the end
  for (let i = 0; i<200;i++){
    balls.push(new Ball(rnd(-20,20),rnd(3,5),rnd(-20,20)));
  }
})
