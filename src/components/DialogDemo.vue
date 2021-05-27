<template>
  <div>示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">打开Dialog</Button>
  <Dialog
    v-model:visible="x"
    title="标题"
    :closeOnClickOverlay="true"
    :ok="ok"
    :cancal="cancal"
  >
    <template v-slot:title>
      <div>提示</div>
    </template>
    <template v-slot:content>
      <div>内容</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <div>
    <Button @click="showDialog">一句打开Dialog</Button>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Dialog,
    Button,
  },
  setup(props) {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const ok = () => {
      return false;
    };
    const cancal = () => {};
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "内容",
      });
    };
    return { x, toggle, showDialog };
  },
};
</script>