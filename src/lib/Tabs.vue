<template>
    <div>
        tabs view
    </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
export default {
    setup(props,context) {
        const defaults = context.slots.default();
        console.log('defaults',defaults);
        
        defaults.forEach((tag)=>{
            console.log(tag.type);
            if(tag.type!==Tab){
                throw new Error('Tabs 的子标签必须是 Tab')
            }
        })
        return {
            defaults
        }
    }
}
</script>