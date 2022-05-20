<template>
  <div class="container">
    <h1>imoveis</h1>
    <div class="anuncio">Anuncie aqui seu imóvel! <button> <i class="fa-solid fa-arrow-right"> </i><router-link to="/CompraVenda" id="click"> <i class="fa-solid fa-building-user"></i> Clique Aqui </router-link><i class="fa-solid fa-arrow-left"></i></button></div>
    <ul class="container" v-for="imovel in imoveis" :key="imovel.id">
      <li class="container">
        <img src="./../services/assets/image2.jpg" />
        {{ imovel.title }} <br />
        Descrição: {{ imovel.description }} <br />
        R$: {{ imovel.price }} <br />
        Local: {{ imovel.address }}
      </li>
    </ul>
  </div>
</template>
<script>
import Imoveis from "./../services/Imoveis";
export default {
  data() {
    return {
      imagens: [
        { src: "./../services/assets/image2.jpg" },
        { src: "./../services/assets/image10.jpg" },
      ],
      imoveis: [],
      show: true,
    };
  },
  created() {
    Imoveis.listar().then((response) => {
      this.imoveis = response.data.data;
    });
  },
  methods: {},
};
</script>
<style scoped>
.container {
  display: grid;
  height: auto;
  grid-template-columns: auto;
  gap: 30px;
  padding: 10px;
  color: black;
}

.container > li {
  display: flex;
  background-color: rgba(209, 209, 209, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  border: 1px solid rgb(197, 196, 196, 0.8);
  box-shadow: 7px 9px 3px 0 #00000080;
}
img {
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
}
.anuncio {
  padding-top: 12px;
  height: 130%;
  font-weight: bold;
  background-color: rgb(255, 179, 0);
  width: 100%;
  box-shadow: 7px 9px 3px 0 #00000080;
}
.anuncio > button{
    padding: 2px;
    border-radius:20px;
    margin-left: 100px;
    background-color: black;
    color: black;
}
.fa-solid.fa-arrow-right, .fa-solid.fa-arrow-left{
 color: white;
}
#click{
  color: white;
  text-decoration: none;
}
</style>