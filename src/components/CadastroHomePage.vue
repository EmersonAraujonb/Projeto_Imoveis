<template>
  <div class="container">
    <img src="@/assets/fundoTwo.jpg" alt="papelParede" />
    <div class="card">
      <div class="inner-box" id="card">
        <nav id="navbarCadastro">
          <router-link to="/CadastroHomePage"><button class="cadastro">Cadastre-se</button></router-link>
          <router-link to="/LoginHomePage"><button class="login">Login</button></router-link>
        </nav>
        <v-snackbar v-model="snackbar.show" absolute top :color="snackbar.color">
          {{ snackbar.message }}</v-snackbar>
        <form @submit="cadastrar">
          <input type="name" class="input-box" placeholder="Seu Nome..." v-model="name" required />
          <span></span>
          <input type="sobrenome" class="input-box" placeholder="Seu Sobrenome..." v-model="last_name" required />
          <span></span>
          <input type="email" class="input-box" placeholder="Seu Email..." v-model="email" required />
          <span></span>
          <input type="password" class="input-box" placeholder="Sua Senha..." v-model="password" required />
          <span></span>
          <button type="submit" class="submit-btn">
            <i class="fa-solid fa-user-plus"></i> Cadastrar
          </button>
        </form>
        <br />
        <hr />
        <div>
          <br />
          <p>
            <br />
            <br /><strong>
              Já tem uma conta? Faça login<a href="/LoginHomePage"> Login </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "./../api";
export default {
  name: "CadastroHomePage",
  data() {
    return {
      snackbar: {
        show: false,
        message: null,
        color: null,
      },
      name: null,
      last_name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    async cadastrar(e) {
      e.preventDefault();

      try {
        const resp = await api.post("auth", {
          name: this.name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
        });
        this.snackbar = {
          message: "Usuário cadastrado com sucesso!",
          color: "#2E7D32",
          show: true,
        };
          this.name = '',
          this.last_name = ''
          this.email = ''
          this.password = ''
      } catch (e) {
        this.snackbar = {
          message: "Usuário já cadastrado com esses dados!",
          color: "#E53935",
          show: true,
        };
      }
    },
  },
};
</script>
<style scoped>
#navbarCadastro {
  display:flex;
  justify-content:space-around;
  align-content: center;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: -5px;
  margin-bottom: 30px;
  background-color: rgb(187, 184, 234);
   
}

.login {
  font-weight: bold;
  color: black;
  width: 100px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  box-shadow: 5px 7px 3px 0 #00000080;
  border-radius: 8px;
}

.login:hover {
  background-color: rgb(97, 97, 240);
}

.cadastro {
  font-weight: bold;
  color: black;
  width: 100px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  box-shadow: 5px 7px 3px 0 #00000080;
  border-radius: 8px;
}

.cadastro:hover {
  background-color: rgb(97, 97, 240);
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
  color: rgb(255, 255, 255);
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
  width: 500px;
  height: 550px;
  box-shadow: 15px 20px 3px 0 #00000080;
  border-radius: 8px;
  background-color: rgb(187, 184, 234);
  padding-top: 30px;
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
  font-size: 16px;
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
  color: rgb(255, 0, 0);
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

input:invalid+span::before {
  content: "✖";
  color: red;
}

input:valid+span::before {
  content: "✓";
  color: green;
}

input+span::before {
  position: absolute;
  right: 10px;
  top: 1px;
}
</style>