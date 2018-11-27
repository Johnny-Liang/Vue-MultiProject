<template>
  <div :is="pageName" class="page">
  </div>
</template>
<script>
export default {
  name: 'PageView',
  props: {
    pageName: String
  }
}
</script>
