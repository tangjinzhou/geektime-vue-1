import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import sinon from "sinon";

describe("Counter.vue", () => {
  const change = sinon.spy();
  const wrapper = mount(Counter, {
    listeners: {
      change
    }
  });
  it("renders counter html", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("count++", () => {
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
    expect(change.called).toBe(true);
    button.trigger("click");
    expect(change.callCount).toBe(2);
  });
});
