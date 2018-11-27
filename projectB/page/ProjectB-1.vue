<template>
  <div class="ProjectB-1" @click="click">
    生产A-1
  </div>
</template>
<script>
export default {
  name: 'ProjectB-1',
  methods: {
    click () {
      this.$router.push('/ProjectB/ProjectB-1-1')
    }
  }
}
</script>
<style>

</style>
