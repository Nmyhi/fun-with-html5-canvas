const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false; // it will only draw if I push the mouse button down

let lastX = 0;
let lastY = 0;


function draw(e) {
    if(!isDrawing) return; // stop the fn from running when they are not moused down
    console.log(e);
    ctx.beginPath();
    // strart from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // set lastX and lastY with destructuring array
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    // set lastX and lastY with destructuring array
    [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);