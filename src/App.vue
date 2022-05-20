<template>
  <div id="app">
    <nav>
      <a href="/"><img src="./assets/NewLogo.png" alt="logoHome" /></a>
      <router-link to="/"><i class="fa-solid fa-house"></i> Home</router-link>
      <router-link to="/Imoveis">Imóveis</router-link>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Sessão
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="item1" href="/LoginHomePage">Login</a>
    <a class="dropdown-item" id="item2" href="/CadastroHomePage">Cadastre-se</a>
    <a @click="Logout" class="dropdown-item" id="item3">Logout</a>
  </div>
  <a  class="msgLogout" v-if="message">Logout realizado com sucesso!</a>
</div>
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
      <p><strong> Copyright (c) Construtora Araújo 2022 - Todos os direitos reservados</strong></p>
    </footer>
  </div>
</template>
<script>

export default {
  name: 'app',
  data() {
    return {
      message: false
    }
  },
  methods: {
    async Logout(e) {
    localStorage.removeItem("token");
     this.$router.push("/LoginHomePage");
     this.message = true
     setTimeout(() => {
        this.message = false
     }, 3000);
  }
    }
   

};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  display: flex;
  justify-content: space-around;
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
.dropdown-item{
  background-color: white;
}
#dropdownMenuButton{
  background-color: white;
  color: black;
}
#item1:hover{
  background-color: green;
}
#item2:hover{
  background-color: blue;
}
#item3:hover{
  background-color: red;
}
.msgLogout {
  padding: 20 20px; 
  display: flex;
  background-color: red;
  color: white;
  align-items: center;
}
</style>