(function(){
    var canvas = document.createElement("canvas"),
        c = canvas.getContext("2d"),
        canvasWidth = window.innerWidth,
        canvasHeight = window.innerHeight,
        list = [];
    
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
    
    document.body.insertBefore(canvas, flower);
    
    var 
        posX = canvas.width / 2,
        posY = canvas.height / 2,
        vx = 1,
        vy = 1,
        gravity = 1
    ;
    
    function cleanCanvas() {
        c.globalCompositeOperation = "soft-light";
        c.fillStyle = "#fff";
        c.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    function flip1() {
        return Math.floor(Math.random()*2) == 1 ? 1 : -1;
    }

    function rnd(min, max) {
        var num = Math.floor(Math.random() * max) + min + Math.random();

        console.log("num", num);
        if (min < 0) {
            num *= flip1();
        }

        return num;
    }

    function Particle(color) {
        this.size = rnd(1, 10);
        this.visualSizeX = 11*(this.size/2);
        this.visualSizeY = 9*(this.size/2);
        this.x = (canvas.width / 2) - (this.visualSizeX / 2);
        this.y = (canvas.height / 2) - (this.visualSizeY / 2);
        this.vx = rnd(-vx, vx);
        this.vy = rnd(-vy, vy);
        this.color = color || "#0f0";
        this.tintImage = function (x, y) {
            // create offscreen buffer, 
            var buffer = document.createElement('canvas');
            buffer.width = this.visualSizeX;
            buffer.height = this.visualSizeY;
            bx = buffer.getContext('2d');

            // fill offscreen buffer with the tint color
            bx.fillStyle = this.color;
            bx.fillRect(0,0,buffer.width,buffer.height);

            // destination atop makes a result with an alpha channel identical to fg, but with all pixels retaining their original color *as far as I can tell*
            bx.globalCompositeOperation = "destination-atop";
            bx.imageSmoothingEnabled = false;
            bx.drawImage(artull,0,0, this.visualSizeX, this.visualSizeY);


            // to tint the image, draw it first
            this.drawArtull(buffer, x, y, this.visualSizeX, this.visualSizeY);
        };
        this.drawArtull = function (buffer, x, y) {
            c.imageSmoothingEnabled = false;
            c.drawImage(artull, x, y, this.visualSizeX, this.visualSizeY);

            //then set the global alpha to the amound that you want to tint it, and draw the buffer directly on top of it.
            c.globalAlpha = 0.5;
            c.drawImage(buffer, x, y, this.visualSizeX, this.visualSizeY);
        };
    }

    Particle.prototype.draw = function () {
        if (((this.y + this.visualSizeY) >= canvasHeight)) {
            this.vy = -this.vy;
            this.y = canvasHeight - this.visualSizeY;
        }
        
        if (this.y <= 0) {
            this.vy = -this.vy;
            this.y = 0;
        }
        
        if (((this.x + this.visualSizeX) >= canvasWidth)) {
            this.vx = -this.vx;
            this.x = canvasWidth - this.visualSizeX;
        }
        
        if (this.x <= 0) {
            this.vx = -this.vx;
            this.x = 0;
        }

        this.x += this.vx;
        this.y += this.vy;
        
//         this.size += this.vx;

//         this.vx += 1;
//         this.vy += 1;
        c.globalCompositeOperation = "source-over";
//         c.fillStyle = this.color;
//         c.fillRect(this.x, this.y, this.size, this.size);
        this.tintImage(this.x, this.y);
    };
    
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
    
    
    
    function Canon() {
        list.push(new Particle("#f00"));
        list.push(new Particle("#ff0"));
        list.push(new Particle("#0f0"));
        list.push(new Particle("#0ff"));
        list.push(new Particle("#00f"));
        list.push(new Particle("#f0f"));
    }

    var shooting = 5;
    while(shooting--) {
        Canon();
    }
    
    
    run();
})();