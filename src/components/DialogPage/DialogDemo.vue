<template>
    <div>
        <Demo :component="DialogNormal" />
    </div>
</template>
<script lang="">
import Demo from '../Demo.vue'
import DialogNormal from "./DialogDemo/DialogNormal.vue"
import DialogOneCode from "./DialogDemo/DialogOneCode.vue"
export default {
    components:{
        Demo,
        DialogNormal,
        DialogOneCode
    },
    setup(props) {
        return{
            DialogNormal,
            DialogOneCode
        }
    }
}
</script>