<style lang="less">
  .custom-page__components {
    left: 0;
    padding: 22px 12px;
    width: 186px;
    background: #fff;
    .custom-page__component {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4px 0;
      width: 50%;
      height: 68px;
      font-size: 12px;
      color: #323233;
      .component__icon {
        font-size: 32px;
      }
      .component__name {
        margin-top: 4px;
        line-height: 16px;
        font-size: 12px;
      }
      &:hover {
        background: #409eff;
        color: #fff;
      }
    }
  }
</style>

<template>
  <div class="custom-page__components">
    <draggable group="preview-component" :sort="false" @start="drag=true" @end="drag=false" :options="{ animation: 150 }">
      <transition-group tag="div">
        <div class="custom-page__component gesture--move disable-select" v-for="item in 10" :key="item">
          <div class="component__icon el-icon-folder"></div>
          <div class="component__name">{{ item }}组件</div>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable
  }
}
</script>
