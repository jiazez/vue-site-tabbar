<template>
  <div class="tab" ref="box">
    <div class="tab-bar">
      <div
        class="item"
        @click="clickbar(i)"
        v-for="(item, i) in list"
        :key="i"
        ref="list"
        @mouseover="handleOver(i)"
        @mouseleave="handleLeave(i)"
      >
        {{ item.name }}
        <img
          src="../../assets/ic-down-white.png"
          alt=""
          class="icon-bottom"
          v-if="tabColor === '#fff' && item.children && item.children.length"
        />
        <img
          src="../../assets/ic-down-gray.png"
          alt=""
          class="icon-bottom"
          v-if="tabColor !== '#fff' && item.children && item.children.length"
        />
        <div class="menu-box" v-if="i === hoverIndex">
          <div class="menu">
            <div
              v-for="(item, index) in item.children"
              :key="index"
              class="menu-item"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bar" ref="bar" :style="{ background: tabColor }"></div>
  </div>
</template>
<script>
export default {
  props: ["list", "tabColor"],
  data() {
    return {
      hoverIndex: null,
    };
  },
  methods: {
    clickbar(val) {
      let a = this.$refs.list[val].offsetLeft;
      let b = this.$refs.list[val].clientWidth / 2 - 10;
      let c = 0;
      if (this.list[val]?.children?.length) {
        c = -7;
      }
      this.$refs.bar.style.transform = `translateX(${a + b + c}px)`;
    },
    handleOver(i) {
      if (this.list[i]?.children?.length) {
        this.hoverIndex = i;
      }
    },
    handleLeave(i) {
      if (this.list[i]?.children?.length) {
        this.hoverIndex = null;
      }
    },
  },
  mounted() {
    this.clickbar(0);
  },
};
</script>
<style scoped>
.tab {
  height: 40px;
  font-size: 18px;
  position: relative;
  margin-top: 20px;
}
.tab-bar {
  display: flex;
  flex-flow: row nowrap;
  cursor: pointer;
}
.item {
  margin: 0 15px;
  position: relative;
  padding-bottom: 32px;
}
.bar {
  position: absolute;
  width: 20px;
  height: 4px;
  border-radius: 2px;
  left: 0;
  bottom: 0;
  transition: 0.5s ease;
}
.icon-bottom {
  width: 10px;
}
.menu-box {
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translate(-60px, 0px);
  transition: all linear 0.5s;
  z-index: 8;
}
.menu {
  position: absolute;
  top: 0px;
  left: 0;
  width: 120px;
  border-radius: 8px;
  padding: 26px 15px;
  background: #fff;
}
.menu-item {
  text-align: center;
  height: 30px;
  line-height: 30px;
  color: #686868;
  font-size: 16px;
}
.menu-item:hover {
  font-weight: 600;
  color: #252525;
}
</style>