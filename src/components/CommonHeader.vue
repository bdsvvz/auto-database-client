<template>
  <el-row class="header">
    <el-col :span="2" class="header-left">
      <i class="el-icon-s-fold" style="font-size: 24px; color: aliceblue" @click="collapseMenu"></i>
    </el-col>
    <el-col :span="20">
      <div>tab标签页</div>
    </el-col>
    <el-col :span="2" class="header-right">
      <div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <el-avatar class="user" icon="el-icon-user-solid" style="vertical-align: middle"></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
    </el-col>
  </el-row>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isCollapse"]),
  },
  methods: {
    collapseMenu() {
      if (this.$store.state.isCollapse) {
        this.$store.commit("setCollapse", false);
      } else {
        this.$store.commit("setCollapse", true);
      }
    },
  },
};
</script>
<style scoped>
.header {
  height: 60px;
}

.header-left {
  text-align: left;
  height: 100%;
  line-height: 60px;
}

.header-right {
  text-align: right;
  height: 100%;
  line-height: 60px;
}


.user,
.el-icon-s-fold {
  cursor: pointer;
}
</style>
