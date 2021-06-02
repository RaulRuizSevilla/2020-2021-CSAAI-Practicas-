console.log ("Ejecutando js...")

display = document.getElementById ('display')
digitos = document.getElementsByClassName ('digitos')
operadores = document.getElementsByClassName ('operadores')
igual = document.getElementById ('igual')
clear = document.getElementById ('clear')
borrar = document.getElementById ('borrar')

const Estados = {
    inicial: 0,
    op1: 1,
    operacion: 2,
    op2: 3,
}
let estado = Estados.inicial

function digito(ev)  {
    
    if (estado == Estados.inicial) {
        display.innerHTML = ev.target.value
        estado = Estado.op1
    }
    else {
        display.innerHTML += ev.target.value
    }
}

for (let boton of digitos) {
    boton.onclick = digito
}
for (let boton of operadores) {
    boton.onclick = operadores
}
igual.onclick = ()=> {
    display.innerHTML = eval(display.innerHTML)
}
clear.onclick = ()=> {
    display.innerHTML = '0'
    estado = Estados.inicial
}
borrar.onclick = ()=> {
    display.innerHTML = eval(display.innerHTML - op2)
}
