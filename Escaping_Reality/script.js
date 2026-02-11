let scene,handslot,capacity=0,served=true,count=0,clickable=true,ordercomplete=false, orderreaction;
let people = [];
let con1=[], con2=[], con3=[], con4=[], con5=[];
let conveyoritems = [con1,con2,con3,con4,con5];
let hands = [];
let order = [];
let p1 = [], p2 = [], sp =[];
let run=false,hover1=false,hover2=false,hover3 =false;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    camera = document.querySelector("a-camera");
    handslot = document.querySelector("#handslot");
    trashcan = document.querySelector("#trashcan");

    // eyebrows for reaction
    eb1l = document.querySelector("#eyebrowleft1");
    eb1r = document.querySelector("#eyebrowright1");
    eb2l = document.querySelector("#eyebrowleft2");
    eb2r = document.querySelector("#eyebrowright2");
    eb3l = document.querySelector("#eyebrowleft3");
    eb3r = document.querySelector("#eyebrowright3");

    // plates
    plate1 = document.querySelector("#plate1");
    plate2 = document.querySelector("#plate2");
    servingplate = document.querySelector("#serving");
    bell = document.querySelector("#bell");

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
    
    // customers
    customer1 = document.querySelector("#customer1");
    customer2 = document.querySelector("#customer2");
    customer3 = document.querySelector("#customer3");

    customerburger = document.querySelector("#customerburger");

    

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

// removal of items from lists
function listpop(item){
    item.array.shift();
    
}

// add or stack items onto plates
function plateadd(plate, item){

    if(plate == p1){
        item.x=0;
    } else if (plate == p2){
        item.x =2;
    } else{ //serving plate
        item.x=-5.6;
    }

    if (plate.length==0){
        if (item.id == "topbun"){
            item.setAttribute("position",{x:item.x, y:0.15, z:6.75});
        }
        else{
            item.setAttribute("position",{x:item.x,y:1.4,z:6.75});
        }
    }

    // stackable plates
    if (plate == sp){
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
                item.setAttribute("position",{x:item.x, y:0.23, z:6.75});
            }
            else{
                item.setAttribute("position",{x:item.x,y:1.48,z:6.75});
            }
        } 

        if (plate.length==2){
            if (item.id == "topbun"){
                item.setAttribute("position",{x:item.x, y:0.33, z:6.75});
            }
            else{
                item.setAttribute("position",{x:item.x,y:1.58,z:6.75});
            }
        } 

        if (plate.length==3){
            if (item.id == "topbun"){
                item.setAttribute("position",{x:item.x, y:0.43, z:6.75});
            }
            else{
                item.setAttribute("position",{x:item.x,y:1.68,z:6.75});
            }
        } 

        if (plate.length==4){
            if (item.id == "topbun"){
                item.setAttribute("position",{x:item.x, y:0.53, z:6.75});
            }
            else{
                item.setAttribute("position",{x:item.x,y:1.78,z:6.75});
            }
        } 
    }
    
}

// remove items from plate
function plateremove(plate, item){

    if (plate.length>0){
        item.setAttribute("position", {x:0,y:-10,z:0});
        hands.push(item);
        plate.pop();
        if (item.id=="topbun"){

            topbun1.setAttribute("position",{x:topbun1.x,y:-1.25,z:topbun1.z});
        }
        else if(item.id=="botbun"){

            botbun1.setAttribute("opacity",1);
        }
        else if (item.id == "pickles"){

            pickles1.setAttribute("position", {x:pickles1.x,y:0,z:pickles1.z});
        }
        else if (item.id == "cheese"){

            cheese1.setAttribute("opacity",1);
        }
        else if (item.id == "patty"){

            patty1.setAttribute("opacity",1);
        }
        
    } 

}



// game loop
function loop(){
  // skip by 3 x
    item = new Conveyor(-8);
    item.conveyorfill();
    
    customerorder = new Menu(1)


    // customer logic 

    if (ready&& capacity<5){
        cstmr = new Customer(16,3);
    }

    for (let customer of spawnedcustomers){

        cstmr.move(customer,customer.object3D.position.z);
    }

    for (let customer of people){
        cstmr.enterline(customer);
        if (Math.round(customer.object3D.position.x)==-6 && served){
            customerorder.choose(ordercomplete);
            customerorder.display(ordercomplete);
            served=false;
        }
    }

    // confirm order matching
    bell.addEventListener("click",()=>{
        if (sp.length>=1 && order.length>=1 && clickable){
            clickable=false;
            for (let i = 0; i<sp.length;i++){
                if (sp[i].id==order[i] && sp.length==order.length){
                    count+=1;
                    
                }
            }
            if (count==order.length){
                
                orderreaction="good";
                count=0;
            } else if (!(count==order.length)){
                count = 0;
                orderreaction="bad";
            }
            cstmr.reaction(people[0], orderreaction);
            cstmr.exitline(people[0], sp);
            
        }
    });
    

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

    // serving plate (stackable) -- increase area

    servingplate.addEventListener("click", ()=>{
        if (hands.length == 1 && sp.length<5){
            plateadd(sp,hands[0]);
            sp.push(hands[0]);
            // delete item from hands
            topbun1.setAttribute("position",{x:topbun1.x,y:-10,z:topbun1.z});
            pickles1.setAttribute("position", {x:pickles1.x,y:-10,z:pickles1.z});
            botbun1.setAttribute("opacity",0);
            cheese1.setAttribute("opacity",0);
            patty1.setAttribute("opacity",0);
            hands.pop();
        }
    });

    servingplate.addEventListener("mouseenter", ()=>{
        hover3=true;
    });
    servingplate.addEventListener("mouseleave", ()=>{
        hover3=false;
    });
    

    // plate 1 (non stackable)
    
    plate1.addEventListener("click", ()=>{
        if (hands.length==1 && p1.length==0){
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

    plate1.addEventListener("mouseenter", ()=>{
        hover1=true;
    });
    plate1.addEventListener("mouseleave",()=>{
        hover1=false;
    });
    

    // plate 2 (non stackable)
    
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

    plate2.addEventListener("mouseenter", ()=>{
        hover2=true;
    });
    plate2.addEventListener("mouseleave", ()=>{
        hover2=false;
    });
    
    // picking up items ability
    window.addEventListener("keydown", function(e){
        //plate1
        if (e.key == "e" && hands.length==0 && p1.length==1 && hover1){
            plateremove(p1,p1[0]);
        }  

        //plate2
        if (e.key == "e" && hands.length==0 && p2.length==1 && hover2){
            plateremove(p2,p2[0]);
        } 

        if (e.key == "e" && hands.length==0 && sp.length<6 && hover3){
            plateremove(sp,sp.at(-1));
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