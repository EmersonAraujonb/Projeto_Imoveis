<template>
  <div class="container">
    <h1>imoveis</h1>
    <div class="anuncio">
      Anuncie aqui seu imóvel!
      <button>
        <i class="fa-solid fa-arrow-right"> </i
        ><router-link to="/CompraVenda" id="click">
          <i class="fa-solid fa-building-user"></i> Clique Aqui </router-link
        ><i class="fa-solid fa-arrow-left"></i>
      </button>
    </div>
    <ul class="container" v-for="imovel in imoveis" :key="imovel.id">
      <li class="container">
        <p><img src="./../services/assets/image2.jpg" /></p>
        <span>{{ imovel.title }}</span>
        <span>Descrição: {{ imovel.description }} </span>
        <span>R$: {{ imovel.price }}</span>
        <span>Local: {{ imovel.address }} </span>
        <span>Nº: {{ imovel.number }}</span>
        <ul>
          <button @click="remove(imovel.id)" class="delete">Apagar</button>
          <button
            type="button"
            class="edit"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Editar
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <v-snackbar
              v-model="snackbar.show"
              absolute
              top
              :color="snackbar.color"
            >
              {{ snackbar.message }}</v-snackbar
            >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Editar imóvel:
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Titulo:</label
                      >
                      <input
                        v-model="imovel.title"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        placeholder="Ex: Casa, Apartamento"
                      />
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label"
                        >Descrição:</label
                      >
                      <textarea
                        v-model="imovel.description"
                        class="form-control"
                        id="message-text"
                        placeholder="Ex: Casa com 2 quartos..."
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Preço:</label
                      >
                      <input
                        v-model="imovel.price"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Local:</label
                      >
                      <input
                        v-model="imovel.address"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        placeholder="Ex: Loteamento São João..."
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Número:</label
                      >
                      <input
                        v-model="imovel.number"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        placeholder="Ex: 10, 20, 30..."
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="exit" data-dismiss="modal">
                    Fechar
                  </button>
                  <button @click="edit(imovel.id)" type="button" class="push">
                    Atualizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import api from "./../api";
import Imoveis from "./../services/Imoveis";
export default {
  data() {
    return {
      imagens: [
        { src: "./../services/assets/image2.jpg" },
        { src: "./../services/assets/image10.jpg" },
      ],
      imoveis: [],
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
    };
  },
  created() {
    Imoveis.listar().then((response) => {
      this.imoveis = response.data.data;
    });
  },
  methods: {
    async edit(id) {
      try {
        const resp = await api.put(`/property/{id}`, {
          title: this.title,
          description: this.description,
          price: this.price,
          address: this.address ,
          number: this.number,
        });
        console.log(id);
        console.log(resp);
        this.snackbar = {
          message: "Imóvel atualizado com sucesso!",
          color: "#2E7D32",
          show: true,
        };
      } catch (e) {
        this.snackbar = {
          message: "Error! Verifique os dados!",
          color: "#E53935",
          show: true,
        };
      }
    },
    remove(id) {
      if (confirm("deseja excluir o imóvel?")) {
        const resp = api.delete(`/property/${id}`).then(() => {
          this.imoveis();
        });
      }
    },
  },
};
</script>
<style scoped>
.container {
  display: grid;
  height: auto;
  grid-template-columns: auto;
  gap: 30px;
  color: black;
  flex-direction: column;
}

.container > li {
  display: flex;
  background-color: rgba(209, 209, 209, 0.8);
  padding: 20px 0;
  font-size: 20px;
  border: 1px solid rgb(197, 196, 196, 0.8);
  box-shadow: 7px 9px 3px 0 #00000080;
  text-align: center;
}
img {
  max-width: 400px;
  max-height: 400px;
}
.anuncio {
  padding-top: 12px;
  height: 130%;
  font-weight: bold;
  background-color: rgb(255, 179, 0);
  width: 100%;
  box-shadow: 7px 9px 3px 0 #00000080;
}
.anuncio > button {
  padding: 2px;
  border-radius: 20px;
  margin-left: 100px;
  background-color: black;
  color: black;
}
.fa-solid.fa-arrow-right,
.fa-solid.fa-arrow-left {
  color: white;
}
#click {
  color: white;
  text-decoration: none;
}
.delete {
  left: 550px;
  width: 80px;
  height: 40px;
  background-color: rgb(106, 56, 56);
  font-size: 12pt;
  border-radius: 20px;
  font-weight: bold;
}
.delete:hover {
  background-color: rgb(255, 3, 3);
}
.edit {
  left: 750px;
  width: 80px;
  height: 40px;
  top: 650px;
  background-color: rgb(255, 221, 0);
  font-size: 12pt;
  border-radius: 20px;
  font-weight: bold;
}
.edit:hover {
  background-color: rgb(255, 142, 3);
}
.push {
  width: 80px;
  height: 40px;
  font-size: medium;
  background-color: rgb(26, 255, 0);
}
.push:hover {
  background-color: rgb(34, 113, 34);
}
.exit {
  width: 80px;
  height: 40px;
  font-size: medium;
  background-color: gray;
}
.exit:hover {
  background-color: rgb(79, 79, 79);
}
span {
  box-shadow: 0px 5px 0 #000000;
  padding: 2px;
}
</style>