<template>



    <div v-if="personajes">

        <div class="container-general" v-for="personaje in personajes" :key="personaje.id">


            <section class="content">

                <article>

                    <h3>{{personaje.name}}
                        <router-link :to="{name: 'personaje' , params: {id: personaje.id}}">
                            <div class="container-img">
                                <img :src="this.url + 'character/avatar/'+personaje.id +'.jpeg'" />
                            </div>
                        </router-link>
                    </h3>
                    <p>
                    </p>
                </article>
            </section>
        </div>
    </div>
    <div v-else>
        <h1>No hay datos que mostrar</h1>
    </div>
</template>

<script>

import Global from '../Global';

export default {

    name: 'PersonajesComponent',
    props: ['personajes'],

    data() {

        return {

            url: Global.url

        }

    }





}


</script>