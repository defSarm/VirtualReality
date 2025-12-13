let rnd = (l,u) => Math.random() * (u-l) + l
let value, scene,camera,health=100,bullet, enemies = [], ammo_boxes = [], ammo_count = 3, enemy_killed = 0,timer=100;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  ammobox = document.querySelector("#ammobox");
  mech = document.querySelector("#mech-1");
  timetext=document.querySelector("#timer");
  killed = document.querySelector("#killed");
  generator = document.querySelector("#gen");
  genhealth=document.querySelector("#genhealth");

  text = document.querySelector("#text");

  window.addEventListener("keydown",function(e){
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
      
    }

    

    
    
  })


  //enemy1 = new Enemy(-14, -26);
  //enemy2 = new Enemy(10, -26);

  //enemy1 = new Enemy(22, 10);
  //enemy2 = new Enemy(22, -16);

  //enemy1 = new Enemy(12, 18);
  //enemy2 = new Enemy(-10, 18);

  //enemy1 = new Enemy(-22, 7);
  //enemy2 = new Enemy(-22, -16);

  
  
  
  setTimeout(loop,100);
  setTimeout(countdown,100);
})

function loop(){
  //enemy1.walk();
  //enemy2.walk();

  //enemy logic


  if (timer<=95 && enemies.length<4){
    value = Math.round(rnd(1,8));

    if (value == 1){
      enemies.push(new Enemy(-14, -26));
    } else if (value==2){
      enemies.push(new Enemy(10, -26));
    } else if (value == 3){
      enemies.push(new Enemy(22, 10));
    } else if (value == 4){
      enemies.push(new Enemy(22, -16));
    } else if (value == 5){
      enemies.push(new Enemy(12, 18));
    } else if (value == 6){
      enemies.push(new Enemy(-10, 18));
    } else if (value == 7){
      enemies.push(new Enemy(-22, 7));
    } else if (value == 8){
      enemies.push(new Enemy(-22, -16));
    }
     
  }

  // bullet logic
  if(bullet){
    bullet.fire();
  }


  for (let enemy of enemies){
    enemy.walk();
    if (bullet){
      if (distance(enemy.obj,bullet.obj)<2){
        bullet.obj.setAttribute("position",{x:0,y:-19000,z:0});
        enemy.obj.setAttribute("position", {x:0,y:-19000,z:0});
        enemies.splice(enemies.indexOf(enemy),1);
        enemy_killed+=1;
      }
      
    }

    if (distance(enemy.obj,generator)<2.5){
      health-=0.05;
    }

  }


  //ammo logic
  if (timer <= 95 && ammo_boxes.length < 4){
      for (let i = 0; i<=3;i++){
        ammo_boxes.push(new Ammo(rnd(-20,20), rnd(-20, 20)));
      }
  }

  for (let ammo of ammo_boxes){
    ammo.rotate();
    if (distance(ammo.obj,camera)<1.7){
      ammo_count+=3;
      ammo.obj.setAttribute("position",{x:0, y:-1000,z:0});
      ammo_boxes.splice(ammo_boxes.indexOf(ammo),1);
      
    }
  }

  
 
  timetext.setAttribute("value",`Time Left:${timer}`);
  ammo.setAttribute("value",`Ammo: ${ammo_count}`);
  killed.setAttribute("value",`Enemies Killed: ${enemy_killed}`);
  genhealth.setAttribute("value",`Generator Health: ${health}`);
  

  if (health<=0 && timer!==0){
    enemies=[];
    text.setAttribute("value", `YOU LOSE!`);
  }
  if (timer<=100 && timer>=95){
    text.setAttribute("value",`Protect the generator near your truck!`) 
  }

  if (health!==0 && timer == 0){
    enemies=[];
    text.setAttribute("value",`YOU WIN!!`);
  }
  

  window.requestAnimationFrame(loop);
}

function countdown(){
  timer-=1;

  setTimeout(countdown,1000);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}