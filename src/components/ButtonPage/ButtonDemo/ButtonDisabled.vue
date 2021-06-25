<demo>
禁用状态
</demo>
<template>
  <div>
    <Button theme="button" disabled>按钮</Button>
    <Button theme="link" :disabled="true">链接</Button>
    <Button theme="text" :disabled="true">文本</Button>
  </div>
</template>
<script lang="ts">
import Button from '../../../lib/Button.vue'
export default {
    components:{
        Button
    }
}
</script>
