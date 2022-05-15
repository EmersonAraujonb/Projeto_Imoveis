<template>
    <div>
        <h1>imoveis</h1>
        <input type="search" name="search" v-model="search" id="search">
        <button type="submit" class="buttonP">Pesquisar</button>
     <div class="container">
            <div v-for="imovel in imoveis" :key="imovel.id">{{ imovel.name }}</div>
        </div>
    </div>
</template>
<script>
import Imoveis from './../services/Imoveis'
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
    /* Green */
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

}

.container>div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
    border: 1px solid black;
}
</style>