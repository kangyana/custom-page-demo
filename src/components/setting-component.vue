<template>
  <div class="setting__editor">
    <div class="setting__header">{{ activeComponent.stage_code | stageName }}</div>
    <cover-banner-setting v-if="activeComponent.stage_code === 'cover_banner'" />
    <activity-banner-setting v-else-if="activeComponent.stage_code === 'activity_banner'" />
    <cate-banner-setting v-else-if="activeComponent.stage_code === 'cate_banner'" />
    <text-content-setting v-else-if="activeComponent.stage_code === 'text_content'" />
  </div>
</template>

<script>
import customPageMixin from '@/mixins/custom-page'
import CoverBannerSetting from '@/components/cover-banner-setting'
import ActivityBannerSetting from '@/components/activity-banner-setting'
import CateBannerSetting from '@/components/cate-banner-setting'
import TextContentSetting from '@/components/text-content-setting'

export default {
  mixins: [customPageMixin],
  components: {
    CoverBannerSetting,
    ActivityBannerSetting,
    CateBannerSetting,
    TextContentSetting,
  }
}
</script>
