let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets = [];
let ufos = [];
let clouds = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  // Challenge 3
  //1) Create 100 rockets in a grid pattern on the X-Z plane just 
  //   below the plane.  Provide each rocket an appropriate random 
  //   y coordinate below the plane.
  //2) Animate each rocket “launching”. 

  


  for (let i = 0; i<100; i++){
    rockets.push(new Rocket(rnd(-10, 10), rnd(-20, -2), rnd(-10,10)));
  }

  for (let i = 0;i<200;i++){
    clouds.push(new Cloud(rnd(-30,30), rnd(8,15), rnd(-20,20), rnd(1,5)));
  }

  for (let i =0; i<50; i++){
    house = new House(rnd(-20, 20), rnd(-20,20), rnd(0,360));
  }

  for (let i = 0; i<20; i++){
    ufos.push(new UFO(rnd(-20, 20), rnd(7, 25), rnd(-10,10), rnd(1, 5)));
  }

  loop();
})

function loop(){

  for (let rocket of rockets){
    rocket.launch();
  }
  for (let ufo of ufos){
    ufo.invade();
  }

  for (let cloud of clouds){
    cloud.fly();
  }
  
  window.requestAnimationFrame( loop );
}


