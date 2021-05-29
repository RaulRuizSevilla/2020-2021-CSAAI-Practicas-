/* Configuramos el elemento de vídeo */
let  directo  =  documento . getElementById ( "directo" ) ;
const  video1  =  documento . getElementById ( "video1" ) ;
const  btn_video1  =  documento . getElementById ( "btn_video1" ) ;
const  video2  =  documento . getElementById ( "video2" ) ;
const  btn_video2  =  documento . getElementById ( "btn_video2" ) ;
const  btn_test  =  documento . getElementById ( "btn_test" ) ;
const  btn_src_on  =  documento . getElementById ( "btn_src_on" ) ;
const  btn_src_off  =  documento . getElementById ( "btn_src_off" ) ;


/* Dimensiones de los vídeos */
directo . ancho = 420 ;
directo . altura = 200 ;
video1 . ancho = 200 ;  
video1 . altura = 100 ;
video2 . ancho = 200 ;  
video2 . altura = 100 ;

/* Imagen de ejemplo test */
const  TEST_IMAGE_URL  =  "test.png" ;

/* Imagen de antes de que empiece a funcionar */
directo . poster  =  TEST_IMAGE_URL ;
video1 . poster  =  TEST_IMAGE_URL ;
video2 . poster  =  TEST_IMAGE_URL ;

/* Botón de fuentes ON */
btn_src_on . onclick  =  ( )  =>  {
 
    /* Fuente de cámara 1 */
    video1 . src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4" ;
    /* Reproducción de un vídeo desde 0 */
    video1 . currentTime  =  0 ;
    video1 . jugar ( ) ;
    /* En silencio */
    video1 . muted ;
    /* Fuente de cámara 2 */
    video2 . src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4" ;
    /* Reproducción de un vídeo desde 0 */
    video2 . currentTime  =  0 ;
    video2 . jugar ( ) ;
    /* En silencio */
    video2 . muted ;

    /* Imagen de prueba en directo */
    directo . poster  =  TEST_IMAGE_URL ;
} ;

/* Botón TEST */
btn_test . onclick  =  ( )  =>  {
    directo . poster  =  TEST_IMAGE_URL ;
    directo . src  =  null ;
} ;

/* Botón cámara 1 */
btn_video1 . onclick  =  ( )  =>  {
    directo . src  =  video1 . src ;
    directo . currentTime  =  video1 . currentTime ;
    directo . jugar ( ) ;
    directo . cartel = null ;
} ;

/* Botón Cámara 2 */
btn_video2 . onclick  =  ( )  =>  {
    directo . src  =  video2 . src ;
    directo . currentTime  =  video2 . currentTime ;
    directo . jugar ( ) ;
    directo . cartel = null ;
} ;

/* Botón SRC desactivado */
btn_src_off . onclick  =  ( )  =>  {
    video1 . poster  =  TEST_IMAGE_URL ;
    video2 . poster  =  TEST_IMAGE_URL ;
    video1 . src  =  null ;
    video2 . src  =  null ;
    directo . poster  =  TEST_IMAGE_URL ;
    directo . src  =  null ;
}