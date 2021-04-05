<template>
  <Content :title="contentTitle" :postTitle="albumTitle" :buttonGoBack="true">
    <form @submit.prevent="save()">
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field :class="errors.has('title') ? 'md-invalid' : ''">
              <label>Título</label>
              <md-input
                v-model="album.title"
                name="title"
                v-validate
                data-vv-rules="required|min:3|max:30"
                data-vv-as="título"
              ></md-input>
              <span class="md-error">{{ errors.first("title") }}</span>
            </md-field>
          </div>

          <div class="md-layout-item md-size-50 md-small-size-100"></div>

          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field :class="errors.has('url') ? 'md-invalid' : ''">
              <label>Url</label>
              <md-input
                v-model="album.url"
                name="url"
                v-validate="{ url: { require_protocol: true }, required: true }"
              ></md-input>
              <span class="md-error">{{ errors.first("url") }}</span>
            </md-field>
          </div>

          <div class="md-layout-item md-size-50 md-small-size-100"></div>

          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field :class="errors.has('image') ? 'md-invalid' : ''">
              <label>Imagem</label>
              <md-input
                v-model="album.image"
                name="image"
                v-validate="{ url: { require_protocol: true }, required: true }"
                data-vv-as="imagem"
                @input="album.thumbnailUrl = album.image"
              ></md-input>
              <span class="md-error">{{ errors.first("image") }}</span>
            </md-field>
          </div>

          <div class="md-layout-item md-size-50 md-small-size-100"></div>

          <div
            class="md-layout-item md-size-50 md-small-size-100 md-layout md-alignment-center-left"
          >
            <img
              :src="album.image"
              v-show="album.image && !errors.has('image')"
            />
          </div>

          <div
            class="md-layout-item md-size-100 md-layout md-alignment-center-left"
          >
            <md-field class="md-field--button">
              <md-button type="submit" class="md-primary">{{
                id ? "Alterar" : "Salvar"
              }}</md-button>
            </md-field>
          </div>
        </div>
      </md-card-content>
    </form>
  </Content>
</template>

<script>
import Content from "../../../../shared/components/template/Content/Content";
import AlbumsService from "../../services/AlbumsService";
import { factoryAlbum } from "../../helpers/albums";

const service = new AlbumsService();

export default {
  components: {
    Content,
  },

  props: ["contentTitle"],

  data() {
    return {
      album: { ...factoryAlbum() },
      albumTitle: "",
      id: this.$route.params.id,
    };
  },

  methods: {
    save() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          service
            .save({ data: this.album })
            .then((response) => {
              const data = response.data;

              this.id = data.id;
              this.albumTitle = data.title;

              this.$router.push({
                name: "albumsUpdate",
                params: { id: this.id },
              });
            })
            .catch((error) => console.debug(error));
        }
      });
    },
  },

  created() {
    if (this.id) {
      service.get({ id: this.id }).then((response) => {
        this.album = { ...factoryAlbum(response.data) };
        this.albumTitle = this.album.title;
      });
    }
  },

  updated() {
    if (this.contentTitleCheck !== this.contentTitle) {
      this.contentTitleCheck = this.contentTitle;

      if (!this.$route.params.id) this.album = { ...factoryAlbum() };
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./AlbumsNew";
</style>
