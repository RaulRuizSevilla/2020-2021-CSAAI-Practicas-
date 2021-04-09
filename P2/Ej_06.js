/* Con esto manejamos cada vez que demos al click
sobre el párrafo "test" */
function manejador_parrafo()
{
    console.log ("Click sobre el párrafo...")
}
console.log ("Ejecutando js...")

/* Con esto leemos el párrafo "test" */
const test = document.getElementById ('test')

/* Con esto configuramos el manejador para que
al hacer click se active la función manejador_párrafo */
test.onclick = manejador_parrafo;