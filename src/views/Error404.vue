<template>
  <div>
    <h1>Página não encontrada</h1>
    <h2>Ops! Parece que essa página não existe.</h2>
    <img src="@/assets/robozinho.png" alt="notFound"/>
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
export default {
  
}
</script>
<style scoped>
.footer {
  position: absolute;
  background-color: #808080;
  height: 100px;
  padding: 30px;
  top: 600px;
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
h1,h2{
  color: rgb(255, 7, 7);
}
img{
  display: flex;
  height: 390px;
 position: relative;
 left: 350px;
}
</style>