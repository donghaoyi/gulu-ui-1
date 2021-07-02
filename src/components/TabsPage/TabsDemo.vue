<template>
  <div>
    <Demo :component="TabNormal" />
  </div>
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import TabNormal from "./TabsDemo/TabNormal.vue";

export default {
  components: {
    TabNormal,
    Demo,
  },
  setup(props) {
    return {
      TabNormal,
    };
  },
};
</script>
