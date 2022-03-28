<template>
<div id="nav">
    <div id="logo1"><a href="/"><img :src="imagePreview" alt="logo" id=""></a></div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Financiamento">Financiamento</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
        </ul>
    </div>
</div>
</template>

<script>

export default {
  name: 'NavbarHome',
  data () {
    return {
      imagePreview: './img/logoHome.png',
      abrirMenu: false
    }
  },
  components: {
  },
  methods: {
    toggleMenu (event) {
      this.abrirMenu = !this.abrirMenu
    }
  }
}
</script>
<style scoped>
img{
  width: 100px;
  height: 100px;
}
*{
  margin: 0;
}
#nav{
    display: flex;
    justify-content: space-between;
}
#menu-button{
  width: 40px;
  height: 40px;
  padding: 3px;
  margin-top: 0;
  background-color: rgb(255, 255, 255);
}
#menu-overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  opacity: 0.8;
}
#menu-lateral{
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgb(85, 85, 85);
  width: 30%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: none;
}
ul{
  list-style: none;
}
ul li{
  margin: 40px 0;
  text-align: center;
  font-size: 25px;
}
ul li a{
   color: white;
   text-decoration: none;
}
#menu-lateral.active{
  display: flex;
}
button{
  background-color: rgb(255, 255, 255);
  border: none;
}

</style>
