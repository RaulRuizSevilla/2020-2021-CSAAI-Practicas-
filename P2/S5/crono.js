
class Crono {

    /*  Hay que indicar el display
     donde mostrar el cronómetro */  
    constructor(display) {
        this.display = display;

          /* Tiempo */
        this.cent = 0, /* Centésimas */
        this.seg = 0,  /* Segundos */
        this.min = 0,  /* Minutos */
        this.timer = 0; /* Temporizador asociado */
    }
    tic() {
        this.cent += 1;

        if (this.cent == 100) {
        this.seg += 1;
        this.cent = 0;
        }

        if (this.seg == 60) {
        this.min = 1;
        this.seg = 0;
        }

        this.display.innerHTML = this.min + ":" + this.seg + ":" + this.cent
    }

    /* Arrancar el cronómetro */
    start() {
       if (!this.timer) {
          this.timer = setInterval( () => {
              this.tic();
          }, 10);
        }
    }

    /* Parar el cronómetro */
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

     /* Reset del cronómetro */ 
    reset() {
        this.cent = 0;
        this.seg = 0;
        this.min = 0;

        this.display.innerHTML = "0:0:0";
    }
}