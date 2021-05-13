<template>
  <div class="home">
    <div class="banner-box">
      <div class="mask"></div>
      <div v-for="item,index in 100" :key="index">{{item}}</div>
    </div>
  </div>
</template>
<script>
import "element-ui/lib/theme-chalk/index.css";
export default {
  data() {
    return {
      arr: [],
    };
  },
  methods: {},
};
</script>
<style scoped>
.home {
  font-size: 16px;
  background: "#f5fef8";
}
.banner-box {
  position: relative;
}
.banner {
  width: 100%;
  display:block;
}
.mask{
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
</style>