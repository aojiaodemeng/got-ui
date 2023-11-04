import{_ as i,C as t,c as e,H as l,w as a,k as s,a as o,Q as d,o as p,F as h,D as g,t as m}from"./chunks/framework.0d0b215e.js";const x=JSON.parse('{"title":"Card组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/card.md","filePath":"components/card.md","lastUpdated":1698946811000}'),_={name:"components/card.md"},u=s("h1",{id:"card组件",tabindex:"-1"},[o("Card组件 "),s("a",{class:"header-anchor",href:"#card组件","aria-label":'Permalink to "Card组件"'},"​")],-1),E={class:"card-header"},f=s("span",null,"Card name",-1),y=d(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>color</td><td>string</td><td>undefined</td><td>图标颜色</td></tr><tr><td>size</td><td>number|string</td><td>undefined</td><td>图片大小</td></tr></tbody></table><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Theme Data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Page Data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Page Frontmatter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Theme Data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Page Data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Page Frontmatter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div>`,3);function b(C,v,D,F,P,k){const c=t("el-button"),r=t("g-card");return p(),e("div",null,[u,l(r,{class:"box-card"},{header:a(()=>[s("div",E,[f,l(c,{class:"button",text:""},{default:a(()=>[o("Operation button")]),_:1})])]),default:a(()=>[(p(),e(h,null,g(4,n=>s("div",{key:n,class:"text item"},m("List item "+n),1)),64))]),_:1}),y])}const T=i(_,[["render",b]]);export{x as __pageData,T as default};
