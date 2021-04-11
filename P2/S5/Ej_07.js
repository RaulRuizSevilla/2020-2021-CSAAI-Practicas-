const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset")
}
console.log("Ejecutando JS...");

const crono = new Crono(gui.display);

/* Encender el cronómetro */
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}
  
/* Detener el cronómetro */
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

/* Reset del cronómetro */
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
}