<template>
    <div>
      我是outter组件拿到的全局状态：{{getOutterCount}} <br/>
      <button @click="numadd">outter组件--改变状态按钮</button>
      <button @click="numaddaction">父组件--状态数字添加(action)</button>
        <button @click="nummiunsAction">父组件--状态数字删除(action)</button>
    </div>
</template>
<script>
   export default{
     name:'outter',
     methods:{
   
       numadd:function()
       {
         //通过this.$store.commit('xxx'),其中xxx为mutations对象中的函数名。执行vuex中名称为store的全局变量中的mutations对象中的名称为xxx的函数
         this.$store.commit('increase');
       },
       nummiuns:function()
       {
         //通过this.$store.commit('xxx'),其中xxx为mutations对象中的函数名。执行vuex中名称为store的全局变量中的mutations对象中的名称为xxx的函数
         this.$store.commit('decrease');
       },
       numaddaction()
       {
          this.$store.dispatch('AddAction');
       },
       nummiunsAction()
       {
        this.$store.dispatch('increaseAction');
       }
     },
     computed:{
        getOutterCount:function(){
            //通过this.$store.state.xxx,其中xxx为变量名，获取vuex中名称为store的全局变量中的state对象中的名称为xxx的变量值
            return this.$store.state.num;
        }
     }
   }
</script>