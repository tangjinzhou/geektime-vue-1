<template>
  <div>
    <slot />
    <slot name="title" />
    <slot name="item" v-bind="{ value: 'vue' }" />
  </div>
</template>

<script>
export default {
  name: "SlotDemo"
};
</script>
