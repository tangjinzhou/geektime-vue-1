<template>
  <div>
    {{ name }}
    <br />
    <button @click="handleChange">change name</button>
    <br />
    <!-- {{ slotDefault }} -->
    <VNodes :vnodes="slotDefault" />
    <br />
    <VNodes :vnodes="slotTitle" />
    <br />
    <VNodes :vnodes="slotScopeItem({ value: 'vue' })" />
  </div>
</template>

<script>
export default {
  name: "BigProps",
  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  props: {
    name: String,
    onChange: {
      type: Function,
      default: () => {}
    },
    slotDefault: Array,
    slotTitle: Array,
    slotScopeItem: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleChange() {
      this.onChange("Hello vue!");
    }
  }
};
</script>
