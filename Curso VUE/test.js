const vueInstance = new Vue({
  el: "#app",
  data: {
    header: "Este es mi primer ejercicio con Vue.js",
    frutas: ["Pera", "Platano", "Manzana"],
    canciones: [
      { name: "All you can bleed", artist: "Powerwolf", duration: 224 },
      { name: "Who", artist: "Disturbed", duration: 285 },
      { name: "Papercut", artist: "Linkin Park", duration: 185 },
      { name: "Deutschland", artist: "Rammstein", duration: 326 },
      { name: "This venom", artist: "Disturbed", duration: 260 },
      {
        name: "The only thing I know for real",
        artist: "MGR:R OST",
        duration: 146,
      },
      { name: "Overwhelmed", artist: "Royal & The Serpent", duration: 198 },
      { name: "Cradles", artist: "Sub Urban", duration: 218 },
    ],
    nCancionName: "",
    nCancionArtist: "",
    nCancionDuration: 0,
    delCancionName: "",

    playlistLength: 0,
  },
  methods: {
    limpiaCampos() {
      this.nCancionName = "";
      this.nCancionArtist = "";
      this.nCancionDuration = "";

      this.delCancionName = "";
    },
    agregarCancion() {
      this.canciones.push({
        name: this.nCancionName,
        artist: this.nCancionArtist,
        duration: this.nCancionDuration,
      });

      this.limpiaCampos();
    },

    eliminaCancion(name) {
      console.log(name);

      this.canciones = this.canciones.filter((value, index, array) => {
        return value.name.toLowerCase() !== name.toLowerCase();
      });

      this.limpiaCampos();
    },

    /*

        Idea para un buscador
        eliminaCancion (name) {

            console.log(name);

            this.canciones = this.canciones.filter((value,index,array) =>{
                return value.name === name;
            });

            this.limpiaCampos();
        }
        */

    playlistLengthInSecs() {
      this.playlistLength = 0;

      for (cancion of this.canciones) {
        //Detalle importante aqui se usa of en vez de in para el foreach
        this.playlistLength += parseInt(cancion.duration);
      }

      return this.playlistLength;
    },
  },
  computed: {
    playlistLengthInMinAndSecs() {
      var totalSecs = this.playlistLengthInSecs();

        var min = parseInt(totalSecs/60);
        var secs = totalSecs%60;
        var minAndSecs = min+":"+secs;

      return minAndSecs;
    },
  },
});
