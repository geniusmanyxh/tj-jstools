import{_ as e,c as l,a,b as o,t as n,d as p,o as t}from"./app.a39af073.js";const b=JSON.parse('{"title":"\u6570\u503C\u64CD\u4F5C","titleTemplate":"numberThousandsFormat","description":"","frontmatter":{"title":"\u6570\u503C\u64CD\u4F5C","titleTemplate":"numberThousandsFormat"},"headers":[{"level":2,"title":"1-\u51FD\u6570\u5F15\u5165","slug":"_1-\u51FD\u6570\u5F15\u5165","link":"#_1-\u51FD\u6570\u5F15\u5165","children":[]},{"level":2,"title":"2-\u51FD\u6570\u58F0\u660E","slug":"_2-\u51FD\u6570\u58F0\u660E","link":"#_2-\u51FD\u6570\u58F0\u660E","children":[]},{"level":2,"title":"3-\u4F7F\u7528\u793A\u4F8B","slug":"_3-\u4F7F\u7528\u793A\u4F8B","link":"#_3-\u4F7F\u7528\u793A\u4F8B","children":[]}],"relativePath":"functions/numberTool/numberThousandsFormat.md","lastUpdated":1675236416000}'),r={name:"functions/numberTool/numberThousandsFormat.md"},c={id:"\u3010-frontmatter-title-\u2014\u2014-frontmatter-titletemplate-\u3011",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#\u3010-frontmatter-title-\u2014\u2014-frontmatter-titletemplate-\u3011","aria-hidden":"true"},"#",-1),d=p(`<p><strong>\u529F\u80FD\uFF1A</strong> \u6570\u503C\u5343\u5206\u4F4D\u683C\u5F0F\u5316\u5904\u7406\u3002</p><h2 id="_1-\u51FD\u6570\u5F15\u5165" tabindex="-1">1-\u51FD\u6570\u5F15\u5165 <a class="header-anchor" href="#_1-\u51FD\u6570\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">numberThousandsFormat</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tj-jstools</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_2-\u51FD\u6570\u58F0\u660E" tabindex="-1">2-\u51FD\u6570\u58F0\u660E <a class="header-anchor" href="#_2-\u51FD\u6570\u58F0\u660E" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">numberThousandsFormat</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">decimal</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_3-\u4F7F\u7528\u793A\u4F8B" tabindex="-1">3-\u4F7F\u7528\u793A\u4F8B <a class="header-anchor" href="#_3-\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#82AAFF;">numberThousandsFormat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1234565</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 1,234,565</span></span>
<span class="line"><span style="color:#82AAFF;">numberThousandsFormat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1234565.256</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 1,234,565.256</span></span>
<span class="line"><span style="color:#82AAFF;">numberThousandsFormat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1234565.256</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 1,234,565.26</span></span>
<span class="line"><span style="color:#82AAFF;">numberThousandsFormat</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">12456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// undefined</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5F53\u4F20\u5165\u9700\u8981\u5904\u7406\u7684\u53C2\u6570\u4E0D\u662F<code>number</code>\u7C7B\u578B\u65F6\uFF0C\u5C06\u8FD4\u56DE<code>undefined</code>\u3002 \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u5904\u7406\u540E\u7684\u6570\u503C\u9700\u8981\u4FDD\u7559\u591A\u5C11\u4E3A\u5C0F\u6570\uFF0C\u9ED8\u8BA4\u503C\u662F<code>-1</code>, \u4EE3\u8868\u4E0D\u5904\u7406\uFF0C\u539F\u6765\u662F\u6574\u6570\u5C31\u8FD4\u56DE\u6574\u6570\uFF0C\u539F\u6765\u662F\u5C0F\u6570\u5C31\u4FDD\u7559\u539F\u6765\u7684\u5C0F\u6570\u3002</p>`,8);function u(s,F,y,m,C,A){return t(),l("div",null,[a("h1",c,[o("\u3010"+n(s.$frontmatter.title)+" \u2014\u2014 "+n(s.$frontmatter.titleTemplate)+"\u3011 ",1),i]),d])}const h=e(r,[["render",u]]);export{b as __pageData,h as default};
