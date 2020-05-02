<style lang="less">
  .cate-banner-preview {
    position: relative;
    margin: 42px 14px 12px;
    height: 220px;
    .category__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 0;
      filter: blur(2px);
    }
    .category-warp {
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .category-item {
        width: 70px;
        height: 98px;
        .category__img {
          display: block;
          height: 72px;
        }
        .category__name {
          background: #fff;
          text-align: center;
          line-height: 26px;
          font-size: 11px;
          height: 26px;
        }
      }
    }
  }
</style>

<template>
  <div class="cate-banner-preview">
    <img class="category__bg" src="http://material-1258771799.cos.ap-shanghai.myqcloud.com/material-shop/kQ2nzuBQ9ZdPONOfZ6XrrCv7s8LcRawgHEdjoYvp.png" />
    <div class="component__title">G圈最热</div>
    <div class="category-warp">
      <div v-for="item in 4" :key="item" class="category-item">
        <img class="category__img" src="http://material-1258771799.cos.ap-shanghai.myqcloud.com/material-shop/cFMWcTp2reeDNPfMWNUlPOhVUYL1b6bsAzYXsKzu.png" />
        <div class="category__name">分类{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
