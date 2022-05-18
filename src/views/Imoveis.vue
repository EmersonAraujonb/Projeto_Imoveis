<template>
    <div>
        <h1>imoveis</h1>
        <input type="search" name="search" id="search">
        <button type="submit" class="buttonP">Pesquisar</button>
        <ul class="container" v-for="imovel in imoveis" :key="imovel.id">
            <li class="container">
            {{imovel.title}} <br>
            Descrição: {{imovel.description}} <br>
            R$: {{imovel.price}} <br>
            Local: {{imovel.address}}
             </li>
        </ul>
    </div>
</template>
<script>
import Imoveis from './../services/Imoveis'
import api from './../api'
export default {
    data() {
        return {
            imoveis: [],
            show: true,
        }
    },
    mounted() {
        Imoveis.listar().then(response => {
            this.imoveis = response.data.data;
        })
    },
    methods: {

    },
}
</script>
<style scoped>
#search {
    border: 1px solid black;
}

.button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

.buttonP {
    background-color: white;
    color: black;
    border: 2px solid #4dff00;
}

.buttonP:hover {
    background-color: #4CAF50;
    color: white;
}

.container {
    display: grid;
    height: auto;
    align-content: center;
    grid-template-columns: auto auto;
    gap: 10px;
    padding: 10px;
    color: black;
    justify-content: center;

}

.container > li {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    justify-content: center;
    padding: 20px 0;
    font-size: 30px;
    border: 1px solid black;
}
</style>