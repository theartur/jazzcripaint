(function(){
    var canvas = document.createElement("canvas"),
        c = canvas.getContext("2d"),
        canvasWidth = window.innerWidth,
        canvasHeight = window.innerHeight,
        list = [],
        ControlHandler = {};
    
    var artull = new Image();
    artull.src = 'skull.png';
    
    canvas.style.position = "absolute";
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style.background = "#fff";
    canvas.style.imageRendering = "pixelated";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.onresize = function () {
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
    };
    
    window.onkeydown = function (e) {
        var pressed = e.keyCode;
        
        if (pressed == 37) ControlHandler.leftPressed  && ControlHandler.leftPressed ();
        if (pressed == 38) ControlHandler.upPressed    && ControlHandler.upPressed   ();
        if (pressed == 39) ControlHandler.rightPressed && ControlHandler.rightPressed();
        if (pressed == 40) ControlHandler.downPressed  && ControlHandler.downPressed ();
    };
    
    ControlHandler.leftPressed = function () {
//             list[0].accelerate(-1, 0);
                window.globalAccelerate(-1, 0);
    };
    
    ControlHandler.upPressed = function () {
//             list[0].accelerate(0, -1);
                window.globalAccelerate(0, -1);
    };
    
    ControlHandler.rightPressed = function () {
//             list[0].accelerate(1, 0);
                window.globalAccelerate(1, 0);
    };
    
    ControlHandler.downPressed = function () {
//             list[0].accelerate(0, 1);
                window.globalAccelerate(0, 1);
    };
    
    window.globalAccelerate = function (x, y) {
        for (var i = 0; i < list.length; i++) {
            list[i].accelerate(x, y);
        }
    };
    
    document.body.insertBefore(canvas, flower);
    
    var 
        posX = canvas.width / 2,
        posY = canvas.height / 2,
        vx = 1,
        vy = 1,
        gravity = 1
    ;
    
    function cleanCanvas() {
        // "hue"
        // "saturation"
        // "color"
        // "overlay"
        // "soft-light"
        // "destination-over"
        // "multiply"
        // "darken"
        // "color-burn"
        // 
        // 
        c.globalCompositeOperation = "multiply";
        c.fillStyle = "#fff";
        c.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    function flip1() {
        return Math.floor(Math.random()*2) == 1 ? 1 : -1;
    }

    function rnd(min, max) {
        var num = Math.floor(Math.random() * max) + min + Math.random();

        if (min < 0) {
            num *= flip1();
        }

        return num;
    }
    
    function rndGCO() {
        var gcos =  [
            "source-over",
            "source-in",
            "source-out",
            "source-atop",
            "destination-over",
            "destination-in",
            "destination-out",
            "destination-atop",
            "lighter",
            "copy",
            "xor",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity"
        ];
        
        return gcos[~~rnd(0, gcos.length-1)];
    }
    
    function rndPallete() {
        var palletes =  [
            ["aaff00", "ffaa00", "ff00aa", "aa00ff", "00aaff"],
            ["69d2e7", "a7dbd8", "e0e4cc", "f38630", "fa6900"], 
            ["fe4365", "fc9d9a", "f9cdad", "c8c8a9", "83af9b"], 
            ["ecd078", "d95b43", "c02942", "542437", "53777a"], 
            ["cff09e", "a8dba8", "79bd9a", "3b8686", "0b486b"], 
            ["556270", "4ecdc4", "c7f464", "ff6b6b", "c44d58"], 
            ["774f38", "e08e79", "f1d4af", "ece5ce", "c5e0dc"], 
            ["e8ddcb", "cdb380", "036564", "033649", "031634"], 
            ["d1f2a5", "effab4", "ffc48c", "ff9f80", "f56991"], 
            ["490a3d", "bd1550", "e97f02", "f8ca00", "8a9b0f"], 
            ["594f4f", "547980", "45ada8", "9de0ad", "e5fcc2"], 
            ["00a0b0", "6a4a3c", "cc333f", "eb6841", "edc951"], 
            ["e94e77", "d68189", "c6a49a", "c6e5d9", "f4ead5"], 
            ["3fb8af", "7fc7af", "dad8a7", "ff9e9d", "ff3d7f"], 
            ["d9ceb2", "948c75", "d5ded9", "7a6a53", "99b2b7"], 
            ["ffffff", "cbe86b", "f2e9e1", "1c140d", "cbe86b"], 
            ["efffcd", "dce9be", "555152", "2e2633", "99173c"], 
            ["343838", "005f6b", "008c9e", "00b4cc", "00dffc"], 
            ["413e4a", "73626e", "b38184", "f0b49e", "f7e4be"], 
            ["99b898", "fecea8", "ff847c", "e84a5f", "2a363b"], 
            ["ff4e50", "fc913a", "f9d423", "ede574", "e1f5c4"], 
            ["554236", "f77825", "d3ce3d", "f1efa5", "60b99a"], 
            ["351330", "424254", "64908a", "e8caa4", "cc2a41"], 
            ["00a8c6", "40c0cb", "f9f2e7", "aee239", "8fbe00"], 
            ["655643", "80bca3", "f6f7bd", "e6ac27", "bf4d28"], 
            ["a79c8e", "f8ecc9", "f1bbba", "eb9f9f", "6b5344"], 
            ["ff4242", "f4fad2", "d4ee5e", "e1edb9", "f0f2eb"], 
            ["8c2318", "5e8c6a", "88a65e", "bfb35a", "f2c45a"], 
            ["fad089", "ff9c5b", "f5634a", "ed303c", "3b8183"], 
            ["d3e2b6", "c3dbb4", "aaccb1", "87bdb1", "68b3af"], 
            ["ff9900", "424242", "e9e9e9", "bcbcbc", "3299bb"], 
            ["d1e751", "ffffff", "000000", "4dbce9", "26ade4"], 
            ["5d4157", "838689", "a8caba", "cad7b2", "ebe3aa"], 
            ["bcbdac", "cfbe27", "f27435", "f02475", "3b2d38"]
        ];
        
        return palletes[~~rnd(0, palletes.length-1)];
    }

    function Particle(color, center) {
        list.push(this);
        this.index = list.length - 1;
        this.size = rnd(1, 10);
        this.width = 11*(this.size);
        this.height = 9*(this.size);
        this.x = ((center && center.x) || (canvas.width / 2)) - (this.width / 2);
        this.y = ((center && center.y) || (canvas.height / 2)) - (this.height / 2);
        
        console.log(" /----", this.x, this.y);
        
        this.vx = rnd(-vx, vx);
        this.vy = rnd(-vy, vy);
        this.maxVx = 2;
        this.maxVy = 2;
        this.color = color || "#0f0";
        
        this.destroy = function () {
            delete this;
        };
        
        this.accelerate = function (x, y) {
//             if (this.vx < this.maxVx) {
                this.vx += x;
//             } else {
//                 this.vx = this.maxVx;
//             }
            
//             if (this.vy < this.maxVy) {
                this.vy += y;
//             } else {
//                 this.vy = this.maxVy;
//             }
            
//             console.log(this.vx, this.vy);
        };

        this.collisionDetect = function () {
//             var Ax = this.x;
//             var Ay = this.y;
//             var AX = this.x + this.width;
//             var AY = this.y + this.height;
            
//             var listLength = list.length;
//             var observed;
//             var Bx, By, BX, BY;
//             var cx, cy, cX, cY;
//             for (var i = 0; i < listLength; i++) {
//                 observed = list[i];
//                 Bx = observed.x;
//                 By = observed.y;
//                 BX = observed.x + observed.width;
//                 BY = observed.y + observed.height;
            
//                 cx = Ax < Bx ? Bx : Ax;
//                 cX = AX < BX ? By : Ay;
//                 cy = Ay < By ? BX : AX;
//                 cY = AY < BY ? BY : AY;
                
//                 if ((cX - cx) > 0) {
//                     list[i].vx = -observed.vx;
//                 }
                
//                 if ((cY - cy) > 0) {
//                     list[i].vy = -observed.vy;
//                 }
//                 console.log("CxyXY", cx, cy, cX, cY);
//                 observed.vx = (cx + cX) > 0 ? observed.vx : -observed.vx;
//                 observed.vy = (cy + cY) > 0 ? observed.vy : -observed.vy;
//             };
            
//             cx = Ax < Bx ? Bx : Ax;
//             cy = Ay < By ? By : Ay;
//             cX = AX < BX ? BX : AX;
//             cY = AY < BY ? BY : AY;
        };
        this.tintImage = function (x, y) {
            // create offscreen buffer, 
            var buffer = document.createElement('canvas');
            buffer.width = this.width;
            buffer.height = this.height;
            bx = buffer.getContext('2d');

            // fill offscreen buffer with the tint color
            bx.fillStyle = this.color;
            bx.fillRect(0,0,buffer.width,buffer.height);

            // destination atop makes a result with an alpha channel identical to fg, but with all pixels retaining their original color *as far as I can tell*
            bx.globalCompositeOperation = "destination-in" || "darken" || "overlay" || "destination-atop";
            bx.imageSmoothingEnabled = false;
            bx.drawImage(artull,0,0, buffer.width, buffer.height);

            // cache img
//             if ( ! this.rendered) {
//                 this.rendered = buffer;
//             }

            // to tint the image, draw it first
            this.drawArtull(buffer, x, y, buffer.width, buffer.height);
        };
        this.drawArtull = function (img, x, y, width, height) {
            c.imageSmoothingEnabled = false;
//             c.drawImage(artull, x, y, width, height);

            //then set the global alpha to the amound that you want to tint it, and draw the buffer directly on top of it.
            c.globalAlpha = 0.5;
            c.drawImage(img, x, y, width, height);
        };
        this.edgeDetect = function () {
            function hit() {
                
            }
            
            if (((this.y + this.height) >= canvasHeight)) {
                this.vy = -this.vy;
                this.y = canvasHeight - this.height;
                hit();
            }

            if (this.y <= 0) {
                this.vy = -this.vy;
                this.y = 0;
                hit();
            }

            if (((this.x + this.width) >= canvasWidth)) {
                this.vx = -this.vx;
                this.x = canvasWidth - this.width;
                hit();
            }

            if (this.x <= 0) {
                this.vx = -this.vx;
                this.x = 0;
                hit();
            }
        };

        this.draw = function () {
            this.edgeDetect();

            this.x += this.vx;
            this.y += this.vy;

            this.collisionDetect();

    //         this.size += this.vx;

    //         this.vx += 1;
    //         this.vy += 1;
            c.globalCompositeOperation = "source-over";
    //         c.fillStyle = this.color;
    //         c.fillRect(this.x, this.y, this.size, this.size);

            if (this.rendered) {
                this.drawArtull(this.rendered, this.x, this.y, this.width, this.height);
            } else {
                this.tintImage(this.x, this.y);
            }
        };
    }
    
    function draw() {
        var max = list.length;
        for (var i = 0; i < max; i++) {
            list[i].draw();
        }
    }

    function run(){
        cleanCanvas();
        
        draw();
        
        requestAnimationFrame(run);
    }
    
    var colors = rndPallete();
    
    window.onclick = function (e) {
        console.log(e);
        colors = rndPallete();
        list = [];
//         var max = list.length;
//         for (var i = 0; i < max; i++) {
//             list[0].destroy();
//             list.splice(0, 1);
//         }
        
        var shooting = 5;
        while(shooting--) {
            Canon(colors, { x:e.clientX, y:e.clientY });
        }
    };
    
    function Canon(colors, center) {
        for (var i = 0; i < colors.length; i++) {
            console.log("@@>>>", i, colors[i]);
            list.push(new Particle("#" + colors[i], center));
        }
//         list.push(new Particle("#AAFF00"));
//         list.push(new Particle("#FFAA00"));
//         list.push(new Particle("#FF00AA"));
//         list.push(new Particle("#AA00FF"));
//         list.push(new Particle("#00AAFF"));
    }

    var shooting = 5;
    while(shooting--) {
        Canon(colors);
    }
    
    
    run();
})();