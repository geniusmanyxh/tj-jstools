import{_ as l,c as e,a,b as o,t as n,d as p,o as t}from"./app.a39af073.js";const m=JSON.parse('{"title":"\u7C7B\u578B\u5224\u65AD","titleTemplate":"isFunction","description":"","frontmatter":{"title":"\u7C7B\u578B\u5224\u65AD","titleTemplate":"isFunction"},"headers":[{"level":2,"title":"1-\u51FD\u6570\u5F15\u5165","slug":"_1-\u51FD\u6570\u5F15\u5165","link":"#_1-\u51FD\u6570\u5F15\u5165","children":[]},{"level":2,"title":"2-\u51FD\u6570\u58F0\u660E","slug":"_2-\u51FD\u6570\u58F0\u660E","link":"#_2-\u51FD\u6570\u58F0\u660E","children":[]},{"level":2,"title":"3-\u4F7F\u7528\u793A\u4F8B","slug":"_3-\u4F7F\u7528\u793A\u4F8B","link":"#_3-\u4F7F\u7528\u793A\u4F8B","children":[]},{"level":2,"title":"4-\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A","slug":"_4-\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A","link":"#_4-\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A","children":[]}],"relativePath":"functions/typeTool/isFunction.md","lastUpdated":1675236416000}'),c={name:"functions/typeTool/isFunction.md"},r={id:"\u3010-frontmatter-title-\u2014\u2014-frontmatter-titletemplate-\u3011",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#\u3010-frontmatter-title-\u2014\u2014-frontmatter-titletemplate-\u3011","aria-hidden":"true"},"#",-1),d=p(`<p><strong>\u529F\u80FD\uFF1A</strong> \u5224\u65AD\u6570\u636E\u662F\u5426\u662F\u4E00\u4E2A\u51FD\u6570(<code>function</code>)\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5982\u679C\u662F\u5219\u8FD4\u56DE<code>true</code>,\u5426\u5219\u8FD4\u56DE<code>false</code>\u3002</p><h2 id="_1-\u51FD\u6570\u5F15\u5165" tabindex="-1">1-\u51FD\u6570\u5F15\u5165 <a class="header-anchor" href="#_1-\u51FD\u6570\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isFunction</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tj-jstools</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_2-\u51FD\u6570\u58F0\u660E" tabindex="-1">2-\u51FD\u6570\u58F0\u660E <a class="header-anchor" href="#_2-\u51FD\u6570\u58F0\u660E" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isFunction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_3-\u4F7F\u7528\u793A\u4F8B" tabindex="-1">3-\u4F7F\u7528\u793A\u4F8B <a class="header-anchor" href="#_3-\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res1</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isFunction</span><span style="color:#A6ACCD;">(Array) </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res2</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isFunction</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res3</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isFunction</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Array</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>isFunction</code>\u65B9\u6CD5\u662F\u91C7\u7528<code>Object.prototype.toString.call(value)</code>\u65B9\u6CD5\u5B9E\u73B0\u7684\u3002</p></div><h2 id="_4-\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A" tabindex="-1">4-\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A <a class="header-anchor" href="#_4-\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A" aria-hidden="true">#</a></h2><div class="danger custom-block"><p class="custom-block-title">ERROR</p><p>\u8BE5\u65B9\u6CD5\u7684\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A,\u5426\u5219\u5C06\u629B\u51FA\u9519\u8BEF</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">Uncaught </span><span style="color:#FFCB6B;">Error</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> isXXXX\u65B9\u6CD5\u7684\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A\uFF01</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div></div>`,10);function y(s,A,C,D,F,u){return t(),e("div",null,[a("h1",r,[o("\u3010"+n(s.$frontmatter.title)+" \u2014\u2014 "+n(s.$frontmatter.titleTemplate)+"\u3011 ",1),i]),d])}const _=l(c,[["render",y]]);export{m as __pageData,_ as default};
