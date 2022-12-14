const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const drawColor = document.querySelector('#color');
const lineWidthInput = document.querySelector('#lineWidth');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let posititon = {
    x: 0,
    y: 0,
}

// Start drawing
document.addEventListener('mousedown', (e) => {
    document.addEventListener('mousemove', draw);
    reposition(e);
})

// Stop drawing
document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', draw);
})

// Change line width and color
let color = "black";
let lineWidth = 5;

document.addEventListener('change', () => {
    color = drawColor.value;
})
document.addEventListener('change', () => {
    lineWidth = lineWidthInput.value;
})


function reposition(e) {
    posititon.x = e.clientX - canvas.offsetLeft;
    posititon.y = e.clientY - canvas.offsetTop;
}

// Render All
function draw(e) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.moveTo(posititon.x, posititon.y);
    reposition(e);
    ctx.lineTo(posititon.x, posititon.y);
    ctx.stroke();
    ctx.closePath();
}

// Clear button 
const clearBtn = document.querySelector('#clearBtn');

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
})