/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "--------------------------------------x----x--",
  "--------------------------------------x----x--",
  "--------------------------------------x----x--",
  "--------------------------------------x----x--",
  "--------------------------------------x----x--",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx----xxx",
  "x---x--x---------x----x--X-----------------x-x",
  "x---x--x---------x----x--xxxxxxxxxxxxxxxxxxx-x",
  "x---x--xxxxxxxx--xxxxxx--x---x-------------x-x",
  "xxxxx--xxxxxxxx--------------x-------------x-x",
  "x---------------------------xx--xxxxxxxxxxxxxx",
  "x----------------xxxxx--xxxxxx--xxxxxxxxxxx--x",
  "xxxxxxxXXxxxxxxxxx---------------------------x",
  "x-----x--x----------R------------------------x",
  "xxxxxxx--xxxxxxxxx--xxxxxxxxxxxxxxxxxxxx---xxx",
  "x-------------------x-----------------X----x-x",
  "x-------------------xxxxxx---xxxxxxxxxxxx--x-x",
  "x--xxxxxx--xxxxxxx--x----x---x----------x--x-x",
  "x--x----x--x-----x--xxxxxxxxxx----------x--x-x",
  "x--xxxxxxxxx-----x--------------xxxxxx--x--x-x",
  "x----------x-----x--------------x----x--x--x-x",
  "x----------x-----x--xxxxxx------xxxxxxxxxxxx-x",
  "xxxxxxxxx--x-----x--x---------x-x-P--------x-x",
  "x-x-----x--xxxxxxx--xxx----x--x-x----------x-x",
  "x-x-----x--x----------xxxxxx--xxx--xxxxxx--x-x",
  "x-x--xxxx--x----------x----x-------x----x--x-x",
  "x-x--------x--xxxxxx--x----x-------x----x--x-x",
  "x-x--xxxxxxx--x----x--x--xxx--xxx--xxxxxxxxxxx",
  "x-x-----------x----x--x--x-x--x-x--x---------x",
  "x-x-----------x----x--x--xxx--xxx--x---------x",
  "x-x--xxxxxxx--xxxxxxxxx------------x--xxxxxxxx",
  "x-x--x---x-------------------------x---------x",
  "x-x--x---x--------------------xxxxxx------x--x",
  "x-x--x---xXXXxxxxxxxxxxxxxxx--x-------xx--xXXx",
  "x-x--xxxxx---xxxxxxxxxxxxxxxxxx-------xx--x--x",
  "x-x---------------------------xx--xx--xx--x--x",
  "x-x-A-------------------------x----x--xx--x--x",
  "x-xxxxxxxxx--xxxxxxx----xxxxxxxx---x--xx--x--x",
  "x---------x-----x--x----x---x--x---x--xx--x--x",
  "xxxxxxxxxxx--xxxx--x----x---x--x---x--xx--x--x",
  "x------------x-----x----x---x--x---x--xx--x--x",
  "x------------x-----xXXXXxxxxx--xxxxx--xxxxx--x",
  "xxx----xxxx--xxxxxxx--------------------x----x",
  "x-x--xxxx-------------------------------x--xxx",
  "x-x--xxxx---------------xxxxxxxxxxxxx---x--xxx",
  "x-x------x--xxxxxxxx----x-----------xxxxx--xxx",
  "x-x------x--x------x----x------------------xxx",
  "xxxxxxxxxxxxxxxxxxxx----xxxxxxxxxxxxxxxxxxxxxx",
  "----------------------------------------------"
];


/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;
let red;
let rghost;
let aqua;
let aghost;
let pink;
let pghost;

let first = false, second=false,third=false;

let moving = [];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  red = document.querySelector("#red");
  aqua = document.querySelector("#aqua");
  pink = document.querySelector("#pink");

  a = document.querySelector("#a");
  a.addEventListener("click", function(){
    if (a.getAttribute("color") == "#FFB8FF"){
      a.setAttribute("color", "aqua");
      first=true;
    } else if(a.getAttribute("color") == "aqua"){
      a.setAttribute("color", "red");
      first=false;
    } else if (a.getAttribute("color") == "red"){
      a.setAttribute("color","#FFB8FF");
      first=false;
    } else{
      first=false;
      a.setAttribute("color", "red");
    }
  });

  p = document.querySelector("#p");
  p.addEventListener("click", function(){
    if (p.getAttribute("color") == "#FFB8FF"){
      p.setAttribute("color", "aqua");
      second=false;
    } else if(r.getAttribute("color") == "aqua"){
      p.setAttribute("color", "red");
      second=false;
    } else if (p.getAttribute("color") == "red"){
      p.setAttribute("color","#FFB8FF");
      second=true;
    } else{
      second=false;
      p.setAttribute("color", "red");
    }
  });

  r = document.querySelector("#r");
  r.addEventListener("click", function(){
    if (r.getAttribute("color") == "#FFB8FF"){
      r.setAttribute("color", "aqua");
      third=false;
    } else if(r.getAttribute("color") == "aqua"){
      r.setAttribute("color", "red");
      third=true;
    } else if (r.getAttribute("color") == "red"){
      r.setAttribute("color","#FFB8FF");
      third=false;
    } else{
      third=true;
      r.setAttribute("color", "red");
    }
  });

  wall = document.querySelector("#wall");

  
  

  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let col = row.split("");
    for (let c = 0; c<col.length;c++){
      if (col[c] == "x"){
        new Block(c-16, 2, r-10, 1, 8, 1);
      } else if(col[c] == "R"){
        rghost = new redGhost(c-15, 0.5, r-10.5);
      } else if (col[c] == "A"){
        aghost = new aquaGhost(c-15, 0.5, r-10.5);
      } else if(col[c] == "P"){
        pghost = new pinkGhost(c-21.5, 0.5, r-10.5);
      } else if (col[c] == "X"){
        moving.push(new Block(c-16, 4, r-10, 1, 6, 1));
      }  
    }
  }

  

  loop();
})

function loop(){

  rghost.fly();
  aghost.fly();
  pghost.fly();

  if(first && second && third){
    wall.setAttribute("opacity", 0);
    r.setAttribute("opacity",0);
    a.setAttribute("opacity",0);
    p.setAttribute("opacity",0);
  }
  


  for (let block of moving){
    block.moving();
  }
  
  
  window.requestAnimationFrame( loop );
}

// camera properties
