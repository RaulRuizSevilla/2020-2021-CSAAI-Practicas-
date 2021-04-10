const botón = document.getElementById ('botón')
const párrafo = document.getElementById ('párrafo')

botón.onclick = () => {
    console.log ("Has pulsado el botón")
    párrafo.innerHTML = "Buenas tardes compañero"
}