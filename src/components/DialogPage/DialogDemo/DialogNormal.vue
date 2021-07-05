<demo>常规用法</demo>
<template>
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
</template>
<script lang="ts">
import { ref } from "vue";
import Button from "../../../lib/Button.vue";
import Dialog from "../../../lib/Dialog.vue";

export default {
  components: {
    Button,
    Dialog,
  },
  setup(props) {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const cancal = () => {};
    return { x, toggle };
  },
};
</script>