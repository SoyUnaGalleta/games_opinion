<template>
    <div id="NotFound">
        <div>
            <h1>Componente Not Found</h1>
            <p>Página no encontrada</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    data: function () {
        return {

        }
    },
    methods: {}
}
</script>

<style scoped>
#NotFound {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    height: 100vh;
    width: 100%;
    padding: 100px;
    color:#dc3545;
    text-align: center;
}

p{
    color: #000;
    font-size: 16px;
}
</style>