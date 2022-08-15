<template>
  <div class="login-container">
    <div class="login-bd">
      <div class="company-info-container">
        <img class="company-info-logo" src="@/assets/logo.png" />
        <div class="company-info-name">极客信息发布管理</div>
      </div>
      <div class="login-form-container">
        <div class="login-form-password">
          <el-form
            :model="passwordFrom"
            status-icon
            :rules="passwordRules"
            ref="passwordFrom"
          >
            <el-form-item prop="phone">
              <el-input
                type="number"
                prefix-icon="el-icon-mobile-phone"
                placeholder="手机号码"
                v-model="passwordFrom.phone"
                autocomplete="off"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                prefix-icon="el-icon-lock"
                placeholder="登录密码"
                v-model="passwordFrom.password"
                autocomplete="off"
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="success"
                style="width: 100%; margin-top: 30px"
                @click="submitForm('passwordFrom')"
              >
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modelsUser from "../../models/user";
import modelsStorage from "../../models/storage";

export default {
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value !== "") {
        if (value.length < 6 || value.length > 16) {
          callback(new Error("请输入6~16位密码"));
          return false;
        } else if (value.indexOf(" ") > -1) {
          callback(new Error("请输入不包含空格的字符"));
          return false;
        } else if (!/^[^\u4e00-\u9fa5]*$/.test(value)) {
          callback(new Error("密码不能输入汉字"));
          return false;
        } else {
          callback();
        }
      }
    };
    return {
      passwordFrom: {
        phone: "",
        password: "",
      },
      passwordRules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "目前只支持中国大陆的手机号码",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePassword, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = { ...this.passwordFrom };
          modelsUser.login(params).then((res) => {
            const { token } = res;
            const { userInfo } = res;
            const storage = new modelsStorage();
            storage.set("ims", token);
            storage.set("user", userInfo);
            window.location.reload();
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  min-width: 1000px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #f0f2f5;
  background-position: center;
  box-sizing: border-box;
}
.login-bd {
  width: 1000px;
  text-align: center;
  margin: 0 auto;
}
.company-info-container {
  .company-info-logo {
    height: 60px;
    margin-bottom: 30px;
  }
  .company-info-name {
    line-height: 44px;
    font-size: 40px;
    font-weight: 600;
    font-family: Avenir;
  }
}
.company-info-desc {
  margin: 12px 0 40px;
  font-size: 14px;
  opacity: 0.5;
  text-align: center;
}
.login-form-container {
  width: 500px;
  margin: 60px auto 0;
}
.el-form-item {
  margin-bottom: 30px;
}
.flex-cell {
  text-align: left;
}
</style>
