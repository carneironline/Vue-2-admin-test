<template>
  <Content :title="contentTitle"> </Content>
</template>

<script>
import Content from "../../template/Content/Content";

export default {
  components: {
    Content,
  },

  props: ["contentTitle"],
};
</script>

<style lang="scss" scoped>
@import "./Home";
</style>
