<template>

    <div>

        <PersonajesComponent :personajes="personajes"></PersonajesComponent>
    </div>
</template>


<script>


import Global from '../Global';
import axios from 'axios';
import PersonajesComponent from './PersonajesComponent.vue';



export default {
    name: "HomeComponent",
    components: {
        PersonajesComponent,
    },


    data() {

        return {
            url: Global.url,
            personajes: [],
            ubicaciones: [],
            count: 1,
            numRandom: 1
        }
    },

    mounted() {

        this.getPerosnajeRandom();


    },

    methods: {

        getPerosnajeRandom() {

            this.numRandom = Math.floor(Math.random() * (42 - 1 + 1) + 1);
            
            axios.get(this.url + "character/?page=" + this.numRandom).then((res) => {
                if (!res.data.results == "") {
                    this.personajes = res.data.results;
                  
                }
            });

        },

    }

}

</script>