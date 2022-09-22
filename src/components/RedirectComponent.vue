<template>

    <div>
        <h1>Redirigiendo</h1>
    </div>



</template>


<script>

    export default{

        name: 'RedirectComponent',


     

        mounted(){

    
            var searchString= this.$route.params.searchString;
            this.$router.push('/buscador/'+searchString);

            
        }

        
    }





</script>