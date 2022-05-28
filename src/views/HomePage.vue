<template>
  <div class="container">
    <img  class="imgHome1" src="../assets/imagemHome.jpg" alt="predio" />
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
     <div class="footer">
      <router-link to="/Contato" class="contato"
        ><i class="fa-solid fa-comment-sms"></i> Contato</router-link
      >
      <p>
        <strong>
          Copyright (c) Construtora Araújo 2022 - Todos os direitos
          reservados</strong
        >
      </p>
    </div>
  </div>
</template>
<script>
import HomePage from "../views/HomePage.vue";
export default {
  name: HomePage,
};
</script>
<style scoped>
.footer {
  position: absolute;
  background-color: #808080;
  height: 100px;
  padding: 30px;
  top: 970px;
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
body {
  width: 100%;
}
h1 {
  top: 180px;
  color: rgb(14, 40, 50);
  position: absolute;
  left: 630px;
}
.container {
  display: flex;
  border-radius: 2%;
  margin:0;
  padding: 0;
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
  left: 600px;
}
.lgdImg2 {
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  color: rgb(0, 0, 0);
  text-align: center;
  text-align: justify;
  text-indent: 20px;
  margin: 450px 10px;
  display: flex;
  position: absolute;
  width: 460px;
  left: 120px;
}
p::first-letter {
  font-size: 150%;
}
.imgHome1 {
  position: relative;
  margin-top: 40px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin-left: 130px;
}
.imgHome2 {
  position: relative;
  margin-top: 400px;
  width: 400px;
  height: 400px;
  left: 200px;
  border-radius: 50%;
}
</style>

