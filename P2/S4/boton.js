/* Primero, identifico el botón que está en html */
const botón = document.getElementById ('botón')

/* En segundo lugar, hacemos llamamiento a onclick para
que al pulsar sobre el botón nos aparezca lo que ponemos
dentro de la función. */
botón.onclick = () => {
    console.log ("Gracias por pulsar compañero")
}
