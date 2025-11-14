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
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx----xxx",
  "x---x--x---------x----x--------------------x-x",
  "x---x--x---------x----x--xxxxxxxxxxxxxxxxxxx-x",
  "x---x--xxxxxxxx--xxxxxx--x---x-------------x-x",
  "xxxxx--xxxxxxxx--------------x-------------x-x",
  "x---------------------------xx--xxxxxxxxxxxxxx",
  "x----------------xxxxx--xxxxxx--xxxxxxxxxxx--x",
  "xxxxxxx--xxxxxxxxx---------------------------x",
  "x-----x--x----------R------------------------x",
  "xxxxxxx--xxxxxxxxx--xxxxxxxxxxxxxxxxxxxx---xxx",
  "x-------------------x----------------------x-x",
  "x-------------------xxxxxx---xxxxxxxxxxxx--x-x",
  "x--xxxxxx--xxxxxxx--x----x---x----------x--x-x",
  "x--x----x--x-----x--xxxxxx---x----------x--x-x",
  "x--xxxxxxxxx-----x-------xxxxx--xxxxxx--x--x-x",
  "x----------x-----x--------------x----x--x--x-x",
  "x----------x-----x--xxxxx-------xxxxxxxxxxxx-x",
  "xxxxxxxxx--x-----x--x---xxxx--x-x----------x-x",
  "x-x-----x--xxxxxxx--xxx----x--x-x----------x-x",
  "x-x-----x--x----------xxxxxx--xxx--xxxxxx--x-x",
  "x-x--xxxx--x----------x----x-------x----x--x-x",
  "x-x--------x--xxxxxx--x----x-------x----x--x-x",
  "x-x--xxxxxxx--x----x--x--x-x--xxx--xxxxxxxxxxx",
  "x-x-----------x----x--x--x-x--x-x--x---------x",
  "x-x-----------x----x--x--x-x--x-x--x---------x",
  "x-x--xxxxxxx--xxxxxxxxx--xxxxxxxx--x--xxxxxxxx",
  "x-x--x---x-------------------------x---------x",
  "x-x--x---x---xxxxxxxxxxxxxxx--xxxxxx------x--x",
  "x-x--x---x---x----------------x-------xx--x--x",
  "x-x--xxxxx---xxxxxxxxxxxxxxxxxx-------xx--x--x",
  "x-x---------------------------xx--xx--xx--x--x",
  "x-x---------------------------x----x--xx--x--x",
  "x-xxxxxxxxx--xxxxxxx----xxxxxxxx---x--xx--x--x",
  "x---------x-----x--x----x---x--x---x--xx--x--x",
  "xxxxxxxxxxx--xxxx--x----x---x--x---x--xx--x--x",
  "x------------x-----x----x---x--x---x--xx--x--x",
  "x------------x-----x----xxxxx--xxxxx--xxx-x--x",
  "xxx----xxxx--xxxxxxx--------------------x----x",
  "x-x--xxxx-------------------------------x--xxx",
  "x-x--xxxx---------------xxxxxxxxxxxxx---x--xxx",
  "x-x------x--xxxxxxxx----x-----------xxxxx--xxx",
  "x-x------x--x------x----x------------------xxx",
  "xxxxxxxxxxxxxxxxxxxx----xxxxxxxxxxxxxxxxxxxxxx",
];


/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;
let red;
let rghost;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  red = document.querySelector("#red");

  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let col = row.split("");
    for (let c = 0; c<col.length;c++){
      if (col[c] == "x"){
        new Block(c-15, 1, r-10, 1, 1, 1);
      } else if(col[c] == "R"){
        rghost = new redGhost(c-15, 0.5, r-10.5, 90);

        
      } else if (col[c] == "Y"){
        new yellowGhost();
      }
    }
  }
  loop();
})

function loop(){

  rghost.fly();

  window.requestAnimationFrame( loop );
}

// camera properties
