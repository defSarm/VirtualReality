let maze = [
  "-----xxxxxxxxxxxxxx---",
  "xxxxxx------------x---",
  "--------xxxxxxx---x---",
  "xxxxxx----x---x---x---",
  "-----x--xxxxxxxxxxxx--",
  "xxxxxx--x----------x--",
  "x----------xxxxxxxxx--",
  "x--xxxxx---x----------",
  "x--x-------x-xxxxxxx--",
  "x--x-------x-x-----x--",
  "x--xxxxxx--x-x--xxxx--",
  "x-------x--xxx--x-----",
  "x--xxxxxx-------xxxx--",
  "x------------------x--",
  "xxxxxxxxxx--xxxx--xx--",
  "---------x--x--xxxx---",
  "---------x--x---------",
  "----------------------",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
    }
  }


})