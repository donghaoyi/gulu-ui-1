<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div
        class="gulu-tabs-nav-item"
        :class="{ selected: selected === title_item }"
        v-for="(title_item, title_index) in titleArray"
        :key="title_index"
        @click="select(title_item)"
        :ref="
          (el) => {
            if (title_item === selected) {
              selectedItem = el;
            }
          }
        "
      >
        {{ title_item }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
  </div>
  <div class="gulu-tabs-content">
    <component :is="corrent" :key="corrent.props.title"></component>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      console.log(tag.type);
      // @ts-ignore
      if (tag.type.name !== Tab.name) {
        throw new Error("Tabs 的子标签必须是 Tab");
      }
    });
    const titleArray = defaults.map((defaults_item) => {
      return defaults_item.props.title;
    });
    const corrent = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    const select = (title) => {
      context.emit("update:selected", title);
      console.log(title);
    };

    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        const { width:selectedItem_width } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = selectedItem_width + "px";
        const {
          left: container_left,
        } = container.value.getBoundingClientRect();
        const {
          left: selectedItem_left,
        } = selectedItem.value.getBoundingClientRect();
        const result_left = selectedItem_left - container_left;
        indicator.value.style.left = result_left + "px";
      },{flush:"post"});
    });
    return {
      defaults,
      titleArray,
      corrent,
      select,
      indicator,
      container,
      selectedItem,
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>