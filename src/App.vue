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
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>