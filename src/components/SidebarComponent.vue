<template>

    <div id="buscador">

        <h2>Buscador de personajes</h2>

        <form @submit.prevent="search">
            <input type="text" name="search" v-model="searchString" />
            <input class="btn" type="submit" name="submit" value="Buscar" />
        </form>
    </div>



</template>


<script>


export default {

    name: 'SidebarComponent',


    data() {

        return {

            searchString: null


        }
    },

    mounted() {


    },

    methods: {

        search(){

            this.$router.push('/redirect/'+this.searchString)

        }


    }

}


</script>