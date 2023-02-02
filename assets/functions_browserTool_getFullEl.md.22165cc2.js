import{_ as n,c as l,a as e,b as t,t as a,d as o,o as p}from"./app.c36a20b7.js";const m=JSON.parse('{"title":"\u6D4F\u89C8\u5668\u64CD\u4F5C","titleTemplate":"getFullEl","description":"","frontmatter":{"title":"\u6D4F\u89C8\u5668\u64CD\u4F5C","titleTemplate":"getFullEl"},"headers":[{"level":2,"title":"1-\u51FD\u6570\u5F15\u5165","slug":"_1-\u51FD\u6570\u5F15\u5165","link":"#_1-\u51FD\u6570\u5F15\u5165","children":[]},{"level":2,"title":"2-\u51FD\u6570\u58F0\u660E","slug":"_2-\u51FD\u6570\u58F0\u660E","link":"#_2-\u51FD\u6570\u58F0\u660E","children":[]},{"level":2,"title":"3-\u4F7F\u7528\u793A\u4F8B","slug":"_3-\u4F7F\u7528\u793A\u4F8B","link":"#_3-\u4F7F\u7528\u793A\u4F8B","children":[]}],"relativePath":"functions/browserTool/getFullEl.md","lastUpdated":1675307648000}'),r={name:"functions/browserTool/getFullEl.md"},c={id:"\u3010-frontmatter-title-\u2014\u2014-frontmatter-titletemplate-\u3011",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#\u3010-frontmatter-title-\u2014\u2014-frontmatter-titletemplate-\u3011","aria-hidden":"true"},"#",-1),d=o(`<p><strong>\u529F\u80FD\uFF1A</strong> \u83B7\u53D6\u5F53\u524D\u5168\u5C4F\u5143\u7D20\u3002</p><h2 id="_1-\u51FD\u6570\u5F15\u5165" tabindex="-1">1-\u51FD\u6570\u5F15\u5165 <a class="header-anchor" href="#_1-\u51FD\u6570\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getFullEl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tj-jstools</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_2-\u51FD\u6570\u58F0\u660E" tabindex="-1">2-\u51FD\u6570\u58F0\u660E <a class="header-anchor" href="#_2-\u51FD\u6570\u58F0\u660E" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getFullEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Element</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_3-\u4F7F\u7528\u793A\u4F8B" tabindex="-1">3-\u4F7F\u7528\u793A\u4F8B <a class="header-anchor" href="#_3-\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Element</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getFullEl</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8BE5\u65B9\u6CD5\u662F\u5224\u65AD\u5F53\u524D\u6D4F\u89C8\u5668\u5F00\u542F\u5168\u5C4F\u7684\u5143\u7D20,\u5982\u679C\u672A\u5F00\u542F\u5168\u5C4F\u8FD4\u56DE\u7684\u662F<code>undefined</code>,\u53CD\u4E4B\u662F\u4E00\u4E2A\u5177\u4F53\u7684DOM\u5143\u7D20\u3002</p>`,8);function D(s,C,y,A,F,u){return p(),l("div",null,[e("h1",c,[t("\u3010"+a(s.$frontmatter.title)+" \u2014\u2014 "+a(s.$frontmatter.titleTemplate)+"\u3011 ",1),i]),d])}const h=n(r,[["render",D]]);export{m as __pageData,h as default};