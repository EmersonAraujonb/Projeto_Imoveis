<template>
  <div class="container">
    <h1>Cadastre seu imóvel</h1>
     <v-snackbar v-model="snackbar.show" absolute top :color="snackbar.color">
          {{ snackbar.message }}</v-snackbar>
    <form @submit="pushImoveis">
      <div class="cadastroImovel">
        <label for="title" class="label">Titulo:</label>
        <input type="text" class="input" v-model="title" placeholder="Titulo..." required>
      </div>
      <div class="cadastroImovel">
        <label for="title" class="label">Descrição:</label>
        <input type="text" v-model="description" class="input" placeholder="Descrição..." required>
      </div>
      <div class="cadastroImovel">
        <label for="title" class="label">Preço:</label>
        <input type="text" v-model="price" class="input" placeholder="Preço..." required>
      </div>
      <div class="cadastroImovel">
        <label for="title" class="label">Endereço:</label>
        <input type="text" v-model="address" class="input" placeholder="Endereço..." required>
      </div>
      <div class="cadastroImovel">
        <label for="title" class="label">Número:</label>
        <input type="text" v-model="number" class="input" placeholder="Número..." required>
        <button type="submit" class="btn">Cadastrar</button>
      </div>
    </form>
    </div>
</template>
<script>
import api from "./../api";
export default {
  data() {
    return {
      snackbar: {
        show: false,
        message: null,
        color: null,
      },
      title: "",
      description: "",
      price: null,
      address: "",
      number: null,
      token: ''
    }
  },
  methods: {
    async pushImoveis(e) {
      e.preventDefault();
     const token = sessionStorage.getItem("token");
       headers: {
            Authorization: 'Bearer' + token
          }
      try {
        const resp = await api.post("/property", {
          title: this.title,
          description: this.description,
          price: this.price,
          address: this.address,
          number: this.number
        });
        this.snackbar = {
          message: "Imóvel cadastrado com sucesso!",
          color: "#2E7D32",
          show: true,
        };
        setTimeout((pushImoveis = true) => {
        this.$router.push("/imoveis");
      }, 4000);
      } catch (e) {
        this.snackbar = {
          message: "Error! Verifique os dados!",
          color: "#E53935",
          show: true,
        };
      }
    },
  },
}
</script>
<style scoped>
.container {
  height: 600px;
  background-color: rgb(255, 255, 255);
}

.cadastroImovel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.cadastroImovel2 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.cadastroImovel3 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.btn {
  background-color: rgb(2, 121, 24);
  color: rgb(255, 255, 255);
  border-radius: 5px;
  width: 100px;
  height: 50px;
  border: 2px solid black;
  transition: .5s;
  position: absolute;
  top: 650px;
}

.btn:hover {
  background-color: transparent;
  color: green
}

.label {
  font-family: monospace;
  font-weight: bold;
  position: absolute;
  padding: 10px;
}

.input {
  top: 25px;
  border-style: groove;
  position: relative;
  margin: 10px;
  width: 40%;
  border: 1px solid rgb(0, 0, 0);
  height: 32px;
  border-radius: 20px 0 20px 0px;
  padding: 10px;
  outline: none;
  text-align: center;
  box-shadow: 5px 7px 3px 0 #00000080;
}

.input::placeholder {
  color: rgb(0, 57, 80);
}

#file {
  top: 12px;
  margin: 10px;
  position: relative;
  align-items: center left;
}
</style>