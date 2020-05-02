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
        min-height: 713px;
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
    .component__title {
      position: relative;
      padding: 24px 0 16px;
      font-size: 28px;
      color: #fff;
      text-align: center;
      font-family: "YouSheBiaoTiHei";
    }
  }
</style>

<template>
  <div class="custom-page__preview vertical-swipe disable-select">
    <div class="custom-page__preview--iphone">
      <div class="preview-header">
        <div class="preview-header__title">{{ form.name }}</div>
      </div>
      <div class="preview-content" @drop="e => drop(e)" @dragover="e => allowDrop(e)">
        <draggable v-model="form.components" group="preview-component" @start="drag=true" @end="drag=false" :options="{ animation: 150 }">
          <transition-group tag="div">
            <div class="preview-content-item" v-for="(item, index) in form.components" :key="item.pid" @click="activeComponent(index)">
              <cover-banner-preview v-if="item.stage_code === 'cover_banner'" />
              <activity-banner-preview v-else-if="item.stage_code === 'activity_banner'" />
              <cate-banner-preview v-else-if="item.stage_code === 'cate_banner'" />
              <text-content-preview v-else-if="item.stage_code === 'text_content'" />
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
import CoverBannerPreview from '@/components/cover-banner-preview'
import ActivityBannerPreview from '@/components/activity-banner-preview'
import CateBannerPreview from '@/components/cate-banner-preview'
import TextContentPreview from '@/components/text-content-preview'

export default {
  mixins: [customPageMixin],
  components: {
    Draggable,
    CoverBannerPreview,
    ActivityBannerPreview,
    CateBannerPreview,
    TextContentPreview
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
