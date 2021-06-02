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
            if (el) {
              navItems[title_index] = el;
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
import { computed, onMounted, onUpdated, ref } from "vue";
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
      if (tag.type !== Tab) {
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
    const select = (title: string) => {
      context.emit("update:selected", title);
    };

    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = ()=>{
      const divs = navItems.value;
      const result = divs.filter((tag) =>
        tag.classList.contains("selected")
      )[0];
      const { width } = result.getBoundingClientRect();
      indicator.value.style.width = width + "px";

      const {left:container_left} = container.value.getBoundingClientRect();
      const {left:result_left} = result.getBoundingClientRect();
      console.log('container_left:',container_left,'result_left:',result_left);
      const left = result_left - container_left + 'px';
      indicator.value.style.left = left;
    }
    onMounted(x);
    onUpdated(x)
    return {
      defaults,
      titleArray,
      select,
      corrent,
      navItems,
      indicator,
      container
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