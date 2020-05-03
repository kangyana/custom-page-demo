<style lang="less">
  .cover-banner-preview {

  }
</style>

<template>
  <div class="cover-banner-preview">
    <video
      v-if="component.video_url"
      :src="component.video_url"
      width="375"
      height="713"
      autoplay
      muted
    />
    <img
      v-else-if="component.image_url"
      :src="component.image_url"
      width="375"
      height="713"
    />
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
