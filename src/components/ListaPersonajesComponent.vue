
<template>

<div>
    <div>
        <PersonajesComponent :personajes="personajes"></PersonajesComponent>
    </div>
    <button @click="this.prevPagina()">Anterior</button>
    <button @click="this.nextPagina()">Siguiente</button>
</div>
</template>


<script>


import Global from '../Global';
import axios from 'axios';
import PersonajesComponent from './PersonajesComponent.vue';
export default {

    name: 'ListaPersonajesComponent',
    components: {

        PersonajesComponent
    },

    data() {

        return {

            url: Global.url,
            personajes: [],
            count: 1,
        }

    },

    mounted() {

        this.nextPagina();

    },

    methods: {


        nextPagina() {

            this.count++

            axios.get(this.url + "character/?page=" + this.count).then((res) => {
                if (!res.data.results == "") {
                    this.personajes = res.data.results;
                }
            });
        },


        prevPagina() {

            this.count--
            if (!this.count == 0) {

                axios.get(this.url + "character/?page=" + this.count).then((res) => {


                    if (!res.data.results == "") {
                        this.personajes = res.data.results;

                    }
                });
            }
        }




    }






}





</script>