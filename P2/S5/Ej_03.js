console.log ("Ejecutando javascript...")

const gui = {
    display: document.getElementById ("display"),
    botón: document.getElementById ("botón"),

}
const counter = {
    valor: 0,
    inc: function (value) {
        this.valor += value;
        gui.display.innerHTML = this.valor;
    }
}
gui.botón.onclick = () => {
    counter.inc(1)
}