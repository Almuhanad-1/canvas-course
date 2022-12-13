/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 10;
const enemiesArr = [];
const spriteWidth = 293;
const spriteHeight = 155;
const staggerFrames = 2;




class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = './assets/enemy1.png';
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.frame = 0; 
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.size = Math.random() * 3 + 1;
        this.width = this.spriteWidth / this.size;
        this.height = this.spriteHeight / this.size;
        this.speed = Math.random() * 3 - 1.5;
        this.staggerFrames = Math.floor(Math.random() * 3 + 1);
        this.gameFrame = 0;
    }
    update() {
        if (this.gameFrame % this.staggerFrames === 0) {
            this.frame >= 5 ? this.frame = 0 : this.frame++;
        }
        this.x += Math.random() * 15 - 7;
        this.y += Math.random() * 10 - 5;
        this.gameFrame++
    }
    create() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}


for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArr.push(new Enemy())
}


const enemy = new Enemy()
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemiesArr.forEach(enemy => {
        enemy.create();
        enemy.update();
    })
    requestAnimationFrame(animate)
}
animate();