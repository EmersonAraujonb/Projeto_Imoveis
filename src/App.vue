<template>
  <div id="app">
    <nav>
      <a href="/"><img src="./assets/logoHome.png" alt="logoHome" /></a>
      <router-link to="/">Inicio</router-link>
      <router-link to="/LoginCadastro">Login | Cadastro</router-link>
      <router-link to="/CompraVenda">Compra e Venda</router-link>
      <router-link to="/about">Sobre</router-link>
    </nav>
    <router-view />
    <br />
    <hr />
    <br />
    <footer>
      <div class="footer">
        <a href="/Contato">contato</a> |
        <a href="/Sobre">Sobre</a>
      </div>
      <p><strong>Emerson Araújo - © Corretor de Imovéis 2022</strong></p>
    </footer>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'app',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUsers() {
      axios.get("https://randomuser.me/api/").then((res) => {
        this.user = res.data;
      })
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  box-shadow: 5px 6px 8px 0 #014a5a80;
}

nav a.router-link-exact-active {
  color: #000000;
  text-decoration: none;
}
.router-link-exact-active:hover, a:hover{
  color: rgb(2, 225, 255);
}
</style>