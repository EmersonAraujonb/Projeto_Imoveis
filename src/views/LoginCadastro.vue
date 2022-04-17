<template>
  <div>
    <LoginHomePage />
    <CadastroHomePage />
  </div>
</template>

<script>
import LoginHomePage from "../components/LoginHomePage.vue";
import CadastroHomePage from '../views/CadastroHomePage.vue';

export default {
  name: "LoginCadastro",
  components: {
    LoginHomePage,
    CadastroHomePage
  },
};
console.table(["Emerson", "Maria", "Joâo", "Pedro"]);
</script>
