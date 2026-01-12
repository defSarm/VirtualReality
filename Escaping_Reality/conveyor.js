let conveyNum;
let itemNum;
let conveyors = [1, 4, 7, 10, 13];
let limit1=0, limit2=0, limit3=0, limit4=0, limit5 = 0;

class Conveyor{
    constructor(x,z){
        this.x = x;
        this.z = z;
        this.dz=0.1;

        this.topbun = topbun.cloneNode(true);
        this.botbun = botbun.cloneNode(true);
        this.pickles = pickles.cloneNode(true);
        this.patty = patty.cloneNode(true);
        this.cheese = cheese.cloneNode(true);

        //this.pickles.setAttribute("position",{x:1, y:1.25, z:-8});
        //this.topbun.setAttribute("position", {x:this.x, y:0, z:this.z});
        //this.botbun.setAttribute("position", {x:this.x, y:0, z:this.z});
        //this.pickles.setAttribute("position", {x:-3, y:0, z:0});
        //this.patty.setAttribute("position", {x:this.x, y:0, z:this.z});
        //this.cheese.setAttribute("position", {x:this.x, y:0, z:this.z});
        //scene.append(this.pickles)
    }

    randomize(){
        conveyNum = rnd(0,5);
        itemNum = rnd(1,6);
        
        if (itemNum == 1 && limit1<=5){
            
            this.topbun.setAttribute("position",{x:conveyors[conveyNum], y:0, z:this.z});
            scene.append(this.topbun);
            limit1++;
        }

        if (itemNum == 2 && limit2<=5){
            this.botbun.setAttribute("position",{x:conveyors[conveyNum], y:1.25, z:this.z});
            scene.append(this.botbun);
            limit2++;
        }

        if (itemNum == 3 && limit3<=5){
            this.pickles.setAttribute("position",{x:conveyors[conveyNum], y:1.25, z:this.z});
            scene.append(this.pickles);
            limit3++;
        }

        if (itemNum == 4 && limit4<=5){
            this.patty.setAttribute("position",{x:conveyors[conveyNum], y:1.25, z:this.z});
            scene.append(this.patty);
            limit4++;
        }

        if (itemNum == 5 && limit5<=5){
            this.cheese.setAttribute("position",{x:conveyors[conveyNum], y:1.25, z:this.z});
            scene.append(this.cheese);
            limit5++;
        } 
        
    
    }

}