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
  },
  render() {
    const { name, handleChange, slotDefault, slotTitle, slotScopeItem } = this;
    return (
      <div>
        {name}
        <br />
        <button onClick={handleChange}>change name</button>
        <br />
        {slotDefault}
        <br />
        {slotTitle}
        <br />
        {slotScopeItem({ value: "vue" })}
      </div>
    );
  }
};
</script>
