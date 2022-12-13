const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './assets/shadow_dog.png';
let x = -100
let y = 0
let z = 3
let newBorderX = 100;
let newBorderY = 100;

function animate() {
    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(x, y, 100, 100);
    // if (x < CANVAS_WIDTH - newBorderX && y < CANVAS_HEIGHT - newBorderY) { // from left to right
    //     console.log('1')
    //     x += z
    // } else if (x >= CANVAS_WIDTH - newBorderX && y < CANVAS_HEIGHT - newBorderY) { // from top to buttom
    //     console.log('2')
    //     y += z;
    // } else if (x >= CANVAS_WIDTH - newBorderX && y >= CANVAS_HEIGHT - newBorderY) { // from left to right
    //     console.log('3')
    //     x-=z
    // } else if (x < CANVAS_WIDTH - newBorderX && y >= CANVAS_HEIGHT - newBorderY) { // from buttom to top
    //     console.log('4')
    //     y-=z
    // }

    // if (x >= CANVAS_WIDTH - newBorderX) {
    //     if (y < CANVAS_HEIGHT - newBorderY){
    //         y+=z;
    //         console.log('aaa')
    //     } 
    // } else {
    //     if(y < CANVAS_HEIGHT - newBorderY) x+=z
    // }
    // if (y >= CANVAS_HEIGHT - newBorderY){
    //     // console.log('111')
    //     x-=z;
    // }

    requestAnimationFrame(animate);
}

animate();