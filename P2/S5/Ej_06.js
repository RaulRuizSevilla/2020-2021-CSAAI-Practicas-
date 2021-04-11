console.log("Ejecutando JS...");
const gui = {

 /* Elementos html del contador 1 */
  display1: document.getElementById("display1"),
  botón_inc1: document.getElementById("botón_inc1"),
  botón_dec1: document.getElementById("botón_dec1"),

  /* Elementos html del contador 2 */
  display2: document.getElementById("display2"),
  botón_inc2: document.getElementById("botón_inc2"),
  botón_dec2: document.getElementById("botón_dec2"),
}
/* Contador */
class counter {
  constructor (display) {
  this.valor = 0;
  this.display = display;
  }
/* Actualizamos el display y mostramos el valor */
  inc (value) {
    this.valor += value;
    this.display.innerHTML = this.valor;
  }
}
/* Creación de los 2 objetos contadores */
const c1 = new counter(gui.display1);
const c2 = new counter(gui.display2);

gui.botón_inc1.onclick = () => { /* Incremento */
  c1.inc(1);
}
gui.botón_dec1.onclick = () => { /* Decremento */
  c1.inc(-1); 
}
gui.botón_inc2.onclick = () => { /* Incremento contador */
  c2.inc(1);
}
gui.botón_dec2.onclick = () =>{ /* Decremento contador */
  c2.inc(-1);
}