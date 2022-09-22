<template>

    <div>

        <UbicacionesComponent :ubicaciones="ubicaciones"></UbicacionesComponent>


    </div>


</template>



<script>

import Global from '../Global';
import axios from 'axios';

import UbicacionesComponent from './UbicacionesComponent.vue'


export default {
    name: "ListaUbicacionesComponent",
    components:{
        UbicacionesComponent
    },
 

    data() {

        return {
            url: Global.url,
            ubicaciones: [],

        }
    },


    methods: {
        getUbicaciones() {
            axios.get(this.url + "location").then((res) => {
                if (!res.data.results == "") {
                    this.ubicaciones = res.data.results;
                }
            });
        },
    },


    
    mounted() {
        this.getUbicaciones();
    }
}




</script>