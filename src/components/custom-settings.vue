<style lang="less">
  .custom-page__settings {
    right: 0;
    width: 376px;
    background: #fff;
    .setting__options {
      position: fixed;
      top: 129px;
      right: 386px;
      z-index: 1;
      .setting-option__btn {
        display: block;
        margin: 0 0 12px 0;
      }
    }
    .setting__editor {
      .setting__header {
        padding: 24px 16px;
        border-bottom: 1px solid #e8e8e8;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        color: #323233;
      }
    }
    .setting-form {
      .setting-form-item {
        margin: 12px 16px;
      }
      .el-divider--horizontal {
        margin: 0;
      }
    }
  }
</style>

<template>
  <div class="custom-page__settings vertical-swipe disable-select">
    <!-- 悬浮选项 -->
    <div class="setting__options">
      <el-button class="setting-option__btn" size="mini" :type="settingType === 'page' ? 'primary' : 'defualt'"  @click="setSettingType('page')">页面设置</el-button>
      <el-button class="setting-option__btn" size="mini" :type="settingType === 'components' ? 'primary' : 'defualt'" @click="setSettingType('components')">组件设置</el-button>
    </div>
    <!-- 编辑区 -->
    <setting-page v-if="settingType === 'page'" />
    <setting-components v-else-if="settingType === 'components'" />
    <setting-component v-else-if="settingType === 'component'" />
  </div>
</template>

<script>
import customPageMixin from '@/mixins/custom-page'
import SettingPage from '@/components/setting-page'
import SettingComponents from '@/components/setting-components'
import SettingComponent from '@/components/setting-component'

export default {
  mixins: [customPageMixin],
  components: {
    SettingPage,
    SettingComponents,
    SettingComponent
  }
}
</script>
