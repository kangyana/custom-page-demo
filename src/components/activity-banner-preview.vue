<style lang="less">

</style>

<template>
  <div class="activity-banner-preview">
    <div v-if="component.name" class="component__title text-ellipsis">{{ component.name }}</div>
    <img :src="component.image_url" width="375" />
  </div>
</template>

<script>
export default {
  props: {
    component: {
      type: Object,
      default: null
    }
  }
}
</script>
