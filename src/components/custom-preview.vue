<style lang="less">
  .custom-page__preview {
    left: 210px;
    right: 376px;
    .custom-page__preview--iphone {
      width: 375px;
      margin: 56px auto;
      background: #0A0A0A;
      .preview__header {
        position: relative;
        height: 64px;
        background-image: url(../assets/custom/phone_head.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);
        .preview-header-title {
          overflow: hidden;
          padding-top: 30px;
          margin: 0 auto;
          width: 180px;
          height: 34px;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #000;
        }
      }
      .preview__content {
        min-height: 748px;
        background: #000;
      }
    }
  }
</style>

<template>
  <div class="custom-page__preview vertical-swipe">
    <div class="custom-page__preview--iphone">
      <div class="preview__header">
        <div class="preview-header-title">测试商品排序</div>
      </div>
      <div class="preview__content"></div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
