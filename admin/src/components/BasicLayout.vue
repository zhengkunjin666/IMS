<template>
  <div class="page-wrapper">
    <Sider class="page-sider" />
    <div class="page-mainer">
      <Header class="page-header" />
      <div class="page-body">
        <router-view></router-view>
      </div>
      <Footer class="page-footer" />
    </div>
  </div>
</template>

<script>
import Header from "./BasicLayoutHeader.vue";
import Footer from "./BasicLayoutFooter.vue";
import Sider from "./BasicLayoutSider.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    Sider,
  },
};
</script>

<style lang="less">
.page-wrapper {
  min-width: 1000px;
  min-height: 100vh;
  background-color: #f0f2f5;
  display: flex;
}
.page-sider {
  flex: none;
}
.page-mainer {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  .page-body {
    flex: 1;
    padding: 20px;
    background: #f0f2f5;
  }
}
</style>
