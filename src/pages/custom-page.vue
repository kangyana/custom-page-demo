<style lang="less">
  .custom-page {
    .custom-page__header,
    .custom-page__bottom {
      height: 56px;
      background: #fff;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      z-index: 1;
    }
    .custom-page__header {
      display: flex;
      bottom: auto;
      padding: 0 24px;
      justify-content: space-between;
      align-items: center;
    }
    .custom-page__body {
      top: 56px;
      bottom: 56px;
      background: #f0f2f5;
      .custom-page__components,
      .custom-page__preview,
      .custom-page__settings {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 1;
      }
    }
    .custom-page__bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      top: auto;
    }
  }
</style>

<template>
  <div class="custom-page">
    <!-- 顶部 -->
    <div class="custom-page__header fixed-view">
      <div></div>
      <div class="gesture--click disable-select">超级管理员</div>
    </div>
    <!-- 主体 -->
    <div class="custom-page__body fixed-view">
      <!-- 组件区 -->
      <custom-components />
      <!-- 预览区 -->
      <custom-preview />
      <!-- 设置区 -->
      <custom-settings />
    </div>
    <!-- 底部 -->
    <div class="custom-page__bottom fixed-view">
      <el-button size="medium" @click="submitForm">预览</el-button>
      <el-button type="primary" size="medium" @click="submitForm">发布</el-button>
    </div>
  </div>
</template>

<script>
import customPageMixin from '@/mixins/custom-page'
import CustomComponents from '@/components/custom-components' // 组件区
import CustomPreview from '@/components/custom-preview'  // 预览区
import CustomSettings from '@/components/custom-settings' // 设置区

export default {
  name: 'CustomPage',
  mixins: [customPageMixin],
  components: {
    CustomComponents,
    CustomPreview,
    CustomSettings,
  }
}
</script>