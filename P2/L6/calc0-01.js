display = document.getElementById ('display')
boton1 = document.getElementById ('boton1')
boton2 = document.getElementById ('boton2')
suma = document.getElementById ('suma')
clear = document.getElementById ('clear')
igual = document.getElementById ('igual')

boton1.onclick = () => {
    display.innerHTML += "1"
}
boton2.onclick = () => {
    display.innerHTML += "2"
}
suma.onclick = () => {
    display.innerHTML += "+"
}
igual.onclick = () => {
    display.innerHTML = eval (display.innerHTML)
}
clear.onclick = () => {
    display.innerHTML = "0"
}