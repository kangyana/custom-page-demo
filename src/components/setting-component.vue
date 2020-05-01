<template>
  <div class="setting__editor">
    <div class="setting__header">{{ form.component[activeIndex].stage_code | stageName }}</div>
    <div>{{ form.component[activeIndex].stage_code }}</div>
  </div>
</template>

<script>
import customPageMixin from '@/mixins/custom-page'

export default {
  mixins: [customPageMixin]
}
</script>
