<template>
  <el-menu router :default-active="$router.options.routes[0].path" class="el-menu-vertical-demo" @open="handleOpen"
    @close="handleClose" @select="handleSelect" :collapse="$store.state.isCollapse" background-color="#545c64"
    text-color="#fff" active-text-color="#68BEF0">
    <h3 style="height:60px" :style="{ 'visibility': ($store.state.isCollapse ? 'hidden' : 'inherit') }">AUTO DATABASE
    </h3>
    <el-menu-item v-for="(item, index) in noChildMenu" :key="index" :index="item.path">
      <i :class="item.icon"></i>
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>

    <el-submenu v-for="item in hasChildMenu" :key="item.path" :index="item.path">
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </template>

      <el-menu-item v-for="childItem in item.children" :key="childItem.path" :index="childItem.path">{{ childItem.name
      }}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      menuData: this.$router.options.routes,
    };
  },
  computed: {
    ...mapState(["isCollapse"]),
    noChildMenu() {
      return this.menuData.filter((item) => !item.children);
    },
    hasChildMenu() {
      return this.menuData.filter((item) => item.children);
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  h3 {
    color: aliceblue;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 60px;
    margin: 0;
  }
}
</style>
