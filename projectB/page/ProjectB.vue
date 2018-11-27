<template>
 <div class="application">
   <div class="grid-item">
     生产首页！
   </div>
   <div @click="click">
     进入A-1
   </div>
   <router-view/>
 </div>
</template>
<script>
export default {
  name: 'ProjectB',
  methods: {
    click () {
      this.$router.push('/ProjectB/ProjectB-1')
    }
  }
}
</script>
<style lang="less">
.application {
  .grid-item {
    width: 100%;
    text-align: center;
    color: red;
  }
}
</style>
