<style lang="less">
  .custom-page__preview {
    left: 210px;
    right: 376px;
    .custom-page__preview--iphone {
      width: 375px;
      margin: 56px auto;
      background: #0A0A0A;
      .preview-header {
        position: relative;
        height: 64px;
        background-image: url(../assets/custom/phone_head.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);
        .preview-header__title {
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
      .preview-content {
        min-height: 748px;
        background: #000;
        .preview-content-item {
          position: relative;
          cursor: move;
          .preview-item-tag {
            position: absolute;
            top: 0;
            left: 0;
            display: none;
          }
          &:hover {
            .preview-item-tag {
              display: block;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="custom-page__preview vertical-swipe">
    <div class="custom-page__preview--iphone">
      <div class="preview-header">
        <div class="preview-header__title">{{ form.name }}</div>
      </div>
      <div class="preview-content" @drop="e => drop(e)" @dragover="e => allowDrop(e)">
        <draggable v-model="form.components" group="preview-component" @start="drag=true" @end="drag=false" :options="{ animation: 150 }">
          <transition-group tag="div">
            <div class="preview-content-item" v-for="(item, index) in form.components" :key="item.pid" @click="activeComponent(index)">
              <div style="height: 200px; color: #fff;">{{ item.stage_code }}</div>
              <el-button class="preview-item-tag" size="mini" @click.stop="deleteComponent(item.pid)">
                <i class="el-icon-delete">&nbsp;{{ item.stage_code | stageName }}</i>
              </el-button>
            </div>
          </transition-group>
        </draggable>
      </div>
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
  },
  methods: {
    // 组件放入
    drop(ev) {
      ev.preventDefault()
      const stageCode = ev.dataTransfer.getData('stageCode')
      if (stageCode) {
        this.addComponent(stageCode)
      }
    },
    // 组件放入完毕
    allowDrop(ev) {
      ev.preventDefault()
    },
  }
}
</script>
