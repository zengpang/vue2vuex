<template>
   <div>

      <span>
         我是子组件
      </span>-----{{ msg }} <br>
      ------我是子组件中拿到的全局状态:{{ getNum }}
      <button @click="senMsgToFa">向父组件传递数据</button>
      ---- <button @click="numadd">子组件--状态数字添加</button>
      <button @click="nummiuns">子组件--状态数字删除</button>
      <button @click="numaddaction">父组件--状态数字添加(action)</button>
        <button @click="nummiunsAction">父组件--状态数字删除(action)</button>
   </div>
</template>
<script>
export default {
   name: 'parent',
   data: function () {
      return {
         toFatherMsg: '我是你的son'
      }
   },
   props: {
      msg: {
         type: String,
         default: ''
      }
   },
   methods: {
      senMsgToFa: function () {
         this.$emit('handle', this.toFatherMsg);
      },
      numadd: function () {
         //通过this.$store.commit('xxx'),其中xxx为mutations对象中的函数名。执行vuex中名称为store的全局变量中的mutations对象中的名称为xxx的函数
         this.$store.commit('increase');
      },
      nummiuns: function () {
         //通过this.$store.commit('xxx'),其中xxx为mutations对象中的函数名。执行vuex中名称为store的全局变量中的mutations对象中的名称为xxx的函数
         this.$store.commit('decrease');
      },
       numaddaction()
       {
          //dispatch是分发actions的异步操作,其中xxx为actions对象中的函数名
          this.$store.dispatch('AddAction');
       },
       nummiunsAction()
       {
        //dispatch是分发actions的异步操作,其中xxx为actions对象中的函数名 
        this.$store.dispatch('increaseAction');
       }
   },
   computed: {
      getNum: function () {
         //通过this.$store.state.xxx,其中xxx为变量名，获取vuex中名称为store的全局变量中的state对象中的名称为xxx的变量值
         return this.$store.state.num;
      }
   }
}
</script>