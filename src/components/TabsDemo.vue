<template>
  <div>TabsDemo 文档页</div>
  <Tabs v-model:selected="active_title">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2222">内容2</Tab>
  </Tabs>
</template>
<script lang="ts">
import { ref } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default {
  components: {
    Tab,
    Tabs,
  },
  setup(props) {
    const active_title = ref("导航2222");
    return {
      active_title,
    };
  },
};
</script>
