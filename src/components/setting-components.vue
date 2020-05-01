<style lang="less">
  .setting-form {
    .setting-component {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      cursor: move;
      height: 40px;
      border-radius: 2px;
      background-color: #fff;
      box-shadow: 0 0 4px 0 rgba(10,42,97,.2);
      box-sizing: border-box;
      .setting-icon {
        color: rgba(0, 0, 0, 0.45);
        .setting-text {
          margin-left: 6px;
          font-size: 14px;
          color: #323233;
        }
      }
    }
    .setting-clear-action {
      cursor: pointer;
      color: #155bd4;
      font-size: 12px;
      text-align: right;
      padding-right: 16px;
      margin-top: 12px;
    }
  }
  .setting-no-component {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
    .setting-no-component__img {
      width: 150px;
      height: 150px;
    }
    .setting-no-component__msg {
      margin-top: 16px;
    }
  }
</style>

<template>
  <div class="setting__editor">
    <div class="setting__header">组件管理</div>
    <div v-if="form.components.length" class="setting-form">
      <el-popconfirm title="确定清除组件？" @onConfirm="clearComponents">
        <div slot="reference" class="setting-clear-action">清除组件</div>
      </el-popconfirm>
      <draggable v-model="form.components" group="people" @start="drag=true" @end="drag=false" :options="{ chosenClass: 'choose', animation: 150 }">
        <transition-group>
          <div class="setting-form-item setting-component" v-for="item in form.components" :key="item.pid">
            <i class="setting-icon el-icon-folder">
              <span class="setting-text">{{ item.stage_code | stageName }}</span>
              <span v-if="item.name" class="setting-text">（{{ item.name }}）</span>
            </i>
            <el-popconfirm title="确定删除组件？" @onConfirm="deleteComponent(item.pid)">
              <i slot="reference" class="setting-icon el-icon-delete"></i>
            </el-popconfirm>
          </div>
        </transition-group>
      </draggable>
    </div>
    <div v-else class="setting-no-component">
      <img class="setting-no-component__img" src="@/assets/custom/no_component.png" />
      <div class="setting-no-component__msg">暂无组件</div>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import customPageMixin from '@/mixins/custom-page'

export default {
  mixins: [customPageMixin],
  components: {
    Draggable
  }
}
</script>
