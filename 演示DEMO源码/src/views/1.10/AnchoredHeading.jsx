export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render: function(h) {
    const Tag = `h${this.level}`;
    return <Tag>{this.$slots.default}</Tag>;
  }
};
