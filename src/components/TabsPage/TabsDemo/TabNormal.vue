<demo>基础用法</demo>
<template>
  <div>
    <Tabs  v-model:selected="active_title">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>
    </Tabs>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Tab from "../../../lib/Tab.vue";
import Tabs from "../../../lib/Tabs.vue";
export default {
  components: {
    Tab,
    Tabs,
  },
  setup(props) {
    var active_title = ref('导航1');
    return {
      active_title
    }
  }
};
</script>
<style lang="scss" scoped>
</style>