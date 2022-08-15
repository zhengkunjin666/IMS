<template>
  <div class="sider-section">
    <div class="logo-section">
      <img class="logo-img" src="@/assets/logo.png" alt="" />
      <span>信息管理</span>
    </div>
    <Menu class="menu-section" />
  </div>
</template>

<script>
import Menu from "./BasicLayoutSiderMenu.vue";

export default {
  components: {
    Menu,
  },
};
</script>

<style lang="less">
.sider-section {
  font-size: 18px;
  position: relative;
  border-right: solid 1px #e8e8e8;
  background-color: #fff;
  transition: all 0.2s ease;
}
.logo-section {
  width: 300px;
  height: 64px;
  background-color: #fff;
  z-index: 1;
  padding-left: 14px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  .logo-img {
    height: 40px;
    margin-right: 30px;
  }
}
</style>
