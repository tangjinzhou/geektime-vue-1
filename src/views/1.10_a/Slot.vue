<script>
export default {
  name: "SlotDemo",
  render() {
    const { $scopedSlots } = this;
    return (
      <div>
        {$scopedSlots.default()}
        {$scopedSlots.title()}
        {$scopedSlots.item({ value: "vue" })}
      </div>
    );
  }
};
</script>
