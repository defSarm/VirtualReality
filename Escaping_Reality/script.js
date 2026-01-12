let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");

    topbun = document.querySelector("#topbun");
    botbun = document.querySelector("#botbun");
    patty = document.querySelector("#patty");
    pickles = document.querySelector("#pickles");
    cheese = document.querySelector("#cheese");
    
    setTimeout(loop, 1000);
})

function loop(){
  // skip by 3 x
    new Conveyor(1, -8).randomize();
  
    
    window.requestAnimationFrame( loop );
}
