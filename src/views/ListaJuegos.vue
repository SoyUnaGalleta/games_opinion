<template>
    <div id="ListaJuegos">
        <nav>
            <p>Game Opinion</p>
            <p>Home</p>
        </nav>
        <Juegos />
    </div>
</template>

<script>
import Juegos from '@/components/Juegos.vue'

export default {
    name: 'ListaJuegos',
    components: {
        Juegos
    },
    data: function() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
#ListaJuegos {
    background-color: #f0f0f0;
}

nav {
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    background-color: #dc3545;
    box-shadow: 0px 0px 8px #aaa, 0px 0px 12px #aaa;
    margin-bottom: 20px;
    padding: 20px 40px 5px 40px;
}
</style>