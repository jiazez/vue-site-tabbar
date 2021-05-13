<template>
  <div class="layout">
    <headerTop />
    <router-view></router-view>
    <h1>footer</h1>
  </div>
</template>
<script>
import headerTop from "@/components/header";

export default {
  data() {
    return {};
  },
  components: {
    headerTop,
  },
};
</script>
<style scoped>
</style>