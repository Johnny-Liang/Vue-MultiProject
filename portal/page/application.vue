<template>
 <div class="application">
   <div class="grid-item" v-for="item in apps" @click="click(item)">
     {{item.label}}
   </div>
 </div>
</template>
<script>
export default {
  name: 'application',
  data () {
    return {
      apps: [
        {name: 'repair', label: '快修', index: '/ProjectA', main: 'http://localhost:3001/ProjectA.min.js'},
        {name: 'production', label: '生产', index: '/ProjectB', main: 'http://localhost:3002/ProjectB.min.js'}
      ]
    }
  },
  methods: {
    click (item) {
      this.loadJs(item.name, item.main)
      this.$router.push(item.index)
    },
    loadJs (id, fileUrl) {
      var scriptTag = document.getElementById(id)
      if (scriptTag) return
      var oHead = document.getElementsByTagName('HEAD').item(0)
      var oScript = document.createElement("script")
      oScript.id = id
      oScript.type = "text/javascript"
      oScript.src = fileUrl
      oHead.appendChild(oScript)
    }
  }
}
</script>
<style lang="less">
.application {
  display: flex;
  .grid-item {
    width: 33%;
    text-align: center;
    cursor: pointer;
  }
}
</style>
