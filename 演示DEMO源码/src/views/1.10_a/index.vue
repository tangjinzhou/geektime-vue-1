<script>
import Props from "./Props";
import Event from "./Event";
import Slot from "./Slot";
import BigProps from "./BigProps";
export default {
  components: {
    Props,
    Event,
    SlotDemo: Slot,
    BigProps
  },
  data: () => {
    return {
      name: "",
      type: "success",
      bigPropsName: "Hello world!"
    };
  },
  methods: {
    handlePropChange(val) {
      this.type = val;
    },
    handleEventChange(val) {
      this.name = val;
    },
    handleBigPropChange(val) {
      this.bigPropsName = val;
    },
    getDefault() {
      return [<p>default slot</p>];
    },
    getTitle() {
      return [<p>title slot1</p>, <p>title slot2</p>];
    },
    getItem(props) {
      return [<p>{`item slot-scope ${JSON.stringify(props)}`}</p>];
    }
  },
  render() {
    const {
      type,
      handlePropChange,
      name,
      handleEventChange,
      bigPropsName,
      getDefault,
      getTitle,
      getItem,
      handleBigPropChange
    } = this;
    const slotDemoProps = {
      scopedSlots: {
        item(props) {
          return `item slot-scope ${JSON.stringify(props)}`;
        }
      },
      props: {}
    };
    const bigProps = {
      props: {
        onChange: handleBigPropChange
      }
    };
    return (
      <div>
        <a-tabs>
          <a-tab-pane key="props" tab="属性">
            <Props
              name="Hello Vue！"
              type={type}
              isVisible={false}
              {...{ props: { onChange: handlePropChange } }}
              title="属性Demo"
              class="test1"
              class={["test1", "test2"]}
              style={{ marginTop: "10px" }}
            />
          </a-tab-pane>
          <a-tab-pane key="event" tab="事件">
            <Event name={name} onChange={handleEventChange} />
          </a-tab-pane>
          <a-tab-pane key="slot" tab="插槽">
            <SlotDemo {...slotDemoProps}>
              <p>default slot</p>
              <p slot="title">title slot1</p>
              <p slot="title">title slot2</p>
            </SlotDemo>
          </a-tab-pane>
          <a-tab-pane key="bigProps" tab="大属性">
            <BigProps
              name={bigPropsName}
              {...bigProps}
              slotDefault={getDefault()}
              slotTitle={getTitle()}
              slotScopeItem={getItem}
            />
          </a-tab-pane>
        </a-tabs>
      </div>
    );
  }
};
</script>
