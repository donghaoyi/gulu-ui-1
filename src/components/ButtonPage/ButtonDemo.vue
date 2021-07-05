<template>
  <div>Button 示例</div>
  <Demo :component="ButtonNormal" />
  <Demo :component="ButtonSize" />
  <Demo :component="ButtonDisabled" />
  <Demo :component="ButtonLoading" />
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import ButtonNormal from "./ButtonDemo/ButtonNormal.vue";
import ButtonLoading from "./ButtonDemo/ButtonLoading.vue";
import ButtonDisabled from "./ButtonDemo/ButtonDisabled.vue";
import ButtonSize from "./ButtonDemo/ButtonSize.vue";
export default {
  components: {
    Demo,
    ButtonNormal,
    ButtonLoading,
    ButtonDisabled,
    ButtonSize,
  },
  setup(props) {
    return {
      ButtonNormal,
      ButtonLoading,
      ButtonDisabled,
      ButtonSize,
    };
  },
};
</script>
