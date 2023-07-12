export default {
  // type(事件类型)： 其值为setResturantName
  // payload：官方给它还取了一个高大上的名字：载荷，其实就是一个保存要传递参数的容器
  setCollapse: (state, val) => {
    state.isCollapse = val;
    if (val) {
      state.mainWidth = "65px"
    } else {
      state.mainWidth = "200px"
    }
  }
}