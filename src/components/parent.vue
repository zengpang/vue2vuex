<template>
    <div>
        <span>我是父组件</span>
        <hr>{{fromSonMSg}}<br>
        我是从父组件拿到的信息----{{getNum}}<br>
        <button @click="numadd">父组件--状态数字添加</button>
        <button @click="nummiuns">父组件--状态数字删除</button>
        <button @click="numaddaction">父组件--状态数字添加(action)</button>
        <button @click="nummiunsAction">父组件--状态数字删除(action)</button>
        <son :msg="toSonMsg" @handle="getMsgFromSon"></son>
    </div>
</template>
<script>
   import son from './son.vue'
   export default{
     name:'parent',
     data:function(){
        return{
            toSonMsg:'我是你的父亲',
            fromSonMSg:''
        }
     },
     components:{
        son
     },
     methods:{
       getMsgFromSon:function(value)
       {
         this.fromSonMSg=value;
       },
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
     //计算属性
     computed:{
        getNum:function()
        {
             //通过this.$store.state.xxx获取,其中xxx为state对象中的变量名。获取vuex中名称为store的全局变量中的state对象中的名称为xxx的变量值
            // return this.$store.state.num;
            
            //通过this.$store.getters.xxx获取，其中xxx为getters对象中的函数名。vuex中名称为store的全局变量中的getters对象中的名称为xxx的函数,该函数会返回在state对象中的变量，并且该函数可以针对该变量进行处理
            return this.$store.getters.getcount;
        }
     }
   }
</script>