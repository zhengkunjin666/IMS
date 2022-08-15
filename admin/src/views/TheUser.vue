<template>
  <div class="user-section">
    <el-button
      class="add-user"
      type="primary"
      @click="dialogAddFormVisible = true"
    >
      添加用户
    </el-button>
    <el-dialog
      :modal-append-to-body="false"
      title="添加用户"
      :visible.sync="dialogAddFormVisible"
    >
      <el-form :model="addForm" :rules="formRules" ref="addForm">
        <el-form-item prop="name" label="姓名" :label-width="formLabelWidth">
          <el-input
            type="text"
            v-model.trim="addForm.name"
            style="width: 300px"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="phone" label="电话" :label-width="formLabelWidth">
          <el-input
            type="number"
            v-model.trim="addForm.phone"
            style="width: 300px"
          >
          </el-input>
        </el-form-item>
        <el-form-item
          prop="password"
          label="密码"
          :label-width="formLabelWidth"
        >
          <el-input
            type="text"
            v-model.trim="addForm.password"
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
    <div class="user-search">
      <el-input v-model="search" size="40px" placeholder="输入关键字搜索">
        <el-button slot="append" icon="el-icon-search" @click="usersFilter">
          搜索
        </el-button>
      </el-input>
    </div>
    <div class="user-list">
      <template>
        <el-table :data="tableData" height="80vh" border>
          <el-table-column prop="id" label="id" width="100"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="phone" label="电话"></el-table-column>
          <el-table-column prop="password" label="密码"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
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
                title="编辑用户"
                :visible.sync="dialogEditFormVisible"
              >
                <el-form :model="editForm" :rules="formRules" ref="editForm">
                  <el-form-item
                    prop="name"
                    label="姓名"
                    :label-width="formLabelWidth"
                  >
                    <el-input
                      type="text"
                      v-model.trim="editForm.name"
                      style="width: 300px"
                    >
                    </el-input>
                  </el-form-item>
                  <el-form-item
                    prop="phone"
                    label="电话"
                    :label-width="formLabelWidth"
                  >
                    <el-input
                      type="number"
                      v-model.trim="editForm.phone"
                      style="width: 300px"
                    >
                    </el-input>
                  </el-form-item>
                  <el-form-item
                    prop="password"
                    label="密码"
                    :label-width="formLabelWidth"
                  >
                    <el-input
                      type="text"
                      v-model.trim="editForm.password"
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
import userModel from "../../models/user";

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
      dialogAddFormVisible: false,
      dialogEditFormVisible: false,
      formLabelWidth: "130px",
      search: "",
      tableData: [],
      addForm: {
        name: "",
        phone: "",
        password: "",
      },
      editForm: {
        name: "",
        phone: "",
        password: "",
        id: "",
      },
      formRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
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
  created() {
    this.users();
  },
  watch: {
    search() {
      this.users();
    },
  },
  methods: {
    users() {
      userModel.users().then((res) => {
        this.tableData = res;
      });
    },
    toEdit(data) {
      this.editForm.id = data.id;
      this.editForm.name = data.name;
      this.editForm.phone = data.phone;
      this.editForm.password = data.password;
      this.dialogEditFormVisible = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName == "editForm") {
            const id = this.editForm.id;
            const params = { ...this.editForm };
            userModel.updateUser(id, params).then(() => {
              alert("编辑成功！");
              this.dialogEditFormVisible = false;
              this.users();
            });
          } else if (formName == "addForm") {
            const params = { ...this.addForm };
            userModel.addUser(params).then(() => {
              alert("添加成功！");
              this.dialogAddFormVisible = false;
              this.addForm.name = "";
              this.addForm.phone = "";
              this.addForm.password = "";
              this.users();
            });
          }
        }
      });
    },
    usersFilter() {
      const val = this.search;
      const data = this.tableData.filter((data) => {
        let dataStr = "";
        for (let i in data) {
          if (i == "created_at" || i == "updated_at") {
            continue;
          }
          dataStr = dataStr + data[i] + ",";
        }
        return dataStr.includes(val);
      });
      this.tableData = data;
    },
    deleteRow(id) {
      const msg = confirm("删除后数据将不可恢复，请确认！");
      if (msg) {
        userModel.deleteUser(id);
        this.users();
      }
    },
  },
};
</script>
<style lang="less" scoped>
.user-search {
  width: 400px;
  float: right;
}
.user-list {
  margin-top: 30px;
}
/deep/.el-dialog {
  min-width: 500px;
}
</style>
