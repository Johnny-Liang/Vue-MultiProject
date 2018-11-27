<template>
  <div class="ProjectA-1" @click="click">
    快修A-1
  </div>
</template>
<script>
export default {
  name: 'ProjectA-1',
  methods: {
    click () {
      this.$router.push('/ProjectA/ProjectA-1-1')
    }
  }
}
</script>
<style>

</style>
