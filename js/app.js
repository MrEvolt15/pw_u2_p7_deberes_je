const app = Vue.createApp({
    methods: {
        agregarFormulario() {
            this.formulario.push({
                nombre: this.nombre,
                apellido: this.apellido,
                hobby: this.hobby,
                lugarNacimiento: this.lugarNacimiento
            });
            // Limpiar los campos después de agregar el formulario
            this.nombre = null;
            this.apellido = null;
            this.hobby = null;
            this.lugarNacimiento = null;
        },
    },
    //a ese arreglo le asiganaremos una propiedad reactiva
    data() {
        return {
            formulario: [],
            nombre: null,
            apellido: null,
            hobby: null,
            lugarNacimiento: null
        }
    },
});
app.mount('#myApp')