<style lang="less">
  .kyan-button {
    display: inline-block;
    padding: 12px 20px;
    font-size: 14px;
    color: #606266;
    line-height: 1;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: 0.1s;
    &:hover {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
    &:active {
      color: #3a8ee6;
      border-color: #3a8ee6;
      outline: none;
    }
    &+.kyan-button {
      margin-left: 12px;
    }
  }
  .kyan-button--medium {
    padding: 10px 20px;
  }
  .kyan-button--mine {
    padding: 7px 15px;
  }
  .kyan-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover {
      color: #fff;
      background: #66b1ff;
      border-color: #66b1ff;
    }
    &:active {
      color: #fff;
      background: #3a8ee6;
      border-color: #3a8ee6;
    }
  }
</style>

<template>
  <div
    class="kyan-button gesture--click disable-select" 
    :class="[customClass, `kyan-button--${type}`, `kyan-button--${size}`]"
    :style="customStyle"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    customStyle: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
