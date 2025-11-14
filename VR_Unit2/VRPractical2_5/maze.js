class Block{
    constructor (x, y, z, w, h, d){
        this.x = x;
        this.y = y;
        this.z = z;

        this.w = w;
        this.h = h;
        this.d = d;

        this.block = document.createElement("a-box");

        this.block.setAttribute("width", this.w);
        this.block.setAttribute("height", this.h);
        this.block.setAttribute("depth", this.d);
        this.block.setAttribute("position", {x:this.x, y:this.y, z:this.z});

        scene.append(this.block);
    }


}