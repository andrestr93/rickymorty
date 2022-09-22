<template>
  <header>
    <div class="center">
      <div id="logo">
        <img src="../assets/img/logo.png" />
      </div>

      <!--MENU-->

      <nav id="menu">
        <router-link to='/rickymorty' active-class="active">Inicio</router-link>
        <router-link to="/episodios" active-class="active">Episodios</router-link>
        <router-link to="/personajes" active-class="active">Personajes</router-link>
        <router-link to="/ubicaciones" active-class="active">Ubicaciones</router-link>
      </nav>

<SidebarComponent></SidebarComponent>
    </div>
  </header>
</template>


<script>

  import SidebarComponent from './SidebarComponent.vue'

export default {

  name: 'HeaderComponent',

  components:{

    SidebarComponent


  }
}



</script>