<template>
  <div class="header-section">
    <div class="header-right">
      <span class="user-name">{{ userName }}</span>
      <el-button icon="el-icon-service" @click="quit">退出系统</el-button>
    </div>
  </div>
</template>

<script>
import modelsStorage from "../../models/storage";

export default {
  data() {
    return {
      userName: "",
    };
  },
  created() {
    const storage = new modelsStorage();
    const userInfo = storage.get("user");
    this.userName = userInfo.name;
  },
  methods: {
    quit() {
      const storage = new modelsStorage();
      storage.delete("ims");
      window.location.reload();
    },
  },
};
</script>

<style lang="less" scoped>
.header-section {
  height: 64px;
  background-color: #fff;
  border-bottom: solid 1px #e8e8e8;
  padding: 0 16px;
  display: flex;
  justify-content: right;
  align-items: center;
  .user-name {
    color: #409eff;
    margin-right: 30px;
  }
}
</style>
