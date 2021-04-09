const test2 = document.getElementById ('test2')
const test1 = document.getElementById ('test1')

test2.onclick = () => {
    console.log ("Click sobre el párrafo 2...")
    test1.innerHTML = "¿¡Ves como era verdad!?"
}

/* Primero leemos los dos párrafos con el const... */
/* Segundo definimos la función de que al hacer click en el 
párrafo 2 ocurra algo */
/* Tercero, definimos que ese algo sea que cambie el texto 
mediante el innerHTML */