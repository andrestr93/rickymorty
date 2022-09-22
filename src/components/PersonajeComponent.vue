

<template>

    <div>

        <div v-if="personaje">
            <section id="content" class="content-personaje">
                <!--detalle de articulo-->
                <div id="personaje">
                    <article>
                        <div class="image-wrap">
                            <img :src="this.url + 'character/avatar/'+personaje.id +'.jpeg'" />
                        </div>
                        <h2>{{personaje.name}}</h2>

                        <h4>Datos</h4>

                        <p>Gender: {{personaje.gender}}</p>
                        <p>Species: {{personaje.species}}</p>
                        <p>Status: {{personaje.status}}</p>
                        <div v-if="personaje.status == 'Dead'">
                            <img src="../assets/img/tombstone.png" />
                        </div>

                        <div v-else-if="personaje.status == 'Alive'">
                            <img src="../assets/img/heartbeat.png" />
                        </div>


                        <div v-else-if="personaje.status == 'unknown'">
                            <img src="../assets/img/unknown.png" />
                        </div>

                    </article>
                </div>
            </section>
        </div>

        <div v-else-if="!personaje">

            NO hay datos que mostrar

        </div>

    </div>

</template>


<script>
import Global from '../Global';
import axios from 'axios'
export default {

    name: 'PersonajeComponent',
    components: {


    },

    mounted() {

        this.personajeid = this.$route.params.id;
        this.getPersonaje(this.personajeid);

    },




    data() {

        return {

            url: Global.url,
            personaje: [],
            personajeid: null


        }
    },

    methods: {

        getPersonaje(personajeid) {
            axios.get(this.url + 'character/' + personajeid).then(res => {
                this.personaje = res.data;
            

            });

        }

    },


}


</script>