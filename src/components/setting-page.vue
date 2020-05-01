<template>
  <div class="setting__editor">
    <div class="setting__header">页面设置</div>
    <el-form class="setting-form" ref="form" :model="form" :rules="rules">
      <el-form-item class="setting-form-item" label="页面名称" prop="name">
        <el-input v-model.trim="form.name" placeholder="请输入页面名称" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import customPageMixin from '@/mixins/custom-page'

export default {
  mixins: [customPageMixin],
  data() {
    return {
      rules: {
        name: [{ required: true, message: '页面名称不能为空' }]
      },  // 校验
    }
  }
}
</script>
