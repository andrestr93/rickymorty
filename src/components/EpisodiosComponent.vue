<template>

    <div v-if="episodios">
        <div v-for="episodio in episodios" :key="episodio.id">


            <section class="content">

                <article>
                    <h3>Nombre: {{episodio.name}}</h3>
                    <p>
                        Episodio: {{episodio.episode}}
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

    name: 'EpisodiosComponent',
    props: ['episodios'],
    data() {

        return {

            url: Global.url

        }

    }




}




</script>