<!--
 * @Author: Qing Li
 * @Date: 2022-10-30 13:29:23
 * @LastEditTime: 2023-03-10 15:07:45
 * @LastEditors: Qing Li
 * @Description: 
 * @FilePath: \auto-database-client\src\views\page2.vue
 * @ascription mhis6
-->
<template>
  <div class="panel">
    <el-button type="primary" @click="testUpload">点击上传</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogTableVisible:false
    }
  },
  methods: {
    testUpload() {
      this.dialogTableVisible = true;
    },
  },
};
</script>
<style scoped>
.panel {
  width: 100%;
  height: 100%;
  background-color: whitergb(77, 231, 115);
}
</style>
