<template>



    <div v-if="personajes">

        <h2>RESULTADOS OBTENIDOS: {{busqueda}}</h2>

        <PersonajesComponent :personajes="personajes"></PersonajesComponent>

    </div>

    <div v-else>

        <h2>NO HAY PERSONAJES QUE MOSTRAR</h2>

    </div>

</template>


<script>
import PersonajesComponent from './PersonajesComponent.vue';
import axios from 'axios';
import Global from '../Global'
export default {
    name: 'SearchComponent',
    components: {
        PersonajesComponent,


    },

    mounted() {

        this.busqueda = this.$route.params.searchString;
        this.getPersonajeSearch(this.busqueda);

    },

    data() {

        return {


            url: Global.url,
            personajes: [],
            busqueda: null
        }
    },

    methods: {

        getPersonajeSearch(searchString) {

            axios.get(this.url + "character/?name=" + searchString).then((res) => {
                this.personajes = res.data.results;
                console.log(this.personajes)
            });
        },

    }

}

</script>