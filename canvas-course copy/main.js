const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray = [];
window.addEventListener('resize', function () {
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
})

const mouse = {
    x: undefined,
    y: undefined,
}
window.addEventListener('click', function(event) {
    mouse.x = event.x
    mouse.y = event.y
    
})
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x
    mouse.y = event.y
    // createCircle()
})

class Particle {
    constructor() {
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x =  Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
        particleArray.push(new Particle());
    }
}
init();

function handlePartcles() {
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handlePartcles()
    requestAnimationFrame(animate);
}

animate()