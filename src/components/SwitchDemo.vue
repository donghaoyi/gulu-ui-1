<template>
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <component :is="SwitchDemo1">
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
       <div class="demo-code">
           <pre> {{SwitchDemo1.__sourceCode}}</pre> 
       </div>
    </div>
    <div class="demo">
      <h2>支持 disabled</h2>
        <component :is="SwitchDemo2" />
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
       <div class="demo-code">
           <pre> {{SwitchDemo2.__sourceCode}}</pre> 
       </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
import Button from "../lib/Button.vue";
import SwitchDemo1 from './Switch1.demo.vue';
import SwitchDemo2 from './Switch2.demo.vue';
// console.log(Switch1Demo1);

export default {
  components: {
    Button,
  },
  setup(props) {
    const bool = ref(false);
    const bool2 = ref(false);
    return {
      bool,
      bool2,
      SwitchDemo1,
      SwitchDemo2
    };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #b9b9b9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", monospace;
      margin: 0;
    }
  }
}
</style>