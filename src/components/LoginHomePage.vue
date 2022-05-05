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
        <form @submit="login">
          <input
            type="email"
            class="input-box"
            placeholder="Seu Email..."
            v-model="email"
            required
          />
          <input
            type="password"
            class="input-box"
            placeholder="Sua Senha..."
            v-model="password"
            required
          />
          <button type="submit" class="submit-btn">
            <i class="fas fa-sign-in-alt" /> Login
          </button>
        </form>
        <a href="">Esqueceu a Senha?</a>
        <br />
        <hr />
        <div id="cadastro">
          <br />
          <p>
            Nao tem uma conta? <a href="/CadastroHomePage"> Cadastre-se </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "./../api";
export default {
  name: "LoginHomePage",
  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    async login(e) {
      e.preventDefault();

      const resp = await api.post("auth/login", {
        email: this.email,
        password: this.password,
      });

      const token = resp.data.data.token;
      localStorage.setItem("token", token);
      
      console.log(token);
    },
  },
};
</script>
<style scoped>
#navbarLogin {
  align-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: -5px;
  margin-bottom: 30px;
}
.login {
  width: 100px;
  height: 50px;
  cursor: pointer;
  box-shadow: 5px 7px 3px 0 #00000080;
  border-radius: 8px;
}
.cadastro {
  width: 100px;
  height: 50px;
  cursor: pointer;
  box-shadow: 5px 7px 3px 0 #00000080;
  border-radius: 8px;
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
  height: 400px;
  box-shadow: 15px 20px 3px 0 #00000080;
  border-radius: 8px;
  background-color: rgb(212, 228, 223);
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
  border-radius: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: none;
  text-align: center;
  box-shadow: 5px 7px 3px 0 #00000080;
}
button.submit-btn {
  width: 50%;
  border: 1px solid rgb(0, 0, 0);
  margin: 35px 0 10px;
  height: 32px;
  font-size: 12px;
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
  color: rgb(32, 7, 7);
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
</style>