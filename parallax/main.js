const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 5;


window.addEventListener('load', function () {

    document.addEventListener("keydown", function(event) {
        if (event.key === 'ArrowLeft') gameSpeed--;
        if (event.key === 'ArrowRight') gameSpeed++;
        slider.value = gameSpeed;
        showGameSpeed.innerHTML = gameSpeed;
    });
    // document.addEventListener("keyup", function(event) {
    //     // if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') gameSpeed = 5;
    // });
    const slider = document.getElementById('slider')
    const showGameSpeed = document.getElementById('showGameSpeed')
    slider.value = gameSpeed;
    showGameSpeed.innerHTML = gameSpeed;
    slider.addEventListener('change', function (e) {
        gameSpeed = e.target.value;
        showGameSpeed.innerHTML = e.target.value;
    })


    const backgroundLayer1 = new Image();
    backgroundLayer1.src = './assets/layer-1.png';
    const backgroundLayer2 = new Image();
    backgroundLayer2.src = './assets/layer-2.png';
    const backgroundLayer3 = new Image();
    backgroundLayer3.src = './assets/layer-3.png';
    const backgroundLayer4 = new Image();
    backgroundLayer4.src = './assets/layer-4.png';
    const backgroundLayer5 = new Image();
    backgroundLayer5.src = './assets/layer-5.png';


    class Layer {
        constructor(image, speedModifier) {
            this.x1 = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = gameSpeed * this.speedModifier;
        }
        update() {
            this.speed = gameSpeed * this.speedModifier;
            if (this.x1 <= -this.width) this.x1 = 0;
            this.x1 = Math.floor(this.x1 - this.speed);
        }
        draw() {
            ctx.drawImage(this.image, this.x1, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x1 + this.width, this.y, this.width, this.height);
        }
    }


    const layer1 = new Layer(backgroundLayer1, 0.2)
    const layer2 = new Layer(backgroundLayer2, 0.4)
    const layer3 = new Layer(backgroundLayer3, 0.6)
    const layer4 = new Layer(backgroundLayer4, 0.8)
    const layer5 = new Layer(backgroundLayer5, 1)

    const layersArray = [layer1, layer2, layer3, layer4, layer5]
    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        layersArray.forEach((layer) => {
            layer.draw();
            layer.update();
        })
        requestAnimationFrame(animate)
    }
    animate();
})
