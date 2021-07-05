<demo>使用一句话调用Dialog</demo>
<template>
  <Button @click="showDialog">打开Dialog</Button>
</template>
<script lang="ts">
import Button from "../../../lib/Button.vue";
import { openDialog } from "../../../lib/openDialog";

export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "内容",
        ok: () => {
          alert("okk");
        },
        cancal: () => {
          alert("cancal");
        },
      });
    };
    return {
      showDialog,
    };
  },
};
</script>