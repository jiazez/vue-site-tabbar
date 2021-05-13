<template>
  <div class="header" :style="style">
    <div class="img">
      <h1>name</h1>
    </div>
    <z-tab-bar :list="tabBar" :tabColor="style.tabColor" class="tab"/>
  </div>
</template>
<script>
import ZTabBar from "@/components/common/ZTabBar";
export default {
  data() {
    return {
      tabBar: [
        { name: "tab1" },
        {
          name: "tab2",
          children: [{ name: "tab2-1" }, { name: "tab2-2" }],
        },
        {
          name: "tab3",
          children: [{ name: "tab3-1" }],
        },
        { name: "tab4" },
        { name: "tab5" },
        { name: "tab6" },
      ],
      style: {
        backgroundColor: "",
        color: "#fff",
        tabColor: "#fff",
      },
      color: false,
      activeName: "second",
    };
  },
  components: {
    ZTabBar,
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 100) {
        this.style.backgroundColor = `rgba(255, 255, 255,1)`;
        this.style.color = "#000";
        this.style.tabColor = "#00B166";
        this.style.boxShadow = "0px 2px 10px #ccc";
      } else {
        this.style.backgroundColor = "transparent";
        this.style.color = "#fff";
        this.style.tabColor = "#fff";
        delete this.style.boxShadow;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  min-width: 1080px;
  height: 100px;
  position: fixed;
  left: 0;
  top: 0;
  transition: all linear 0.5s;
  display: flex;
  align-items: center;
  z-index: 9;
}
.img {
  flex: 1;
  text-align: center;
}
.tab{
  flex:1
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>