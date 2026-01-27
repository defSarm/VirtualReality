let scene,handslot;
let con1=[], con2=[], con3=[], con4=[], con5=[];
let conveyoritems = [con1,con2,con3,con4,con5];
let hands = [];
let p1 = [], p2 = [];
let run =false;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    camera = document.querySelector("a-camera");
    handslot = document.querySelector("#handslot");
    trashcan = document.querySelector("#trashcan");

    // plates
    plate1 = document.querySelector("#plate1");
    plate2 = document.querySelector("#plate2");

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
    
    if (con1.length<5 || con2.length<5 || con3.length<5 || con4.length<5 || con5.length<5){
        while (conveyNum == 1){
            if(con1.length<5){
            
                return true;
            } else{
                conveyNum++;
            }
        }
        while (conveyNum == 2){
            if(con2.length<5){

                return true;
            } else{
                conveyNum++;
            }
        }
        while (conveyNum == 3){
            if(con3.length<5){
                return true;
            } else{
                conveyNum++;
            }
        }
        while (conveyNum == 4){
            if(con4.length<5){

                return true;
            } else{
                conveyNum++;
            }
        }
        while (conveyNum == 5){
            if(con5.length<5){

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
function listadd(item){
    if (conveyNum==1){
        con1.push(item);
        item.array = con1;
    }
    if (conveyNum==2){
        con2.push(item);
        item.array=con2;
    }
    if (conveyNum==3){
        con3.push(item);
        item.array=con3;
    }
    if (conveyNum==4){
        con4.push(item);
        item.array=con4;
    }
    if (conveyNum==5){
        con5.push(item);
        item.array=con5;
    }
}

// perhaps work with this
function listpop(item){
    item.array.shift();
    
}

function plateadd(plate, item){
    if(plate == p1){
        item.x=0;
    } else{
        item.x =2;
    }

    if (plate.length==0){
        if (item.id == "topbun"){
            item.setAttribute("position",{x:item.x, y:0.15, z:6.75});
        }
        else{
            item.setAttribute("position",{x:item.x,y:1.4,z:6.75});
        }
    }
    if (plate.length==1){
        if (item.id == "topbun"){
            item.setAttribute("position",{x:item.x, y:0.25, z:6.75});
        }
        else{
            item.setAttribute("position",{x:item.x,y:1.4,z:6.75});
        }
    }
}

function plateremove(plate, item){
    
}

function loop(){
  // skip by 3 x
    item = new Conveyor(-8);
    item.conveyorfill();

    trashcan.addEventListener("click", ()=>{
        if (hands.length==1){
            hands.pop();
            topbun1.setAttribute("position",{x:topbun1.x,y:-10,z:topbun1.z});
            pickles1.setAttribute("position", {x:pickles1.x,y:-10,z:pickles1.z});
            botbun1.setAttribute("opacity",0);
            cheese1.setAttribute("opacity",0);
            patty1.setAttribute("opacity",0);
        }
    });

    plate1.addEventListener("click", ()=>{
        if (hands.length==1 && p1.length<1){
            plateadd(p1, hands[0]);
            p1.push(hands[0]);
            
            // delete item from hands
            topbun1.setAttribute("position",{x:topbun1.x,y:-10,z:topbun1.z});
            pickles1.setAttribute("position", {x:pickles1.x,y:-10,z:pickles1.z});
            botbun1.setAttribute("opacity",0);
            cheese1.setAttribute("opacity",0);
            patty1.setAttribute("opacity",0);


            hands.pop();
        }
    });

    plate2.addEventListener("click", ()=>{
        if (hands.length==1 && p2.length<1){
            plateadd(p2, hands[0]);
            p2.push(hands[0]);
            
            // delete item from hands
            topbun1.setAttribute("position",{x:topbun1.x,y:-10,z:topbun1.z});
            pickles1.setAttribute("position", {x:pickles1.x,y:-10,z:pickles1.z});
            botbun1.setAttribute("opacity",0);
            cheese1.setAttribute("opacity",0);
            patty1.setAttribute("opacity",0);


            hands.pop();
        }
    });

    if(con1.length==5 && con2.length==5 && con3.length==5 && con4.length==5 && con5.length==5){
        run = true
    }

    for (food of conveyoritems){    
        
        for (items of food){
            if (run){
                if(food.indexOf(items)==0 && items.object3D.position.z<-0.8){
                    items.object3D.position.z = -0.8;
                    //console.log("running");
                }
                if(food.indexOf(items)==1 && items.object3D.position.z<-2.4){
                    items.object3D.position.z = -2.4;
                    //console.log("running2");
                }
                if(food.indexOf(items)==2 && items.object3D.position.z<-4){
                    items.object3D.position.z = -4;
                    //console.log("running3");
                }
                if(food.indexOf(items)==3 && items.object3D.position.z<-5.4){
                    items.object3D.position.z = -5.4;
                    //console.log("running4");
                }
                if(food.indexOf(items)==4 && items.object3D.position.z<-6.8){
                    items.object3D.position.z = -6.8;
                    //console.log("running5");
                }
            } 
        }
        
    }
    window.requestAnimationFrame( loop );
}