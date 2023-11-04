import { defineComponent as c, openBlock as n, createElementBlock as s, normalizeClass as i, renderSlot as r, createTextVNode as u, toDisplayString as y, createCommentVNode as f, createElementVNode as m, normalizeStyle as _ } from "vue";
const h = {
  key: 0,
  class: "got-card-header"
}, v = /* @__PURE__ */ c({
  name: "GCard",
  __name: "index",
  props: {
    header: {
      type: String,
      default: ""
    },
    /**
     * @description CSS style of card body
     */
    bodyStyle: {
      type: String,
      default: ""
    },
    /**
     * @description custom class name of card body
     */
    bodyClass: String,
    /**
     * @description when to show card shadows
     */
    shadow: {
      type: String,
      values: ["always", "hover", "never"],
      default: "always"
    }
  },
  setup(e) {
    return (t, a) => (n(), s("div", {
      class: i(["got-card", `${e.shadow}-shadow`])
    }, [
      t.$slots.header || e.header ? (n(), s("div", h, [
        r(t.$slots, "header", {}, () => [
          u(y(e.header), 1)
        ], !0)
      ])) : f("", !0),
      m("div", {
        style: _(e.bodyStyle),
        class: "got-card-body"
      }, [
        r(t.$slots, "default", {}, void 0, !0)
      ], 4)
    ], 2));
  }
});
const g = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [d, l] of t)
    a[d] = l;
  return a;
}, o = /* @__PURE__ */ g(v, [["__scopeId", "data-v-335835f3"]]);
o.install = function(e) {
  return e.component(o.name, o), e;
};
const p = [o], S = function(e) {
  p.forEach((t) => {
    e.use(t);
  });
}, w = {
  install: S
};
export {
  o as Card,
  w as default
};
