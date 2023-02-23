import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) //引用vuex
Vue.config.productionTip = false
//声明全局变量store
export default new Vuex.Store({
  //声明state变量
  state: {
    //再state
    num: 10
  },
  mutations: {
    //定义我们的状态改变函数
    increase: function (state) {
      state.num++;
    },
    decrease(state) {
      state.num--;
    }
  },
  actions: {
    //context为上下文对象
    increaseAction: function (context) {
      //actions中只能对mutation进行操作，格式为context.commit(xxx)，其中context为上下文对象，xxx为mutations对象中的函数名
       context.commit('decrease');

      //action可以异步调用mutation
      // setTimeout(function () {
      //   context.commit('decrease');
      // }, 1000)
    },
    //context为上下文对象
    AddAction: function (context) {
      //actions中只能对mutation进行操作，格式为context.commit(xxx)，其中context为上下文对象，xxx为mutations对象中的函数名
      context.commit('increase');

      //action可以异步调用mutation
      // setTimeout(function () {
      //   context.commit('increase');
      // }, 1000);
    }
  },
  getters: {
    getcount(state) {
      return state.num > 0 ? state.num:0;
    }
  }
})