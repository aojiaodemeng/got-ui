import { defineComponent as m, openBlock as s, createElementBlock as o, normalizeClass as _, renderSlot as u, createTextVNode as v, toDisplayString as f, createCommentVNode as h, createElementVNode as g, normalizeStyle as y, computed as p, Fragment as $, renderList as b } from "vue";
const S = {
  key: 0,
  class: "got-card-header"
}, x = /* @__PURE__ */ m({
  name: "GCard",
  __name: "main",
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
    return (t, a) => (s(), o("div", {
      class: _(["got-card", `${e.shadow}-shadow`])
    }, [
      t.$slots.header || e.header ? (s(), o("div", S, [
        u(t.$slots, "header", {}, () => [
          v(f(e.header), 1)
        ], !0)
      ])) : h("", !0),
      g("div", {
        style: y(e.bodyStyle),
        class: "got-card-body"
      }, [
        u(t.$slots, "default", {}, void 0, !0)
      ], 4)
    ], 2));
  }
});
const B = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, r] of t)
    a[n] = r;
  return a;
}, l = /* @__PURE__ */ B(x, [["__scopeId", "data-v-a589de09"]]);
l.install = function(e) {
  return e.component(l.name, l), e;
};
const d = /* @__PURE__ */ m({
  name: "GTag",
  __name: "main",
  props: {
    type: { type: String, default: "default" },
    outline: Boolean,
    style: Object,
    round: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, a = p(() => {
      const n = ["g-tag", "g-tag-" + t.type];
      return t.outline && n.push("g-tag-outline"), t.round && n.push("g-tag-round"), n;
    });
    return (n, r) => (s(), o("div", {
      class: _(a.value),
      style: y(e.style)
    }, [
      g("span", null, [
        u(n.$slots, "default")
      ])
    ], 6));
  }
});
d.install = function(e) {
  return e.component(d.name, d), e;
};
const C = { class: "g-breadcrumb" }, c = /* @__PURE__ */ m({
  name: "GBreadcrumb",
  __name: "main",
  props: {
    paths: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, a) => (s(), o("div", C, [
      (s(!0), o($, null, b(e.paths, (n, r) => (s(), o("div", {
        class: "g-breadcrumb-item",
        key: r
      }, f(n.text), 1))), 128))
    ]));
  }
});
c.install = function(e) {
  return e.component(c.name, c), e;
};
const i = /* @__PURE__ */ m({
  name: "GDivider",
  __name: "main",
  props: {
    type: { type: String, default: "normal" },
    align: { type: String, default: "center" },
    offset: { type: Number, default: 32 }
  },
  setup(e) {
    const t = e, a = p(() => ({
      "--got-divider-offset": t.offset + "px"
    }));
    return (n, r) => (s(), o("div", {
      class: _(["got-divider", "got-divider-" + e.type, "got-divider-" + e.align]),
      style: y(a.value)
    }, [
      u(n.$slots, "default")
    ], 6));
  }
});
i.install = function(e) {
  return e.component(i.name, i), e;
};
const k = [l, d, c, i], w = function(e) {
  k.forEach((t) => {
    e.use(t);
  });
}, N = {
  install: w
};
export {
  c as Breadcrumb,
  l as Card,
  i as Divider,
  d as Tag,
  N as default
};
