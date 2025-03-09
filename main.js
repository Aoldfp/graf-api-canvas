function draw() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Rectángulo
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 100, 100);

    // Triángulo
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.lineTo(250, 200);
    ctx.lineTo(150, 200);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    // Línea
    ctx.beginPath();
    ctx.moveTo(300, 50);
    ctx.lineTo(400, 150);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.stroke();

    // Arco
    ctx.beginPath();
    ctx.arc(150, 300, 50, 0, Math.PI * 2);
    ctx.strokeStyle = "purple";
    ctx.stroke();

    // Curva Bézier
    ctx.beginPath();
    ctx.moveTo(50, 400);
    ctx.bezierCurveTo(150, 350, 250, 450, 350, 400);
    ctx.strokeStyle = "orange";
    ctx.stroke();
}

draw();
