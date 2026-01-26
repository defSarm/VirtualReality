let scene,handslot;
let con1=[], con2=[], con3=[], con4=[], con5=[];
let conveyoritems = [con1,con2,con3,con4,con5];
let hands = [];

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    camera = document.querySelector("a-camera");
    handslot = document.querySelector("#handslot");

    //handslot items
    topbun1 = document.querySelector("#topbun1");
    botbun1 = document.querySelector("#botbun1");
    patty1 = document.querySelector("#patty1");
    cheese1 = document.querySelector("#cheese1");
    pickles1 = document.querySelector("#pickles1");

    topbun = document.querySelector("#topbun");
    botbun = document.querySelector("#botbun");
    patty = document.querySelector("#patty");
    pickles = document.querySelector("#pickles");
    cheese = document.querySelector("#cheese");
    
    setTimeout(loop, 1000);
})

// function checks if the conveyor is full or not and continues to check
function conveyorcheck(){
    if (limit1<5 || limit2<5 || limit3<5 || limit4<5 || limit5<5){
        while (conveyNum == 1){
            if(limit1<5){
                limit1++;
                return true;
            } else{
                conveyNum++;
            }
        }
        while (conveyNum == 2){
            if(limit2<5){
                limit2++;
                return true;
            } else{
                conveyNum++;
            }
        }
        while (conveyNum == 3){
            if(limit3<5){
                limit3++;
                return true;
            } else{
                conveyNum++;
            }
        }
        while (conveyNum == 4){
            if(limit4<5){
                limit4++;
                return true;
            } else{
                conveyNum++;
            }
        }
        while (conveyNum == 5){
            if(limit5<5){
                limit5++;
                return true;
            } else{
                conveyNum=1;
            }
        }
    }
    else{
        return false;
    }
}

// function puts all items into an array of arrays
function list(item){
    if (conveyNum==1){
        con1.push(item);
    }
    if (conveyNum==2){
        con2.push(item);
    }
    if (conveyNum==3){
        con3.push(item);
    }
    if (conveyNum==4){
        con4.push(item);
    }
    if (conveyNum==5){
        con5.push(item);
    }
}

function loop(){
  // skip by 3 x
    item = new Conveyor(-8);
    
    

    for (food of conveyoritems){
    
        if (food.length==5){
            
            for (items of food){
                

                if(food.indexOf(items)==food.length-1 && items.object3D.position.z<-0.8){
                    items.object3D.position.z = -0.8;
                    //console.log("running");
                }
                if(food.indexOf(items)==food.length-2 && items.object3D.position.z<-2.4){
                    items.object3D.position.z = -2.4;
                    //console.log("running2");
                }
                if(food.indexOf(items)==food.length-3 && items.object3D.position.z<-4){
                    items.object3D.position.z = -4;
                    //console.log("running3");
                }
                if(food.indexOf(items)==food.length-4 && items.object3D.position.z<-5.4){
                    items.object3D.position.z = -5.4;
                    //console.log("running4");
                }
                if(food.indexOf(items)==food.length-5 && items.object3D.position.z<-6.8){
                    items.object3D.position.z = -6.8;
                    //console.log("running5");
                }
            }
        }
    }
    window.requestAnimationFrame( loop );
}

    
    
  
    
    

