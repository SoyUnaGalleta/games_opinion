<template>
    <div id="Opiniones">
        <h3>Escribe tu opinión respecto al juego: <p class="bn">{{ nombre }}</p></h3>
        <br>
        <div class="formularioOpinion">
        <div class="mb-3">
            <label for="txtNombre" class="form-label">Nombre: </label>
            <input class="form-control" type="text" id="txtNombre" v-model="nombreUsuario">
        </div>
        <div class="mb-3">
            <label for="txtOpinion" class="form-label">Opinión:</label>
            <input class="form-control" type="text" id="txtOpinion" v-model="opinionUsuario">
        </div>

        <button class="btn btn-danger" v-on:click.prevent="agregarOpinion()" v-if="estadoOpinion == 0">Agregar</button>
        <button class="btn btn-danger" v-on:click.prevent="actuzalizarOpinion(opinionActualizada)" v-if="estadoOpinion == 1">Actualizar</button>
        <br><br>
        </div>


        <br><br>
        <h3>A continuación podras ver tu opinión.</h3>

        <div class="alert alert-danger" role="alert" v-if="cantidadOpiniones == 0">
            No existen opiniones para mostrar.
        </div>
        <div class="misOpciones" v-if="cantidadOpiniones > 0" v-for="(data, index) in opiniones" :key="index">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="data.colapseGato" aria-expanded="true" :aria-controls="data.colapse">
                        <p><strong>Opinión creada por:</strong> {{ data.nombre }}</p>
                    </button>
                    </h2>
                    <div :id="data.colapse" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p><strong>Opinión:</strong> {{ data.opinion }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <button class="btn btn-danger" @click.prevent="eliminarOpinion(index)">Eliminar</button>
            <button class="btn btn-outline-danger"  @click.prevent="editarOpinion(index)">Editar</button>
            <br><br>
        </div>
        <br>
        <p class="regresar"><router-link to="/">Volver</router-link></p>
        <br>
    </div>
    
</template>

<script>
export default {
    name: 'Opiniones',
    props: ['nombre'],
    data: function() {
        return {
            nombreUsuario: '',
            opinionUsuario: '',
            opiniones: [],
            cantidadOpiniones: 0,
            estadoOpinion: 0,
            opinionActualizada: 0,
            indice: 0,
        }
    },
    methods: {
        agregarOpinion: function() {
            if (this.nombreUsuario != '' && this.opinionUsuario != '') {
                this.cantidadOpiniones ++
                this.estadoOpinion = 0
                let nuevaOpinion = {
                    nombre: this.nombreUsuario,
                    opinion: this.opinionUsuario,
                    colapse: `collapseOne${this.indice}`,
                    colapseGato: `#collapseOne${this.indice}`
                }
                this.indice++
                this.opiniones.push(nuevaOpinion)
                this.nombreUsuario = ''
                this.opinionUsuario = ''
            }
        },

        eliminarOpinion: function(index) {
            this.opiniones.splice(index,1)
            this.cantidadOpiniones --
            this.estadoOpinion = 0
            this.indice--
        },

        editarOpinion: function(index) {
            this.estadoOpinion = 1
            this.nombreUsuario = this.opiniones[index].nombre
            this.opinionUsuario = this.opiniones[index].opinion
            this.opinionActualizada = index
        },

        actuzalizarOpinion: function(index) {
            this.opiniones[index].nombre = this.nombreUsuario
            this.opiniones[index].opinion = this.opinionUsuario
            this.nombreUsuario = ''
            this.opinionUsuario = ''
            this.estadoOpinion = 0
        }

    }
}
</script>

<style scoped>
#Opiniones {
    background-color: #f0f0f0;
    min-height: 100vh;
    padding: 5% 12%;
}

h3 {
    text-align: center;
}

.bn {
    display: inline;
    color: #dc3545;
    font-weight: bold;
    text-transform: uppercase;
}

.btn {
    margin: 0px 10px;
}

.regresar{
    text-align: center;
}

.regresar a {
    color: #dc3545;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.5px;;
    text-decoration: none;
    text-transform: uppercase;
}

.regresar a:hover {
    color: #000;
}
</style>