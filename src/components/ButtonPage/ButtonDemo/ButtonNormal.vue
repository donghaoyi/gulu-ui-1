<demo>
常规使用
</demo>
<template>
  <div class="gulu-component-main">
    <Button>默认</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
  <div class="gulu-component-main">
    <Button theme="button" level="main">主要文字按钮</Button>
    <Button theme="button">普通文字按钮</Button>
    <Button theme="button" level="danger">危险文字按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from "../../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
<style lang="scss" scope>
    .gulu-component-main:not(:first-child){
        margin-top: 16px;
    }
</style>