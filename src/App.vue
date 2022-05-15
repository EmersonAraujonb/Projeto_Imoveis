<template>
  <div id="app">
    <nav>
      <a href="/"><img src="./assets/NewLogo.png" alt="logoHome" /></a>
      <router-link to="/"><i class="fa-solid fa-house"></i> Home</router-link>
      <router-link to="/LoginCadastro"><i class="fa-solid fa-user-plus"></i> Login / Cadastro  </router-link>
      <router-link to="/Imoveis">Imóveis</router-link>
    </nav>
    <transition name="fade" mode="out-in">
    <router-view />
    </transition>
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
export default {
  name: 'app',
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
.fade-enter-active, .fade-leave-active {
transition-duration: 1.0s;
transition-property: opacity;
transition-timing-function: ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
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