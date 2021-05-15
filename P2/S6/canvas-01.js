console.log ("Ejecutando JS...");

const canvas = document.getElementById ("canvas");

/* Definimos el tamaño del canvas */
canvas.width = 300;
canvas.height = 100;

/* Obtener el contexto del canvas */
const ctx = canvas.getContext("2d");

/* Delimitamos cada objeto mediante beginPath()
y closePath() */

ctx.beginPath();
/* Rectángulo de 100*50, cuya esquina superior izquierda es (5,5) */
  ctx.rect(5,5, 100, 50);

/* Color de relleno del rectángulo */
  ctx.fillStyle = 'red';

/* //-- Cambiar el tamaño de la linea del trazo */
ctx.lineWidth = 4;

/* Mostrar el relleno */
  ctx.fill();

/* Mostrar trazo del rectángulo */
  ctx.stroke();
ctx.closePath();