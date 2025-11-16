class Block{
    constructor (x, y, z, w, h, d){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.05;

        this.w = w;
        this.h = h;
        this.d = d;

        this.block = document.createElement("a-box");

        this.block.setAttribute("width", this.w);
        this.block.setAttribute("height", this.h);
        this.block.setAttribute("depth", this.d);
        this.block.setAttribute("position", {x:this.x, y:this.y, z:this.z});

        this.block.setAttribute("src", "#grass");
        this.block.setAttribute("repeat", "1 5 1");

        scene.append(this.block);
    }

    moving(){
        this.y += this.dy;
        if (this.y > 9 || this.y < 3){
            this.dy = -this.dy;
        }

        this.block.setAttribute("src", "#brickwall");
        this.block.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }

}


