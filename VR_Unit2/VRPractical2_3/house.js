class House{
    constructor(x, z){
        this.obj = document.createElement("a-entity");

        // house
        let base = document.createElement("a-entity");
        let roof = document.createElement("a-entity");

        // house base
        let frontwall = document.createElement("a-box");
        frontwall.setAttribute("depth", 0.1);
        frontwall.setAttribute("height", 3);
        frontwall.setAttribute("width", 5);
        frontwall.setAttribute("position", {x:0, y:1.5, z:0});

        let leftwall = document.createElement("a-box");
        leftwall.setAttribute("depth", 0.1);
        leftwall.setAttribute("height", 3);
        leftwall.setAttribute("width", 5);
        leftwall.setAttribute("position", {x:-2.5, y:1.5, z:-2.5});
        leftwall.setAttribute("rotation", "0 90 0");

        let rightwall = document.createElement("a-box");
        rightwall.setAttribute("depth", 0.1);
        rightwall.setAttribute("height", 3);
        rightwall.setAttribute("width", 5);
        rightwall.setAttribute("position", {x:2.5, y:1.5, z:-2.5});
        rightwall.setAttribute("rotation", "0 -90 0");

        let backwall = document.createElement("a-box");
        backwall.setAttribute("depth", 0.1);
        backwall.setAttribute("height", 3);
        backwall.setAttribute("width", 5);
        backwall.setAttribute("position", {x:0, y:1.5, z:-5});

        base.append(frontwall);
        base.append(leftwall);
        base.append(rightwall);
        base.append(backwall);

        // house roof
        let frontTri = document.createElement("a-triangle");
        frontTri.setAttribute("side", "double");
        frontTri.setAttribute("position", "0 0 2");
        frontTri.setAttribute("scale", "10 1 1");

        let leftRoof = document.createElement("a-box");
        leftRoof.setAttribute("rotation", "0 0 -80");
        leftRoof.setAttribute("width", 0.1);
        leftRoof.setAttribute("depth", 5);
        leftRoof.setAttribute("height", 5.1);
        leftRoof.setAttribute("position", "-2.5 0 0")

        let rightRoof = document.createElement("a-box");
        rightRoof.setAttribute("rotation", "0 0 80");
        rightRoof.setAttribute("width", 0.1);
        rightRoof.setAttribute("depth", 5);
        rightRoof.setAttribute("height", 5.1);
        rightRoof.setAttribute("position", "2.5 0 0")

        let backTri = document.createElement("a-triangle");
        backTri.setAttribute("side", "double");
        backTri.setAttribute("position", "0 0 -2");
        backTri.setAttribute("scale", "10 1 1");

        roof.append(frontTri);
        roof.append(backTri);
        roof.append(leftRoof);
        roof.append(rightRoof);
        roof.setAttribute("position", "0 3.5 -2.5");
        roof.setAttribute("scale", "0.5 1 1.25");


        this.obj.append(base);
        this.obj.append(roof);

        this.obj.setAttribute("scale", "0.25 0.5 0.5");
        this.obj.setAttribute("position", {x:x, y:-0.5, z:z});

        scene.append(this.obj);

    }  
} 