<template>

<div>
    <EpisodiosComponentVue :episodios="episodios"></EpisodiosComponentVue>
    <button @click="this.prevPagina()">Anterior</button>
    <button @click="this.nextPagina()">Siguiente</button>

</div>

</template>



<script>


import Global from '../Global';
import axios from 'axios'
import EpisodiosComponentVue from './EpisodiosComponent.vue';
export default {

    name: 'ListaEpisodiosComponent',
    components: {

        EpisodiosComponentVue

    },

    data() {

        return {
            episodios: [],
            url: Global.url,
            count: 0

        }
    },


    mounted() {

        this.nextPagina();
    },

    methods: {

        nextPagina() {

            this.count++

          

            if(this.count <4){
            axios.get(this.url + "episode/?page=" + this.count).then((res) => {
                if (!res.data.results == "") {
                    this.episodios = res.data.results;
                 
                }
            });

        }
        },

        prevPagina() {
            this.count--
            if (!this.count == 0) {

                axios.get(this.url + "episode/?page=" + this.count).then((res) => {
                    if (!res.data.results == "") {
                        this.episodios = res.data.results;
                  

                    }
                });
            }
        },


    },


}

</script>