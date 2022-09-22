<template>
    <div v-if="ubicaciones">

        <div v-for="ubicacion in ubicaciones" :key="ubicacion.id">


            <section class="content">

                <article>

                    <h2>Nombre: {{ubicacion.name}}</h2>

                    <p>Tipo: {{ubicacion.type}}</p>
                </article>
            </section>
        </div>
    </div>
    <div v-else>
        <h1>No hay datos que mostrar</h1>
    </div>
</template>


<script>



//import axios from 'axios'
import Global from '../Global';
export default {

    name: 'UbicacionesComponent',
    props: {
        ubicaciones: []
    },


    data() {


        return {

            url: Global.url

        
        }
    },



    methods: {

    

        
    },

    mounted() {

 


    },



}


</script>