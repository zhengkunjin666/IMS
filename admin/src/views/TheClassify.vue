<template>
  <div class="classify-section">
    <el-button
      class="add-classify"
      type="primary"
      @click="dialogAddFormVisible = true"
    >
      添加分类
    </el-button>
    <el-dialog
      :modal-append-to-body="false"
      title="添加分类"
      :visible.sync="dialogAddFormVisible"
    >
      <el-form :model="addForm" :rules="formRules" ref="addForm">
        <el-form-item
          prop="name"
          label="分类名称"
          :label-width="formLabelWidth"
        >
          <el-input
            type="text"
            v-model.trim="addForm.name"
            autocomplete="off"
            style="width: 300px"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('addForm')">
          确 定
        </el-button>
      </div>
    </el-dialog>
    <div class="classify-search">
      <el-input
        class="search-input"
        v-model.trim="search"
        size="40px"
        placeholder="输入关键字搜索"
      >
        <el-button
          class="search-btn"
          slot="append"
          icon="el-icon-search"
          @click="classifyFilter"
        >
          搜索
        </el-button>
      </el-input>
    </div>
    <div class="classify-list">
      <template>
        <el-table :data="tableData" height="80vh" border>
          <el-table-column prop="id" label="id"></el-table-column>
          <el-table-column prop="name" label="分类名称"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button
                @click="toEdit(scope.row)"
                type="text"
                size="small"
                icon="el-icon-edit"
                style="margin-right: 30px"
              >
                编辑
              </el-button>
              <el-dialog
                :modal-append-to-body="false"
                title="编辑分类"
                :visible.sync="dialogEditFormVisible"
              >
                <el-form :model="editForm" :rules="formRules" ref="editForm">
                  <el-form-item
                    prop="name"
                    label="分类名称"
                    :label-width="formLabelWidth"
                  >
                    <el-input
                      type="text"
                      v-model.trim="editForm.name"
                      autocomplete="off"
                      style="width: 300px"
                    >
                    </el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogEditFormVisible = false">
                    取 消
                  </el-button>
                  <el-button type="primary" @click="submitForm('editForm')">
                    确 定
                  </el-button>
                </div>
              </el-dialog>
              <el-button
                type="text"
                size="small"
                icon="el-icon-delete"
                @click="deleteRow(scope.row.id)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
import classifyModel from "../../models/classify";

export default {
  data() {
    return {
      dialogAddFormVisible: false,
      dialogEditFormVisible: false,
      addForm: {
        name: "",
      },
      editForm: {
        name: "",
        id: "",
      },
      formRules: {
        name: [{ required: true, message: "请输入分类名称", trigger: "blur" }],
      },
      formLabelWidth: "130px",
      search: "",
      tableData: [],
    };
  },
  created() {
    this.classify();
  },
  watch: {
    search() {
      this.classify();
    },
  },
  methods: {
    classify() {
      classifyModel.classify().then((res) => {
        this.tableData = res;
      });
    },
    toEdit(data) {
      this.editForm.id = data.id;
      this.editForm.name = data.name;
      this.dialogEditFormVisible = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName == "editForm") {
            const id = this.editForm.id;
            const params = { ...this.editForm };
            classifyModel.updateClassify(id, params).then(() => {
              alert("编辑成功！");
              this.dialogEditFormVisible = false;
              this.classify();
            });
          } else if (formName == "addForm") {
            const params = { ...this.addForm };
            classifyModel.addClassify(params).then(() => {
              alert("添加成功！");
              this.dialogAddFormVisible = false;
              this.addForm.name = "";
              this.classify();
            });
          }
        }
      });
    },
    classifyFilter() {
      const val = this.search;
      const data = this.tableData.filter((data) => {
        let dataStr = "";
        for (let i in data) {
          dataStr = dataStr + data[i] + ",";
        }
        return dataStr.includes(val);
      });
      this.tableData = data;
    },
    deleteRow(id) {
      const msg = confirm("删除后数据将不可恢复，请确认！");
      if (msg) {
        classifyModel.deleteClassify(id);
        this.classify();
      }
    },
  },
};
</script>
<style lang="less" scoped>
.classify-search {
  width: 400px;
  float: right;
}
.classify-list {
  margin-top: 30px;
}
/deep/.el-dialog {
  min-width: 500px;
}
</style>
