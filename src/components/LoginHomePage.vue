<template>
  <div class="container">
    <img src="@/assets/fundoTwo.jpg" alt="papelParede" />
    <div class="card">
      <div class="inner-box" id="card">
        <nav id="navbarLogin">
          <router-link to="/LoginHomePage"
            ><button class="login">Login</button></router-link
          >
          <router-link to="/CadastroHomePage"
            ><button class="cadastro">Cadastre-se</button></router-link
          >
        </nav>
        <v-snackbar
          v-model="showSnackbar"
          absolute
          top
          color="#E53935"
        >
          {{ msgError }}</v-snackbar
        >
        <form @submit="login">
          <input
            type="email"
            class="input-box"
            placeholder="Seu Email..."
            v-model="email"
            autocomplete="off"
            required
          />
          <span></span>
          <input
            type="password"
            class="input-box"
            placeholder="Sua Senha..."
            v-model="password"
            autocomplete="off"
            required
          />
          <span></span>
          <button type="submit" class="submit-btn">
            <i class="fas fa-sign-in-alt" /> Login
          </button>
        </form>
        <a href="">Esqueceu a Senha?</a>
        <div>
          <br />
          <p>
            Nao tem uma conta? <a href="/CadastroHomePage"> Cadastre-se </a>
          </p>
        </div>
      </div>
    </div>
     <div class="footer">
      <router-link to="/Contato" class="contato"
        ><i class="fa-solid fa-comment-sms"></i> Contato</router-link
      >
      <p>
        <strong>
          Copyright (c) Construtora Araújo {{ new Date().getFullYear() }} - Todos os direitos
          reservados</strong
        >
      </p>
    </div>
  </div>
</template>
<script>
import api from "./../api";
export default {
  name: "LoginHomePage",
  data() {
    return {
      msgError: "Email e senha inválidos!",
      showSnackbar: false,
      email: null,
      password: null,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        const resp = await api.post("auth/login", {
          email: this.email,
          password: this.password,
        });
        this.$router.push("/");
        const token = resp.data.data.token;
        sessionStorage.setItem("token", token);
        this.email = ''
        this.password = ''
      } catch (e) {
        this.error = e.message;
        this.showSnackbar = true;
      }
    },
  },
};
</script>
<style scoped>
#navbarLogin {
  display:flex;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: -5px;
  margin-bottom: 10px;
 background-color:rgb(212, 228, 223);
 justify-content:space-around;
  align-items: center;
}
.login {
  font-weight: bold;
  border: 1px solid rgb(0, 0, 0);
  width: 100px;
  height: 50px;
  cursor: pointer;
  box-shadow: 5px 7px 3px 0 #00000080;
  border-radius: 8px;
  color: black;
  background-color: white;
}
.cadastro {
 font-weight: bold;
  border: 1px solid rgb(0, 0, 0);
  width: 100px;
  height: 50px;
  cursor: pointer;
  background-color: white;
  border-radius: 8px;
  color: black;
  box-shadow: 5px 7px 3px 0 #00000080;
}
img {
  position: relative;
  width: 100%;
  height: 600px;
}
hr {
  border-color: black;
  box-shadow: 5px 7px 3px 0 #00000080;
}
#cadastro {
  display: inline-block;
}
#cadastro p {
  display: inline-block;
  margin-block-start: 2em;
  margin-block-end: 1em;
  margin-inline-start: 100px;
  margin-inline-end: 0px;
  margin-left: 0;
}
#cadastro a {
  color: rgb(255, 0, 0);
}
* {
  margin: 0;
  padding: 0;
}
.container {
  font-family: sans-serif;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.card {
  width: 350px;
  height: 450px;
  box-shadow: 15px 20px 3px 0 #00000080;
  border-radius: 8px;
  background-color: rgb(212, 228, 223);
  padding-top: 60px;
  position: absolute;
}
.inner-box {
  width: 100%;
  height: 100%;
}
.card h2 {
  font-weight: normal;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 5px 7px 3px 0 #00000080;
}
.input-box {
  width: 100%;
  border: 1px solid rgb(0, 0, 0);
  margin: 6px 0;
  height: 32px;
  border-radius: 20px 0 20px 0px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: none;
  text-align: center;
  box-shadow: 5px 7px 3px 0 #00000080;
}
button.submit-btn {
  font-weight: bold;
  width: 50%;
  border: 2px solid rgb(0, 0, 0);
  margin: 35px 0 10px;
  height: 32px;
  font-size: 14px;
  border-radius: 20px;
  padding: 0 10px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition-delay: 1s;
  box-shadow: 5px 7px 3px 0 #00000080;
}
span {
  font-size: 12px;
}
.card a {
  color: rgb(0, 72, 255);
  display: block;
  text-align: center;
  font-size: 13px;
  margin-top: 8px;
}
::placeholder {
  align-items: center;
}
.card input {
  width: 90%;
  margin-left: 15px;
}
footer {
  position: absolute;
  bottom: 0;
  margin-bottom: 0px;
  padding: 0px;
  height: 50px;
}
footer p {
  text-decoration: black;
  color: rgba(0, 0, 0, 0.981);
}
input:invalid {
  border-color: red;
}
input:valid {
  border-color: green;
}
input:focus {
  border-color: blue !important;
}
span {
  position: relative;
}
input:invalid + span::before {
  content: "✖";
  color: red;
}
input:valid + span::before {
  content: "✓";
  color: green;
}
input + span::before {
  position: absolute;
  right: 10px;
  top: 2px;
}
#img {
  width: 20px;
  height: 20px;
}
.footer {
  position: absolute;
  background-color: #808080;
  height: 100px;
  padding: 30px;
  top: 650px;
  width: 100%;
  left: 0;
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
