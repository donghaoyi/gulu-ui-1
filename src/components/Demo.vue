<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre
        class="language-html"
        v-html="html"
      ></pre>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, computed } from "vue";
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism-coy.css";
const Prism = (window as any).Prism;

export default {
  components: {
    Button,
  },
  props: {
    component: Object,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const codeVisible = ref(false);
    const toggleCode = () => {
      codeVisible.value = !codeVisible.value;
    };
    return {
      Prism,
      html,
      codeVisible,
      toggleCode
    };
  },
};
</script>
<style lang="scss" scope>
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