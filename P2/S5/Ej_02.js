console.log ("Ejecutando javascript...")

const display = document.getElementById ('display')
const botón = document.getElementById ('botón')

/* Contador de clicks */
let cont = 0;

botón.onclick = () => {      /* Al pulsar el botón ocurre todo esto  */
    console.log ("Click!")
    cont += 1                /* Incrementamos el contador */
    display.innerHTML += ' ' + cont /* Actualizar display */
}
