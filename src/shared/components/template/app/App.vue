<template>
  <div id="app">
    <SectionHeader />
    <SectionSubheader />
    <SectionMenu />
    <SectionContent />
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionSubheader from "../SectionSubheader/SectionSubheader";
import SectionMenu from "../SectionMenu/SectionMenu";
import SectionContent from "../SectionContent/SectionContent";

export default {
  name: "app",

  components: {
    SectionHeader,
    SectionSubheader,
    SectionMenu,
    SectionContent,
  },

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style lang="scss">
@import "./App";
</style>
