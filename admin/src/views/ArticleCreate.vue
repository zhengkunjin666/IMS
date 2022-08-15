<template>
  <div class="articleCreate-section">
    <router-link to="/admin/article"> 返回文章列表 </router-link>
    <div class="article-create">
      <el-form
        :model="articleForm"
        :rules="rules"
        ref="articleForm"
        label-width="100px"
        class="create-articleForm"
        :hide-required-asterisk="true"
        label-size="50px"
      >
        <el-form-item label="标题" prop="title">
          <el-input v-model="articleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="分类" prop="classify_id">
          <el-select
            v-model="articleForm.classify_id"
            placeholder="请选择分类名称"
          >
            <el-option
              v-for="data in classifyData"
              :key="data.id"
              :label="data.name"
              :value="data.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <Editor
            class="articleEditor"
            ref="Editor"
            v-model="articleForm.content"
            @change="callbackChangeEditor"
          ></Editor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('articleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('articleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import classifyModel from "../../models/classify";
import { Editor } from "@/components";
import articleModel from "../../models/article";

export default {
  components: {
    Editor,
  },
  data() {
    return {
      classifyData: [],
      parentContent: "",
      articleForm: {
        title: "",
        classify_id: "",
        content: "",
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "change" }],
        classify_id: [
          { required: true, message: "请选择分类名称", trigger: "change" },
        ],
        content: [{ required: true, message: "请输入内容", trigger: "change" }],
      },
    };
  },
  created() {
    this.classify();
  },
  methods: {
    classify() {
      classifyModel.classify().then((res) => {
        this.classifyData = res;
      });
    },
    callbackChangeEditor(value) {
      this.articleForm.content = value;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = this.articleForm;
          articleModel.addArticle(params).then(() => {
            alert("创建成功！");
            this.resetForm(formName);
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.$refs.Editor.content = "";
    },
  },
};
</script>

<style lang="less" scoped>
.router-link-active {
  font-size: 30px;
}
.article-create {
  margin-top: 30px;
}
/deep/.el-form-item__label {
  font-size: 20px;
  color: #409eff;
}
.articleEditor {
  height: 60vh;
  background: #fff;
  overflow-y: scroll;
}
.el-form-item {
  margin-bottom: 30px;
}
/deep/.quill-editor {
  height: 60vh;
}
/deep/.ql-toolbar.ql-snow {
  background: #409eff;
  position: sticky;
  top: 0;
  z-index: 10;
}
/deep/.el-form-item__content {
  line-height: 24px;
}
.el-button + .el-button {
  float: right;
}
</style>
