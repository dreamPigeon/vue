<template>
<div>
 <h1>App组件</h1>
  <div id="test1"></div>
  <div id="test2"></div>
</div>

</template>

<script type="text/ecmascript-6">
  
</script>

<style lang="stylus" rel="stylesheet/stylus">

//定义变量：复用
$color = red

// #test1
//      background red
//      width 100px
//      height 200px



//定义混合
btnStyle(w,h,bg)
  background bg
  width w
  height h 
  box-sizing content-box

//定义函数
add(a,b)
  a+b

#test1
  btnStyle(100px,100px,$color)
  padding add(20,10px)
#test2
  btnStyle(200px,200px,green)
  padding add(20px,10)

  
   

</style>

