<style lang="less">
  .text-content-preview {
    .text-content-rich {
      padding: 0 28px 21px;
      line-height: 24px;
      font-size: 14px;
      color: #fff;
      text-align: center;
    }
  }
</style>

<template>
  <div class="text-content-preview">
    <div v-if="component.name" class="component__title text-ellipsis">{{ component.name }}</div>
    <div v-if="component.content" class="text-content-rich fw500 text-space">{{ component.content }}</div>
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
