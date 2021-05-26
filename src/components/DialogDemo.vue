<template>
    <div>示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">打开Dialog</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="ok" :cancal="cancal"></Dialog>
</template>
<script lang="ts">
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
export default {
    components:{
        Dialog,
        Button
    },
    setup(props) {
        const x = ref(false);
        const toggle=()=>{
            x.value=!x.value;
        }
        const ok = ()=>{
            return false;
        };
        const cancal = ()=>{};
        return {x,toggle};
    }
}
</script>