console.log ("Ejecutando javascript...")

const gui = {
    display: document.getElementById ("display"),
    botón_inc: document.getElementById ("botón_inc"),
    botón_dec: document.getElementById ("botón_dec"),
}
const counter = {
    valor: 0,
    inc: function (value) {
        this.valor += value;
        gui.display.innerHTML = this.valor;
    }
}
gui.botón_inc.onclick = () => { /* Incremento del contador */
    counter.inc(1)
}
gui.botón_dec.onclick = () => { /* Decremento del contador */
    counter.inc(-1)
}
