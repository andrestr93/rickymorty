import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomeComponent from './components/HomeComponent';
import PersonajeComponent from './components/PersonajeComponent'
import ListaUbicacionesComponent from './components/ListaUbicacionesComponent'
import ListaPersonajesComponent from './components/ListaPersonajesComponent'
import ListaEpisodiosComponent from './components/ListaEpisodiosComponent'
import SearchComponent from './components/SearchComponent'
import RedirectComponent from './components/RedirectComponent'




createApp(App).mount('#app')


/*Creacion de rutas */

const routes = [

    {path: '/rickymorty' , component: HomeComponent},
    {path: '/' , component: HomeComponent},
    {path: '/episodios' , component: ListaEpisodiosComponent},
    {path: '/personajes' , component:ListaPersonajesComponent},
    {path: '/ubicaciones' , component:ListaUbicacionesComponent},
    {path: '/personaje/:id' , name:'personaje' , component: PersonajeComponent},
    {path: '/buscador/:searchString'  , component: SearchComponent},
    {path: '/redirect/:searchString'  , component: RedirectComponent},


]





/* configuracion del router */

const router = createRouter({
    history: createWebHistory(),
    routes,
})


/*instancia create app */
const app = createApp(App)

/*Instancia del router y montar la app */
app.use(router);
app.mount('#app')

