<template>
  <Content :title="contentTitle" :buttonNew="true">
    <md-table v-model="tableData" md-sort="id" md-sort-order="asc" md-card>
      <md-table-row
        slot="md-table-row"
        slot-scope="{ item }"
        @click="goToAlbum(item.id)"
      >
        <md-table-cell md-label="ID" md-numeric md-sort-by="id">{{
          item.id
        }}</md-table-cell>
        <md-table-cell md-label="Title" md-sort-by="title">{{
          item.title
        }}</md-table-cell>
        <md-table-cell md-label="ThumbnailUrl">
          <img class="md-table-cell__thumb" :src="item.thumbnailUrl" />
        </md-table-cell>
      </md-table-row>
    </md-table>
  </Content>
</template>

<script>
import Content from "../../../../shared/components/template/content/Content";
import AlbumsService from "../../services/AlbumsService";

const service = new AlbumsService();

export default {
  components: {
    Content,
  },

  props: ["contentTitle"],

  data() {
    return {
      tableData: [],
    };
  },

  // beforeRouteEnter(to, from, next) {
  //   async function init() {
  //     const list = await getAlbumList();
  //     next((vm) => (vm.tableData = list));
  //   }

  //   init();
  // },

  methods: {
    goToAlbum(id) {
      this.$router.push({ name: "albumsUpdate", params: { id } });
    },
  },

  async created() {
    const response = await service.list();

    this.tableData = response.data;
  },
};
</script>

<style lang="scss" scoped>
@import "./Albums";
</style>
