<style lang="less">
  .setting-form-textarea {
    .el-textarea__inner {
      height: 50vh;
    }
  }
</style>

<template>
  <el-form class="setting-form" ref="form" :model="activeComponent">
    <el-form-item class="setting-form-item" label="请输入模块名称" prop="name">
      <el-input v-model.trim="activeComponent.name" placeholder="请输入模块名称" />
    </el-form-item>
    <el-divider></el-divider>
    <el-form-item class="setting-form-item" label="内容" prop="content" >
      <el-input class="setting-form-textarea" type="textarea" v-model="activeComponent.content"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import customPageMixin from '@/mixins/custom-page'

export default {
  mixins: [customPageMixin],
}
</script>
