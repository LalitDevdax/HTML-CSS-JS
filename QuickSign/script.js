const Colorpicker = document.getElementById("ColourPicker");
const Canvascolor = document.getElementById("CanvasPicker");
const canvas = document.getElementById("Canvas");
const clearBtn = document.getElementById("clearbtn");
const saveBtn = document.getElementById("savebtn");
const fontsize = document.getElementById("fontsize");
const retrieve = document.getElementById("retrieve");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "#000000";
Colorpicker.value = "#000000";
Canvascolor.value = "#ffffff";
let isDrawing = false;
let lastX = 0;
let lastY = 0;

Colorpicker.addEventListener("change", (e) => {
  const newColor = e.target.value;
  ctx.strokeStyle = newColor;
});

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
  }
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

Canvascolor.addEventListener("change", (e) => {
  const bgColor = e.target.value;
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

fontsize.addEventListener("change", (e) => {
  ctx.lineWidth = e.target.value;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  Colorpicker.value = "#000000";
  Canvascolor.value = "#ffffff";
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#000000";
  fontsize.value = 5;
  ctx.lineWidth = 5;
});

saveBtn.addEventListener("click", () => {
  localStorage.setItem("canvascontent", canvas.toDataURL());
  let link = document.createElement("a");
  link.download = "my-canvas";
  link.href = canvas.toDataURL();
  link.click();
});

retrieve.addEventListener("click", () => {
  let savedcanvas = localStorage.getItem("canvascontent");
  if (savedcanvas) {
    let img = new Image();
    img.src = savedcanvas;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  }
});
