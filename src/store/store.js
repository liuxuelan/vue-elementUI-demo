import Vue from 'vue'
import Vuex from 'vuex'

// 注册vuex
Vue.use(Vuex)

const state = {
  userInfo: {}
}


//mutation 改变state
const mutations = {
  //保存用户数据
  SAVE_USERINFO (state, userinfo) { // state是全局数据，userinfo是用户传入的数据
    state.userInfo = userinfo
  }
}

const actions = {
  COMMIT_USERINFO (context, userinfo) {
    context.commit('SAVE_USERINFO', JSON.parse(userinfo))// 提交mutations里面的方法，第一个参数为方法名，第二个参数是传入
  }
  // _this.$store.commit('SAVE_USERINFO', JSON.parse(userinfo))// 提交mutations里面的方法，第一个参数为方法名，第二个参数是传入
}
//mutayions需要手动出发,执行commit之后才会出发mutations

export default new Vuex.Store({
  state,
  mutations,
  actions
})
