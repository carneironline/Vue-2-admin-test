<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title" style="flex: 1; text-align: left">
          {{ title }} {{ postTitle && `- ${postTitle}` }}</span
        >

        <md-button
          :to="{ name: 'albumsCreate' }"
          class="md-primary"
          v-if="buttonNew"
          ><md-icon title="Novo">add</md-icon>
        </md-button>

        <md-button
          class="md-primary"
          v-if="buttonGoBack"
          @click="goBack()"
          title="Voltar"
          ><md-icon>arrow_back</md-icon></md-button
        >
      </md-app-toolbar>

      <md-app-content>
        <slot></slot>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: false,
      type: String,
    },
    postTitle: {
      required: false,
      type: String,
    },
    buttonNew: {
      required: false,
      type: Boolean,
    },
    buttonGoBack: {
      required: false,
      type: Boolean,
    },
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Content";
</style>
