<template>
  <div class="panel">
    <el-container class="panel-container">
      <el-header class="panel-header">
        <search-header @query="getData"></search-header>
      </el-header>
      <el-main class="panel-main">
        <el-table :data="tableData" style="width: 100%;height:100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer class="panel-footer">
        <el-pagination background layout="prev, pager, next" :total="total">
        </el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import SearchHeader from "../components/SearchHeader.vue";
export default {
  data() {
    return {
      tableData: [],
      pageSize: 10,
      currentPage: 1,
      type: '',
      keyWord: '',
      total: 0
    }
  },
  components: { SearchHeader },
  mounted: {

  },
  methods: {
    getData(data) {
      this.type = data.type
      this.keyWord = data.keyWord
      debugger
      console.log(this.type)
      console.log(this.keyWord)
    },
    tableRowClassName() { }
  },
};
</script>
<style lang="less" scoped>
.panel {
  width: 100%;
  height: 100%;


  .panel-container {
    width: 100%;
    height: 100%;


    .panel-main {
      background-color: rebeccapurple;
    }

    .panel-footer {
      text-align: right;
      vertical-align: middle;
    }
  }

}
</style>
