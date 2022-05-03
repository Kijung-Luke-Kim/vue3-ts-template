import HelloWorld from "../../src/components/HelloWorld.vue";
import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { store, key } from "../../src/store/index";

test("HelloWorld.vue", async () => {
  expect(HelloWorld).toBeTruthy();

  const wrapper = mount(HelloWorld, {
    props: { msg: "Hello Vue 3 + TypeScript + Vite" },
    global: {
      plugins: [[store, key]],
    },
  });

  expect(wrapper.text()).toContain("Hello Vue 3 + TypeScript + Vite");
  // expect(wrapper.html()).toMatchSnapshot();
});
