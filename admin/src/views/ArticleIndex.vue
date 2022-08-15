<template>
  <div class="article-section">
    <div class="article-hd">
      <router-link to="/admin/article/create"> 新建文章 </router-link>
      <div class="article-search">
        <el-input v-model="search" size="40px" placeholder="输入关键字搜索">
          <el-button slot="append" icon="el-icon-search" @click="articleFilter">
            搜索
          </el-button>
        </el-input>
      </div>
    </div>
    <div class="artilce-list">
      <el-table
        :data="tableData"
        border
        height="80vh"
        :default-sort="{ prop: 'id', order: 'ascending' }"
      >
        <el-table-column prop="index" fixed sortable label="index" width="100">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="name"
          label="分类"
          width="120"
          :filters="classifyData"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="创建时间"
          width="180"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="updated_at"
          label="最近一次修改时间"
          width="180"
          sortable
        >
        </el-table-column>
        <el-table-column prop="visits" label="阅读次数" width="120" sortable>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              @click="handleToEdit(scope.row.id)"
              type="text"
              size="small"
              icon="el-icon-edit"
              style="margin-right: 20px"
              >编辑</el-button
            >
            <el-button
              type="text"
              size="small"
              icon="el-icon-delete"
              @click="deleteRow(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import articleModel from "../../models/article";

export default {
  data() {
    return {
      select: "",
      search: "",
      tableData: [],
      name: [],
      classifyData: [],
    };
  },
  created() {
    this.article();
  },
  watch: {
    search() {
      this.article();
    },
  },
  methods: {
    article() {
      articleModel.article().then((res) => {
        this.tableData = res;
        this.tableData.forEach((data) => {
          data.created_at = this.$moment(data.created_at).format(
            "YYYY-MM-DD HH:mm:ss"
          );
          if (data.updated_at) {
            data.updated_at = this.$moment(data.updated_at).format(
              "YYYY-MM-DD HH:mm:ss"
            );
          }
        });
        this.classifyFilter();
      });
    },
    classifyFilter() {
      const tableData = [...this.tableData];
      for (let i = 0; i < tableData.length; i++) {
        if (this.name.indexOf(tableData[i].name) > -1) {
          continue;
        }
        this.name.push(tableData[i].name);
        this.classifyData.push({
          text: tableData[i].name,
          value: tableData[i].name,
        });
      }
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    articleFilter() {
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
    handleToEdit(id) {
      this.$router.push({ path: `/admin/article/:${id}/edit` });
    },
    deleteRow(id) {
      const msg = confirm("删除后数据将不可恢复，请确认！");
      if (msg) {
        articleModel.deleteArticle(id);
        this.article();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.article-hd {
  font-size: 30px;
}
.article-search {
  width: 400px;
  float: right;
}
.artilce-list {
  margin-top: 30px;
}
/deep/.el-table__column-filter-trigger {
  margin-left: 30px;
}
</style>
