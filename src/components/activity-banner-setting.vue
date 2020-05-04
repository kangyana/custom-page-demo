<style lang="less">
  .activity-banner-form {
    .setting-form-card {
      position: relative;
      .el-card__body {
        display: flex;
        align-items: center;
        padding: 12px;
        .card-upload {
          width: auto!important;
          margin-right: 12px;
          line-height: normal;
          .upload-tips {
            display: none;
          }
          .updata__operation {
            margin: 0;
          }
        }
      }
 
    }
    .setting-form-add-btn {
      width: 100%;
      line-height: 20px;
    }
    .setting-form-item-warp {
      position: relative;
      padding-bottom: 10px;
      .card-close {
        display: none;
        position: absolute;
        top: -8px;
        right: -8px;
        padding: 8px;
        color: #999;
        font-size: 20px;
        cursor: pointer;
      }
      &:hover {
        .card-close {
          display: block;
        }
      }
    }
  }
</style>

<template>
  <el-form class="setting-form activity-banner-form" ref="activity-banner-form" :model="activeComponent" >
    <el-form-item class="setting-form-item" label="模块名称" prop="name">
      <el-input v-model.trim="activeComponent.name" placeholder="请输入模块名称" />
    </el-form-item>
    <div class="setting-form-item-warp" v-for="(item, index) in activeComponent.banners" :key="index">
      <el-divider />
      <el-form-item class="setting-form-item" label="添加图片">
        <!-- <ElUpload :showfilelist="false" :limit="1" :size="size" :list="imageUrls(item.image_url)" @on-remove="onRemove(index)" @on-success="arr => onSuccess(arr, index)" textPrompt="图片格式支持：png,jpeg,jpg,gif；不可大于10M；建议使用png格式图片，以保持最佳效果；建议图片尺寸为375px*502px" /> -->
      </el-form-item>
      <el-form-item class="setting-form-item">
        <el-input v-model.trim="item.link" placeholder="请输入链接" />
      </el-form-item>
      <i v-if="activeComponent.banners.length > 1" class="el-icon-error card-close" @click="deleteOne(index)"></i>
    </div>
    <el-form-item class="setting-form-item">
      <el-button class="setting-form-add-btn" type="primary" plain @click="addOne">添加背景图</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import customPageMixin from '@/mixins/custom-page'

export default {
  mixins: [customPageMixin],
  methods: {
    // 增加一个
    addOne() {
      let form = this.activeComponent
      form.banners.push({
        image_url: '',
        link: ''
      })
      this.setActiveComponent(form)
    },
    // 删除一个
    deleteOne(index) {
      let form = this.activeComponent
      if (form.banners.length === 1) return
      form.banners = form.banners.filter((v, i) => i !== index)
      this.setActiveComponent(form)
    }
  }
}
</script>
