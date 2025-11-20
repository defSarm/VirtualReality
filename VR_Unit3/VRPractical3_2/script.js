let scene;
let car;
let house;
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let ufos =[];
let rockets = [];
let snowflakes = [];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  car = document.querySelector("#car");
  house = document.querySelector("#house");

  c = new Car(-10, 0, -5);
  h = new House(10, 0, -5);
  for (let i = 0; i<20; i++){
    ufos.push(new UFO(rnd(-20,20), rnd(8,12), rnd(-20, 20)));
  }
  for(let i = 0; i<20; i++){
    rockets.push(new Rocket(rnd(-20, 20), 0, rnd(-20, 20)));
  }
  for (let i = 0; i<50; i++){
    snowflakes.push(new Snowflake(rnd(-20,20),rnd(8,12),rnd(-20,20)));
  }

  s = new Snowman(-10, -10);
  t= new Tree(0, 0, -5);
      
  loop();
})

function loop(){
  c.start();
  h.destroy();
  s.move();
  t.timber();
  
  for (let ufo of ufos){
    ufo.invade();
  }
  for (let rocket of rockets){
    rocket.launch();
  }
  for (let snowflake of snowflakes){
    snowflake.fall();
  }
    
  window.requestAnimationFrame(loop);
}