
window.addEventListener("DOMContentLoaded",function() {
    let car = document.querySelector("#car");
    let pokemonball = document.querySelector("#pokemonball");
    let rocket = document.querySelector("#rocket");
    let sun = document.querySelector("#sun");
    let dude = document.querySelector("#dude");

    car.x = 0;
    car.dx = 0.05;

    pokemonball.rx = 0;
    pokemonball.drx = 1;

    rocket.y = 1;
    rocket.dy = 0.04;

    dude.size = 1;
    dude.dsize = 0.005;

    sun.opac = 0;
    sun.dopac = 0.005;

    loop();
})


function loop(){
    car.x-=car.dx;
    car.setAttribute("position", {x:car.x, y:0, z:-7});

    pokemonball.rx+=pokemonball.drx;
    pokemonball.setAttribute("rotation", {x:pokemonball.rx, y:0, z:0});
    
    rocket.y+=rocket.dy;
    rocket.setAttribute("position", {x:3, y:rocket.y, z:-4});

    dude.size += dude.dsize;
    dude.setAttribute("scale", {x:dude.size, y:dude.size, z:dude.size});

    sun.opac+=sun.dopac;
    sun.setAttribute("opacity", sun.opac);

    requestAnimationFrame(loop);
}
