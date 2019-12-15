<template>
 <div>
   <router-view></router-view> 
   <FooterGuiter v-show="$route.meta.isShowFooter"></FooterGuiter>     
 </div>  
</template>

<script>
 import FooterGuiter from '@/components/FooterGuiter/FooterGuiter.vue'
  export default {
  components:{
    FooterGuiter
  },
  //通过action异步获取adress并保存到state
  async mounted() {
    this.$store.dispatch('getAddress')
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>