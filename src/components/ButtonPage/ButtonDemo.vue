<template>
  <div>Button 示例</div>
  <Demo :component="ButtonNormal" />
  <Demo :component="ButtonSize" />
  <Demo :component="ButtonDisabled" />
  <Demo :component="ButtonLoading" />

  <!--<h1>示例1</h1>
  <div>
    <Button>默认</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">大按钮</Button>
    <Button>按钮</Button>
    <Button size="small">小按钮</Button>
  </div>
  <div>
    <Button theme="link" size="big">大按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="link" size="small">小按钮</Button>
  </div>
  <div>
    <Button theme="text" size="big">大按钮</Button>
    <Button theme="text">按钮</Button>
    <Button theme="text" size="small">小按钮</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
  <h1>示例4</h1>
  <div>
    <Button theme="button" disabled>按钮</Button>
    <Button theme="link" :disabled="true">链接</Button>
    <Button theme="text" :disabled="true">文本</Button>
  </div>
  <h1>示例5</h1>
  <div>
    <Button loading>加载中</Button>
  </div> -->
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import ButtonNormal from "./ButtonDemo/ButtonNormal.vue";
import ButtonLoading from "./ButtonDemo/ButtonLoading.vue";
import ButtonDisabled from "./ButtonDemo/ButtonDisabled.vue";
import ButtonSize from "./ButtonDemo/ButtonSize.vue";
export default {
  components: {
    Demo,
    ButtonNormal,
    ButtonLoading,
    ButtonDisabled,
    ButtonSize,
  },
  setup(props) {
    return {
      ButtonNormal,
      ButtonLoading,
      ButtonDisabled,
      ButtonSize,
    };
  },
};
</script>
