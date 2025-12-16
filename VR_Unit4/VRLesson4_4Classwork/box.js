class Box{
 constructor(x,y,z){
   this.obj = document.createElement("a-box");
   /* Challenge
      Associate the fireball sound with the box and 
      enable it to play forever
   */
    this.boom = false;

   /* Challenge
      Add an event listener that sets boom to true and
      plays the fireball sound effect
   */
    this.obj.setAttribute("color","red");
    this.obj.addEventListener("click",()=>{
      this.boom = true;
      
    });

   this.obj.setAttribute("position",{x:x,y:y,z:z});
   scene.append(this.obj);
 } 
 blast(){
   if(this.boom){
     this.obj.object3D.position.y += 0.02;
     this.obj.components.sound.playSound();
   }
 }
}