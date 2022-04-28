<template>
  <div>
    <h1>Mural</h1>
   <div class="col-md-4" id="passarmouse">
     <p>teste</p>
 </div>
            
<div class="col-md-4" id="mostrar">
   <div class="col-md-12">
  <a href="/LoginCadastro">LoginCadastro</a>
   </div>
   <div class="col-md-12">
     <label class="control-label" id="nomefornecedor">bbb</label>
   </div>
   <div class="col-md-12">
     <label class="control-label" id="ruafornecedor">ccc</label>
     <label class="control-label" id="nfornecedor">ddd</label>
   </div>
   <div class="col-md-12">
      <label class="control-label" id="bairrofornecedor">eee</label>
      <label class="control-label" id="cidadefornecedor">fff</label>
    </div>
</div>
  </div>
</template>
<style scoped>
img{
   position: relative;
    width: 100%;
    height: 600px;
}
#mostrar {
    display: none;
}

#passarmouse:hover + #mostrar {
    display: block;
}
</style>
