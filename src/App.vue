<template>
  <div id="app">
    <nav>
      <a href="/"><img src="./assets/slogan.png" alt="logoHome" /></a>
      <router-link to="/"><i class="fa-solid fa-house"></i> Home</router-link>
      <router-link to="/Imoveis"
        ><i class="fa-solid fa-building"></i> Imóveis</router-link
      >

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sessão
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" id="item1" href="/LoginHomePage"
            ><i class="fa-solid fa-user"></i> Login</a
          >
          <a class="dropdown-item" id="item2" href="/CadastroHomePage"
            ><i class="fa-solid fa-id-card"></i> Cadastre-se</a
          >
          <a @click="Logout" class="dropdown-item" id="item3">
            <i class="fa-solid fa-power-off"></i> Sair</a
          >
        </div>
        <a class="msgLogout" v-if="message">Logout realizado com sucesso!</a>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <br />
    <br />
    <hr />
    <footer>
      <router-link to="/Contato" class="contato"
        ><i class="fa-solid fa-comment-sms"></i> Contato</router-link
      >
      <p>
        <strong>
          Copyright (c) Construtora Araújo 2022 - Todos os direitos
          reservados</strong
        >
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      message: false,
    };
  },
  methods: {
    async Logout(e) {
      localStorage.removeItem("token");
      this.$router.push("/LoginHomePage");
      this.message = true;
      setTimeout(() => {
        this.message = false;
      }, 3000);
    },
  },
};
</script>
<style scoped>
img {
  width: 200px;
  height: 100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #808080;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #00fa9a;
  text-decoration: none;
}
.router-link-exact-active:hover,
a:hover {
  color: rgb(2, 225, 255);
}
.dropdown-item {
  background-color: white;
  color: black;
}
.dropdown-menu {
  background-color: #808080;
  color: black;
}
#dropdownMenuButton {
  background-color: white;
  color: black;
}
#item1:hover {
  background-color: green;
  color: black;
}
#item2:hover {
  background-color: blue;
  color: black;
}
#item3:hover {
  background-color: red;
  color: black;
}
.msgLogout {
  padding: 20 20px;
  display: flex;
  background-color: white;
  color: white;
  align-items: center;
  color: black;
}
footer {
  position: relative;
  background-color: #808080;
  height: 100px;
  padding: 10px;
}
.contato {
  padding: 10px;
  color: white;
  font-size: 16pt;
  text-decoration: none;
}
.contato:hover {
  color: white;
}
</style>