<template>
    <div id="Juegos">
        <h1 class="tituloH1">Lista de Juegos Disponibles</h1>
        <div class="ContenedorPadre">
            <div class="card" v-for="(juego, index) in juegos" :key="index">
                <div class="imagen"><img :src="juego.background_image" class="imagenImg" alt="..."></div>
                <div class="card-body">
                    <h5 class="card-title">{{ juego.name }}</h5>
                    <p class="card-text" v-for="(genre) in juego.genres">{{ genre.name }}. </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Rating:</b> {{ juego.rating }}</li>
                    <li class="list-group-item"><b>ESRB Rating:</b> {{ juego.esrb_rating.name }}</li>
                    <li class="list-group-item"><b>Released:</b> {{ juego.released }} </li>
                    <li class="list-group-item"><b>Update:</b> {{ juego.updated }} </li>
                </ul>
                <div class="botones">
                    <button class="btn btn-danger" @click="mostrarOpiniones(juego.name)">Opinar</button>
                    <button class="btn btn-outline-danger" @click="irAdministracion(juego.name)">Like</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Juegos',
    data: function() {
        return {
            juegos: [],
        }
    },
    methods: {
        consumirApi: function() {
            let url = 'https://api.rawg.io/api/games?key=1db3620e2f5742428cbfd7af5d45923e'
            axios(url)
            .then(respuesta => {
                let infoJuegos = respuesta.data.results
                for (let i = 0; i < infoJuegos.length; i++) {
                    this.juegos.push(infoJuegos[i])
                }
            })
            .catch(error => console.log(error))
        },
        mostrarOpiniones: function(nombreJuego) {
            this.$router.push(`/opiniones/${nombreJuego}`)
        },
        irAdministracion(nombreJuego) {
            this.$router.push(`/administracion/${nombreJuego}`)
        }
    },
    created() {
        this.consumirApi();
    }
}
</script>

<style scoped>
#Juegos{
    padding: 20px;
}

.ContenedorPadre {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    text-align: center;
    overflow: hidden;
    margin: 15px;
    box-shadow: 0px 0px 8px #aaa, 0px 0px 12px #aaa;
    width: 250px;
}
.imagen{
    overflow: hidden;
    width: 250px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.imagenImg { 
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;
}

.card-body {
    padding: 10px 15px;
    line-height: 70%;
}

.card-title{
    margin-bottom: 3px;
    color: #dc3545;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
}
.card-text{
    display: inline;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.list-group-item {
    padding: 4px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11.5px;
    text-transform: uppercase;
}

.tituloH1{
    color: #dc3545;
    margin-left: 100px;
}

.botones {
    display: flex;
    justify-content:space-around;
    padding: 10px 20px;
}

.btn {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
}
</style>