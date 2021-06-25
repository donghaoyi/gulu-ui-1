<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="SwitchDemo1"/>
    <Demo :component="SwitchDemo2"/>

   </div>
</template>
<script lang="ts">
import { ref } from "vue";
import SwitchDemo1 from './Switch1.demo.vue';
import SwitchDemo2 from './Switch2.demo.vue';
import Demo from './Demo.vue'
export default {
  components: {
    Demo
  },
  setup(props) {
    return {
      SwitchDemo1,
      SwitchDemo2,
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