import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import InputBase from "../Base/InputBase.vue";

describe("InputBase", () => {
  it("input test unit", async () => {
    const wrapper = mount(InputBase, {
      props: { label: "Input", type: "text", modelValue: "Hello" },
    });

    expect(wrapper.props("label")).toBe("Input");
    expect(wrapper.props("type")).toBe("text");
    expect(wrapper.props("modelValue")).toBe("Hello");

    wrapper.vm.$emit("update:modelValue", "Hello Vitest");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:modelValue")).toEqual([["Hello Vitest"]]);
  });
});
