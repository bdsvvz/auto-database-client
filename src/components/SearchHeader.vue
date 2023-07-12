<!--
 * @Author: Qing Li
 * @Date: 2022-11-12 10:40:08
 * @LastEditTime: 2023-03-10 09:01:56
 * @LastEditors: Qing Li
 * @Description: 
 * @FilePath: \auto-database-client\src\components\SearchHeader.vue
 * @ascription mhis6
-->
<template>

  <el-form :inline="true" :model="formInline" class="form-inline">
    <el-form-item label="类型">
      <el-select v-model="formInline.type" placeholder="请选择类型">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="关键字">
      <el-input v-model="formInline.keyWord" placeholder="请输入关键字"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>

</template>
<script>
export default {
  data() {
    return {
      formInline: {
        type: '',
        keyWord: ''
      },
      options: [
        { label: "全部", value: "A" },
        { label: "表", value: "B" },
        { label: "存储过程", value: "C" },
        { label: "视图", value: "D" },
        { label: "函数", value: "E" }
      ]
    }
  },
  methods: {
    onSubmit() {
      this.$emit('query', this.formInline)
    }
  }
}
</script>
<style lang="less" scoped>
.form-inline {
  text-align: left;
  height: 60px;
  padding-top: 10px;
}
</style>