const botón1 = document.getElementById ('botón1')
const botón2 = document.getElementById ('botón2')
const párrafo = document.getElementById ('párrafo')

botón1.onclick = () => {
    console.log ("Has pulsado el botón 1")
    párrafo.innerHTML = párrafo.innerHTML + "1"
}
botón2.onclick = () => {
    console.log ("Has pulsado el botón 2")
    párrafo.innerHTML = párrafo.innerHTML + "2"
}