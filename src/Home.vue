<template>
  <el-container style="height: 100%">
    <el-aside width="AUTO" class="aside">
      <common-aside style="height: 100%" />
    </el-aside>
    <el-collapse-transition>
      <el-container>
        <el-header style="background-color: #294b6a">
          <common-header />
        </el-header>
        <el-main class="main">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-collapse-transition>
  </el-container>
</template>
<script>
import { mapState } from "vuex";
import CommonAside from "./components/CommonAside.vue";
import CommonHeader from "./components/CommonHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    CommonAside,
    CommonHeader,
  },
  computed: {
    ...mapState(['mainWidth'])
  }
};
</script>
<style scoped>
.aside,
.main {
  overflow: hidden;
  padding-bottom: 0px;
  padding-top: 0px;
}

/* 菜单的淡入淡出效果 */
.fade-enter-active,
.fade-leave-active {
  /* 设置过渡效果的CSS属性名称 */
  transition-property: opacity margin;
  /* 设置过渡效果需要的时间 */
  transition-duration: 0.5s;
}

.fade-enter-active {
  /* 设置过渡效果何时开始 */
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  /* 过渡效果属性 */
  opacity: 0;
  margin-left: 20px;
}
</style>
