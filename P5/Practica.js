/* Configuración del vídeo */
let directo = document.getElementById("directo");
const video1 = document.getElementById("video1");
const btn_video1 = document.getElementById("btn_video1");
const video2 = document.getElementById("video2");
const btn_video2 = document.getElementById("btn_video2");
const btn_test = document.getElementById("btn_test");
const btn_src_on = document.getElementById("btn_src_on");
const btn_src_off = document.getElementById("btn_src_off");


/* Dimensiones de los vídeos */
directo.width=620;
directo.height=200;
video1.width=200;  
video1.height=100;
video2.width=200;  
video2.height=100;

/* Imagen TEST */
const TEST_IMAGE_URL = "test.png";

/* Imagen anterior a arrancar el vídeo */
directo.poster = TEST_IMAGE_URL;
video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;

/* Botón Fuentes ON */
btn_src_on.onclick = () => {
 
    /* Fuente cámara 1 */
    video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";


    /* Vídeo desde 0 */
    video1.currentTime = 0;
    video1.play();

    /* En silencio */
    video1.muted;

    /* Fuente cámara 2 */
    video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";


    /* Vídeo desde 0 */
    video2.currentTime = 0;
    video2.play();

    /* En silencio */
    video2.muted;

    /* En directo, imagen de prueba */
    directo.poster = TEST_IMAGE_URL;
};

/* Botón TEST */
btn_test.onclick = () => {
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;
};

/* Botón cámara 1*/
btn_video1.onclick = () => {
    directo.src = video1.src;
    directo.currentTime = video1.currentTime;
    directo.play();
    directo.poster=null;
};

/* Botón cámara 2 */
btn_video2.onclick = () => {
    directo.src = video2.src;
    directo.currentTime = video2.currentTime;
    directo.play();
    directo.poster=null;
};

 /* Botón SRC */
btn_src_off.onclick = () => {
    video1.poster = TEST_IMAGE_URL;
    video2.poster = TEST_IMAGE_URL;
    video1.src = null;
    video2.src = null;
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;
}