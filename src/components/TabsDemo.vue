<template>
    <div>
       TabsDemo 文档页
    </div>
    <Tabs>
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
    </Tabs>
</template>
<script lang="ts">
import Tab from "../lib/Tab.vue"
import Tabs from "../lib/Tabs.vue"
export default {
    components:{
        Tab,
        Tabs
    }
}
</script>
