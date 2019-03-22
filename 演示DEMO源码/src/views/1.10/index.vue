<template>
  <div>
    <span>Message: {{ msg }}</span>
    <br />
    <VNodes :vnodes="getJSXSpan()" />
    <anchored-heading1 :level="1">Hello world!</anchored-heading1>
    <anchored-heading2 :level="2">Hello world!</anchored-heading2>
    <anchored-heading3 :level="3">Hello world!</anchored-heading3>
    <VNodes :vnodes="getAnchoredHeading(4)" />
  </div>
</template>
<script>
import AnchoredHeading1 from "./AnchoredHeading.vue";
import AnchoredHeading2 from "./AnchoredHeading.js";
import AnchoredHeading3 from "./AnchoredHeading.jsx";

export default {
  components: {
    AnchoredHeading1,
    AnchoredHeading2,
    AnchoredHeading3,
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  data() {
    return {
      msg: "hello vue"
    };
  },
  methods: {
    getJSXSpan() {
      return <span>Message: {this.msg}</span>;
    },
    getAnchoredHeading(level) {
      const Tag = `h${level}`;
      return <Tag>Hello world!</Tag>;
    }
  }
};
</script>
