let scene;
let car;
let house;
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let ufos =[];
let rockets = [];
let snowflakes = [];
let trees = [];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  car = document.querySelector("#car");
  house = document.querySelector("#house");

  c = new Car(5, 0, -10);
  c2 = new Car(-5, 0, -10);

  h = new House(10, 0, -10);
  h2 = new House(0, 0, -10);
  h3 = new House(-10, 0, -10);
  for (let i = 0; i<20; i++){
    ufos.push(new UFO(rnd(-20,20), rnd(8,12), rnd(-20, 20)));
  }
  for(let i = 0; i<20; i++){
    rockets.push(new Rocket(rnd(-20, 20), 0, rnd(-20, 20)));
  }
  for (let i = 0; i<100; i++){
    snowflakes.push(new Snowflake(rnd(-20,20),rnd(8,15),rnd(-20,20)));
  }

  s = new Snowman(-10, -10);

  for (let i = 0; i<50;i++){
    trees.push(new Tree(rnd(-25, 25), rnd(-7, 20),0 ));
    trees.push(new Tree(rnd(-25, 25), rnd(-25, -15),0 ));
  }
      
  loop();
})

function loop(){
  c.start();
  c2.start();

  h.destroy();
  h2.destroy();
  h3.destroy();

  s.move();
  
  for (let ufo of ufos){
    ufo.invade();
  }
  for (let rocket of rockets){
    rocket.launch();
  }
  for (let snowflake of snowflakes){
    snowflake.fall();
  }

  for (let t of trees){
    t.timber();
  }
    
  window.requestAnimationFrame(loop);
}