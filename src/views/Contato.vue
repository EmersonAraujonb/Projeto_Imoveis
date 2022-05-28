<template>
<div class="container">
<h1>Contato Comercial:</h1>
<ul>
  <i class="fa-solid fa-envelope"></i><strong> Email </strong> <br> corretoraaraujo@hotmail.com <br>
  <i class="fa-solid fa-phone"></i> <strong> Telefone comercial</strong>  <br> (77) 3600-0000 <br>
 <i class="fa-solid fa-location-dot"></i> <strong> Endereço</strong> <br> Morumbi, 1074 - Sao Paulo - SP <br><br>
 <h2>Contato Pessoal:</h2>
  <i class="fa-solid fa-envelope"></i><strong>  Email</strong> <br> emersonsantos0302@gmail.com <br>
 <i class="fa-brands fa-whatsapp-square"></i><strong>  WhatsApp</strong> <br> (77) 998648013
</ul>
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
<style scoped>
.footer {
  position: relative;
  background-color: #808080;
  height: 100px;
  padding: 30px;
  top:80px;
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
