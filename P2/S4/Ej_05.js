/* Con esto tenemos acceso al documento
Html mediante el objeto document */

/* Con esto leemos el párrafo identificado como test */
const test = document.getElementById('test')

/* Con esto mostramos en consola el contenido del
párrafo mediante innerHTML */
console.log ("Párrafo test leído. Dice:")
console.log (test.innerHTML)