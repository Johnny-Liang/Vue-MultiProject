<template>
 <div class="application">
   <div class="grid-item">
     快修首页
   </div>
   <div @click="click">
     进入A-1
   </div>
   <router-view/>
 </div>
</template>
<script>
export default {
  name: 'ProjectA',
  methods: {
    click () {
      this.$router.push('/ProjectA/ProjectA-1')
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
