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
  <el-form class="setting-form activity-banner-form" ref="activity-banner-form" :model="activeComponent">
    <el-form-item class="setting-form-item" label="模块名称" prop="name">
      <el-input v-model.trim="activeComponent.name" placeholder="请输入模块名称" />
    </el-form-item>
    <el-form-item class="setting-form-item" label="添加背景图">
      <!-- <ElUpload :showfilelist="false" :limit="1" :size="size" :list="imageUrls(activeComponent.image_url)" @on-remove="onRemoveBgUrl" @on-success="arr => onSuccessBgUrl(arr)" textPrompt="图片格式支持：png,jpeg,jpg,gif；不可大于10M；建议使用png格式图片，以保持最佳效果；建议图片尺寸为348px*220px" /> -->
    </el-form-item>
    <div class="setting-form-item-warp" v-for="(item, index) in activeComponent.categorys" :key="index">
      <el-divider />
      <el-form-item class="setting-form-item" label="分类标题">
        <el-input v-model.trim="item.name" placeholder="请输入分类标题" />
      </el-form-item>
      <el-form-item class="setting-form-item" label="添加图片">
        <!-- <ElUpload :showfilelist="false" :limit="1" :size="size" :list="imageUrls(item.image_url)" @on-remove="onRemove(index)" @on-success="arr => onSuccess(arr, index)" textPrompt="图片格式支持：png,jpeg,jpg,gif；不可大于10M；建议使用png格式图片，以保持最佳效果；建议图片尺寸为70px*72px" /> -->
      </el-form-item>
      <el-form-item class="setting-form-item" label="添加链接">
        <el-input v-model.trim="item.link" placeholder="请输入链接" />
      </el-form-item>
      <i v-if="activeComponent.categorys.length > 1" class="el-icon-error card-close" @click="deleteOne(index)"></i>
    </div>
    <el-divider />
    <el-form-item v-if="activeComponent.categorys.length < 4" class="setting-form-item">
      <el-button class="setting-form-add-btn" type="primary" plain @click="addOne">添加分类</el-button>
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
      if (form.categorys.length === 4) return
      form.categorys.push({
        name: '',
        link: '',
        image_url: ''
      })
      this.setActiveComponent(form)
    },
    // 删除一个
    deleteOne(index) {
      let form = this.activeComponent
      if (form.categorys.length === 1) return
      form.categorys = form.categorys.filter((v, i) => i !== index)
      this.setActiveComponent(form)
    }
  }
}
</script>
