<script>
export default {
  name: "EventDemo",
  props: {
    name: String
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
    handleDivClick() {
      this.$emit("change", "");
    },
    handleClick(e, stop) {
      console.log("stop", stop);
      if (stop) {
        e.stopPropagation();
      }
    }
  },
  render() {
    const { name, handleChange, handleDivClick, handleClick } = this;
    return (
      <div>
        name: {name || "--"}
        <br />
        <input value={name} onChange={handleChange} />
        <br />
        <br />
        <div onClick={handleDivClick}>
          <button onClick={handleClick}>重置成功</button>&nbsp;&nbsp;&nbsp;
          <button onClick={e => handleClick(e, true)}>重置失败</button>
        </div>
      </div>
    );
  }
};
</script>
