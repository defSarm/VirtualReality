let spawnpoint, randomcustomer,ready=true, spawnposition;
let listofcustomers = [], spawnedcustomers = [];

class Customer{
    constructor(x, z){
        this.x = x;
        this.z = z;
        this.dz=0.1;
        this.dx=0.1;
        
        this.customer1 = customer1.cloneNode(true);
        this.customer2 = customer2.cloneNode(true);
        this.customer3 = customer3.cloneNode(true);
        spawnposition=this.z;
    
        listofcustomers=[this.customer1, this.customer2, this.customer3];

        // customer spawning
        spawnpoint = rnd(1,3);
        randomcustomer = rnd(0,3);

        if (spawnpoint == 1){
            this.z = -10;
            listofcustomers[randomcustomer].setAttribute("position", {x: 16, y:0.25, z:-10});
            listofcustomers[randomcustomer].setAttribute("rotation", {x: 0, y:0, z:0});
            ready=false;

            spawnedcustomers.push(listofcustomers[randomcustomer]);
            scene.append(listofcustomers[randomcustomer]);

        } else if (spawnpoint == 2){
            this.z=26;
            listofcustomers[randomcustomer].setAttribute("position", {x: 16, y:0.25, z:26});
            listofcustomers[randomcustomer].setAttribute("rotation", {x: 0, y:180, z:0});
            ready=false;

            spawnedcustomers.push(listofcustomers[randomcustomer]);
            scene.append(listofcustomers[randomcustomer]);
            
        }
    }

    move(person, pos){
        
        if (pos == -9.9){
            this.dz = 0.05;
        } else if (pos == 26.1){
            this.dz = -0.05;
        }

        if (!(Math.round(pos) == 14)){
            person.object3D.position.x=16;
            this.z+=this.dz;
        } else if (Math.round(pos) == 14){
            // allows for another customer to spawn and for capcity in the store to increase by one
            people.push(spawnedcustomers[0]);
            spawnedcustomers.pop();
            ready = true;
            capacity++;

            // begin moving into the store
            
            //rotation to face the doors
            if (this.dz == 0.05 && !(Math.round(person.object3D.position.x)==14)){

                person.setAttribute("rotation",{x:0, y:-90, z:0});
                

            } else if(this.dz == -0.05 && !(Math.round(person.object3D.position.x)==14)){
 
                person.setAttribute("rotation",{x:0, y:-90, z:0});
                
                
            }

            

        }


        person.setAttribute("position",{x:person.object3D.position.x,y:person.object3D.position.y,z:this.z});

    }

    enterline(person){
       
        // slight repositioning inside the store
        if (!(Math.round(person.object3D.position.x)==13) && !(Math.round(person.object3D.position.z)==9)){
            
            person.object3D.position.x+=-0.05;
        }
        if (Math.round(person.object3D.position.x)==13 && !(Math.round(person.object3D.position.z)==9)){
            person.setAttribute("rotation",{x:0,y:180,z:0});
            person.object3D.position.z+=-0.05;
        }

        // begin lineup
        if(Math.round(person.object3D.position.z)==9){

                // lineup
            if (people.indexOf(person)==0 && !(Math.round(person.object3D.position.x)==-6)){
                person.object3D.position.x+=-0.05;
            
            }
            if (people.indexOf(person)==1 && !(Math.round(person.object3D.position.x)==-4)){
                person.object3D.position.x+=-0.05;
            
            }

            if (people.indexOf(person)==2 && !(Math.round(person.object3D.position.x)==-2)){
                person.object3D.position.x+=-0.05;
            
            }

            if (people.indexOf(person)==3 && !(Math.round(person.object3D.position.x)==0)){
                person.object3D.position.x+=-0.05;
            
            }

            if (people.indexOf(person)==4 && !(Math.round(person.object3D.position.x)==2)){
                person.object3D.position.x+=-0.05;
            
            }


            if (Math.round(person.object3D.position.x)==-6){
                
                person.setAttribute("rotation",{x:0,y:180,z:0});
            } else{
                person.setAttribute("rotation",{x:0,y:-90,z:0});
            }
        }

        

        person.setAttribute("position",{x:person.object3D.position.x, y:0.2, z:person.object3D.position.z});
    }
    
    exitline(person, burger){
        for (let item of burger){
            customerburger.append(item);
        }
        customerburger.setAttribute("position",{x:person.object3D.position.x, y:1.5, z:person.object3D.position.z-1});
        console.log(customerburger);
    }

}