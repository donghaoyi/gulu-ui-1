<template>
  <div>
    <button class="gulu-switch" @click="toggle" :class="{ 'gulu-checked': value }"><span></span></button>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: { value: Boolean },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return {
      toggle,
    };
  },
};
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  > span {
    width: $h2;
    height: $h2;
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: $h2/2;
    background: white;
    transition: all 250ms;
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
}

button.gulu-checked {
  background: #1890ff;
  > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &.gulu-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
