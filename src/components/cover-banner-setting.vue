<style lang="less">
  .setting-desc {
    color: #999;
    font-size: 12px;
    line-height: 18px;
  }
</style>

<template>
  <el-form class="setting-form" ref="cover-banner-form" :model="activeComponent">
    <el-form-item class="setting-form-item" label="请输入模块名称">
      <el-input v-model.trim="activeComponent.name" placeholder="请输入模块名称" />
    </el-form-item>
    <el-divider></el-divider>
    <el-form-item class="setting-form-item" label="视频类型">
      <el-radio v-model="coverBannerType" label="image">图片</el-radio>
      <el-radio v-model="coverBannerType" label="video">视频</el-radio>
      <div class="setting-desc">图片和视频只能选择一项上传</div>
    </el-form-item>
    <el-divider></el-divider>
    <el-form-item v-if="coverBannerType === 'image'" class="setting-form-item" label="添加图片" prop="image_url">
      <!-- <ElUpload :showfilelist="false" :limit="1" :size="size" :list.sync="imageUrls" -->
        <!-- @on-remove="onRemove" @on-success="onSuccess" style="width: 100px;" textPrompt="图片格式支持：png,jpeg,jpg,gif；不可大于10M；建议使用png格式图片，以保持最佳效果；建议图片尺寸为375px*713px" /> -->
    </el-form-item>
    <el-form-item v-else-if="coverBannerType === 'video'" class="setting-form-item" label="添加视频" prop="video_url">
      <!-- <ElUpload :showfilelist="false" :limit="1" :size="size" :list.sync="videoUrls" accept='video/mp4' -->
        <!-- @on-remove="onRemove" @on-success="onSuccess" style="width: 100px;" textPrompt="视频格式支持：mp4；不可大于30M；建议视频尺寸为375px*713px" /> -->
    </el-form-item>
  </el-form>
</template>

<script>
import customPageMixin from '@/mixins/custom-page'

export default {
  mixins: [customPageMixin],
  data() {
    return {
      coverBannerType: 'image', //  全屏banner类型
    }
  },
  methods: {
    // 判断类型
    judgeCoverBannerType() {
      if (this.activeComponent.video_url) {
        this.coverBannerType = 'video'
      } else {
        this.coverBannerType = 'image'
      }
    }
  },
  mounted() {
    this.judgeCoverBannerType()
  }
}
</script>
