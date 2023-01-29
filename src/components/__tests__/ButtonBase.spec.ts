import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ButtonBase from "../Base/ButtonBase.vue";

describe("ButtonBase", () => {
  it("button test unit", async () => {
    const wrapper = mount(ButtonBase, {
      props: { label: "Click me", type: "button", onClick: () => {} },
    });

    expect(wrapper.props("label")).toBe("Click me");

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();


    wrapper.vm.$emit("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
