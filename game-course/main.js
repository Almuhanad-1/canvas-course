const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
 
const playerImage = new Image();
playerImage.src = './assets/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 525;

let movement = 'idle';
const dropdown = document.getElementById('movement')
console.log(dropdown)
dropdown.addEventListener('change', function(e) {
    movement = e.target.value;
})


let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimation = [];
const animationState = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    },
]
animationState.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let i = 0; i < state.frames; i++) {
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimation[state.name] = frames;
})
console.log(spriteAnimation)
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimation[movement].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimation[movement].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight );
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 6) frameX++;
        else frameX = 0    
    }
    gameFrame++
    requestAnimationFrame(animate);
}

animate();