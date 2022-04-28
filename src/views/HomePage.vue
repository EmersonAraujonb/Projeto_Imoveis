<template>
  <div class="container">
    <img src="../assets/imagemHome.jpg" alt="predio" />
    <h1>Encontre o imovél perfeito.</h1>
    <p class="lgdImg1">
      Compra e venda de imóveis, sem burocracia e enrolaçâo? É com a gente!
      Corretores com experiência no mercado e taxas justas que vão fazer você
      sorrir demais. Entre em contato com a nossa equipe para ter a melhor
      solução para o seu problema.
    </p>
    <img class="imgHome2" src="../assets/imagemHome2.jpg" alt="casa" />
    <p class="lgdImg2">
      Se você precisa de um imóvel, mas está cansado dessa jornada de busca que
      nunca da em nada, eu vou te ajudar! Com a melhor equipe do mercado e anos
      de experiência, em apenas uma conversa eu consigo encontrar o que tem de
      melhor para você, dentro do seu orçamento. Entre em contato com a nossa
      corretora para que posssamos te ajudar nessa jornada!
    </p>
  </div>
</template>
<script>
import HomePage from "../views/HomePage.vue";
export default {
  name: HomePage,
};
</script>
<style scoped>
body {
  width: 100%;
}
h1 {
  top: 180px;
  color: rgb(14, 40, 50);
  position: absolute;
  left: 500px;
}
.container {
  display: flex;
  background-color: rgb(237, 234, 234);
  border-radius: 5%;
}
.lgdImg1 {
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  color: rgb(0, 0, 0);
  text-align: center;
  text-align: justify;
  text-indent: 20px;
  margin: 180px 10px;
  display: flex;
  position: absolute;
  width: 500px;
  left: 450px;
}
.lgdImg2 {
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  color: rgb(0, 0, 0);
  text-align: center;
  text-align: justify;
  text-indent: 20px;
  margin: 550px 10px;
  display: flex;
  position: absolute;
  width: 500px;
  left: 30px;
}
p::first-letter {
  font-size: 150%;
}
img {
  padding: 30px;
  width: 400px;
  height: 400px;
}
.imgHome2 {
  display: flex;
  position: relative;
  margin-top: 400px;
  width: 400px;
  height: 400px;
  right: -80px;
}
</style>>

</style>