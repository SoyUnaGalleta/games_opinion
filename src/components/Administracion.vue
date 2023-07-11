<template>
    <div id="Administracion">

        <div class="validar" v-if="estado == 0">
            <h3>Ingresa tus datos para ver la información:</h3>
            <div class="mb-3">
                <label for="txtNombre" class="form-label">Ingrese nombre: </label>
                <input class="form-control" type="text" id="txtNombre" v-model="nombreUsuario">
                <label for="txtApellido" class="form-label">Ingrese apellido: </label>
                <input class="form-control" type="text" id="txtApellido" v-model="apellidoUsuario">
            </div>
            <button class="btn btn-danger" @click="ingresarDatos()">Ingresar Datos</button>
        </div>

        <div class="container-fluid" v-else-if="estado == 1">
            <div class="row d-flex">
                <div class="col-md-3 colum1">
                    <div class="circulo"></div>
                    <p>Bienvenido</p>
                    <p>{{ nombreUsuario }} {{ apellidoUsuario }}</p>
                </div>
                <div class="col-md-9 colum2">
                    <h1>Resumen de tu cuenta</h1>
                    <h3>Le diste me gusta a <p class="bn">{{ nombre }}</p></h3>

                    <div class="cajaCredito">
                        <h5>¿Desea comprar el crédito?</h5>
                        <button class="btn btn-danger margen" @click="agregarCoint()">Agregar Coins</button>
                        <div class="linea"></div>
                        <h4>Cantidad de coins compradas</h4>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar" :style="estilo"> ${{ coins }}</div>
                        </div>

                    </div>

                    <div class="container-fluid">
                        <div class="row">

                            <div class="col cuadrado color1">
                                <p>% de finalización del juego</p>
                                <div class="linea2"></div>
                                <p>17%</p>
                            </div>
                            <div class="col cuadrado color2">
                                <p>Logros del juego</p>
                                <div class="linea2"></div>
                                <p>166</p>
                            </div>
                            <div class="col cuadrado color3">
                                <p>Recompensas</p>
                                <div class="linea2"></div>
                                <p>200</p>
                            </div>

                        </div>
                    </div>
                    
                <br>
                <p class="regresar"><router-link to="/">Volver a inicio</router-link></p>
                <br>
                
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Administracion',
    props: ['nombre'],
    data: function() {
        return {
            estado: 0,
            nombreUsuario: '',
            apellidoUsuario: '',
            estilo: 'width: 0%;',
            coins: 0,
        }
    },
    methods: {
        ingresarDatos: function() {
            if (this.nombreUsuario !== '' && this.apellidoUsuario !== '') {
                this.estado++
            }
        },
        agregarCoint: function() {
            if (this.coins <= 20) {
                this.coins = this.coins + 2
                this.estilo = `width: ${this.coins}%;background-color: #35dccc;`
            } else if (20 < this.coins && this.coins <= 30) {
                this.coins = this.coins + 2
                this.estilo = `width: ${this.coins}%;background-color: #dc7935;`
            } else if (30 < this.coins && this.coins <= 49) {
                this.coins = this.coins + 2
                this.estilo = `width: ${this.coins}%;background-color: #dc3545;`
            }
            
        }
    }
}
</script>

<style scoped>
#Administracion{
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    min-height: 100vh;
    width: 100%;
}

.validar {
    padding: 100px;
    widows: 100%;
}
.colum1 {
    color: #ccc;
    background-color: #000;
    line-height: 40%;
    min-height: 100vh;
    padding: 30px;
}

.circulo {
    margin: 0 auto;
    height: 150px;
    width: 150px;
    background-color: #333;
    border: 20px solid #111;
    border-radius: 100%;
    margin-bottom: 80px;
}

.colum2 {
    padding: 30px 80px 10px 80px;
}

.bn {
    display: inline;
    color: #dc3545;
    font-weight: bold;
    text-transform: uppercase;
}

.cajaCredito {
    background-color: #fff;
    border: 1px solid #c0c0c0;
    border-radius: 10px;
    margin: 40px 0px;
    padding: 20px;
    text-align: center;
    width: 80%;
}

.margen {
    margin-top: 30px;
}

.linea{
    background: #c0c0c0;
    margin: 15px 0px;
    height: 2px;
    width: 100%;
}

.linea2 {
    background: #000;
    opacity: 0.3;
    height: 2px;
    width: 100%;
}

.cuadrado {
    color: #000;
    padding: 10px;
}

.color1 {
    background-color: #35dccc;
}

.color2 {
    background-color: #dc7935;
}

.color3 {
    background-color: #35dc6b;
}

.progress-bar {
    font-weight: bold;
}

.regresar{
    margin-top: 20px;
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