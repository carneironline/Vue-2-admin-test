<template>
  <section class="section-menu">
    <md-list>
      <md-list-item
        v-for="route in routes"
        :to="{ name: route.name }"
        :key="route.path"
      >
        <md-icon>{{ route.ico }}</md-icon>
        <span class="md-list-item-text">{{ route.title }}</span>
      </md-list-item>
    </md-list>
  </section>
</template>

<script>
import routes from "../../../../router/routes";

export default {
  data() {
    return {
      routes: routes.filter((route) => route.menu),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./SectionMenu";
</style>
