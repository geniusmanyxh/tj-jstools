import{_ as l,c as e,a,b as p,t as n,d as o,o as t}from"./app.a39af073.js";const m=JSON.parse('{"title":"\u6D4F\u89C8\u5668\u64CD\u4F5C","titleTemplate":"openFull","description":"","frontmatter":{"title":"\u6D4F\u89C8\u5668\u64CD\u4F5C","titleTemplate":"openFull"},"headers":[{"level":2,"title":"1-\u51FD\u6570\u5F15\u5165","slug":"_1-\u51FD\u6570\u5F15\u5165","link":"#_1-\u51FD\u6570\u5F15\u5165","children":[]},{"level":2,"title":"2-\u51FD\u6570\u58F0\u660E","slug":"_2-\u51FD\u6570\u58F0\u660E","link":"#_2-\u51FD\u6570\u58F0\u660E","children":[]},{"level":2,"title":"3-\u4F7F\u7528\u793A\u4F8B","slug":"_3-\u4F7F\u7528\u793A\u4F8B","link":"#_3-\u4F7F\u7528\u793A\u4F8B","children":[{"level":3,"title":"3.1- \u7B80\u5355\u4F7F\u7528","slug":"_3-1-\u7B80\u5355\u4F7F\u7528","link":"#_3-1-\u7B80\u5355\u4F7F\u7528","children":[]},{"level":3,"title":"3.2- \u6307\u5B9A\u5143\u7D20\u5168\u5C4F","slug":"_3-2-\u6307\u5B9A\u5143\u7D20\u5168\u5C4F","link":"#_3-2-\u6307\u5B9A\u5143\u7D20\u5168\u5C4F","children":[]},{"level":3,"title":"3.3- \u5F00\u542F\u914D\u7F6E","slug":"_3-3-\u5F00\u542F\u914D\u7F6E","link":"#_3-3-\u5F00\u542F\u914D\u7F6E","children":[]}]},{"level":2,"title":"4-OPTIONS\u914D\u7F6E\u8BE6\u89E3","slug":"_4-options\u914D\u7F6E\u8BE6\u89E3","link":"#_4-options\u914D\u7F6E\u8BE6\u89E3","children":[]}],"relativePath":"functions/browserTool/openFull.md","lastUpdated":1675236416000}'),r={name:"functions/browserTool/openFull.md"},c={id:"\u3010-frontmatter-title-\u2014\u2014-frontmatter-titletemplate-\u3011",tabindex:"-1"},F=a("a",{class:"header-anchor",href:"#\u3010-frontmatter-title-\u2014\u2014-frontmatter-titletemplate-\u3011","aria-hidden":"true"},"#",-1),i=o(`<p><strong>\u529F\u80FD\uFF1A</strong> \u5F00\u542F\u6D4F\u89C8\u5668\u5168\u5C4F\u72B6\u6001\u3002</p><p><strong>\u6CE8\u610F\uFF1A</strong> \u53EA\u6709\u7528\u6237\u7684\u4E3B\u52A8\u884C\u4E3A\u624D\u53EF\u4EE5\u89E6\u53D1\uFF08\u4EFB\u4F55\u9F20\u6807\u4E8B\u4EF6\u4EFB\u4F55\u952E\u76D8\u4E8B\u4EF6\u7B49\u7B49\uFF09,\u8FD9\u662F\u4E3A\u4E86\u7528\u6237\u4F53\u9A8C\u548C\u7528\u6237\u7684\u6D4F\u89C8\u5B89\u5168\u3002</p><details class="details custom-block"><summary>\u8B66\u544A\u8BE6\u60C5</summary><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">Failed to execute </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">requestFullscreen</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> on </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Element</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">: API can only be initiated by a user gesture</span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u610F\u601D\u5927\u6982\u662F\uFF1A\u5728&#39;Element&#39;\u4E0A\u6267\u884C&#39;requestFullscreen&#39;\u5931\u8D25:API\u53EA\u80FD\u901A\u8FC7\u7528\u6237\u624B\u52BF\u542F\u52A8\u3002</strong></p></details><h2 id="_1-\u51FD\u6570\u5F15\u5165" tabindex="-1">1-\u51FD\u6570\u5F15\u5165 <a class="header-anchor" href="#_1-\u51FD\u6570\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">openFull</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tj-jstools</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_2-\u51FD\u6570\u58F0\u660E" tabindex="-1">2-\u51FD\u6570\u58F0\u660E <a class="header-anchor" href="#_2-\u51FD\u6570\u58F0\u660E" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> openFull</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Element</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FullscreenOptions</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_3-\u4F7F\u7528\u793A\u4F8B" tabindex="-1">3-\u4F7F\u7528\u793A\u4F8B <a class="header-anchor" href="#_3-\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a></h2><h3 id="_3-1-\u7B80\u5355\u4F7F\u7528" tabindex="-1">3.1- \u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#_3-1-\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">openFull</span><span style="color:#C3E88D;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">openFullScreen</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4EE5\u4E0A\u662F\u5F00\u542F\u5168\u5C4F\u793A\u4F8B\uFF0C\u7528\u6237\u901A\u8FC7\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u8BE5\u529F\u80FD\u3002<strong style="color:red;">\u4E0D\u80FD\u81EA\u52A8\u52A0\u8F7D\uFF01</strong></p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">openFull</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u610F\u601D\u4EE3\u7801\uFF0C\u8868\u793A\u81EA\u52A8\u6253\u5F00\u5168\u5C4F\u529F\u80FD\uFF0C\u4F46\u662F\u6D4F\u89C8\u5668\u5E76\u4E0D\u4F1A\u89E6\u53D1\u8BE5\u529F\u80FD\uFF0C\u800C\u662F\u4EE5\u4E0B\u53D1\u51FA\u8B66\u544A\uFF01</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Failed to execute &#39;requestFullscreen&#39; on &#39;Element&#39;: API can only be initiated by a user gesture.</p></div><h3 id="_3-2-\u6307\u5B9A\u5143\u7D20\u5168\u5C4F" tabindex="-1">3.2- \u6307\u5B9A\u5143\u7D20\u5168\u5C4F <a class="header-anchor" href="#_3-2-\u6307\u5B9A\u5143\u7D20\u5168\u5C4F" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fullId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">margin-top: 40px; width: 100%;height: 100px;background-color: red;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u6D4B\u8BD5\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">openFullOfEl</span><span style="color:#C3E88D;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">openFullScreenOfEl</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6307\u5B9A\u5143\u7D20\u5F00\u542F\u5168\u5C4F\uFF0C\u9700\u8981\u5C06\u8BE5\u5143\u7D20\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165<code>openFull</code>\u65B9\u6CD5\u4E2D\uFF0C\u5982\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">openFullOfEl</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Element</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fullId</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">openFull</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_3-3-\u5F00\u542F\u914D\u7F6E" tabindex="-1">3.3- \u5F00\u542F\u914D\u7F6E <a class="header-anchor" href="#_3-3-\u5F00\u542F\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">openFullOfEl</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Element</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fullId</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">openFull</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">navigationUI</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">show</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u914D\u7F6E\u53C2\u6570\u7C7B\u578B\u662F\u4E00\u4E2AJSON\u5BF9\u8C61\u7C7B\u578B\uFF0C\u76EE\u524D\u53EA\u6709<code>navigationUI</code>\u8FD9\u4E00\u4E2A\u9009\u9879\u3002</p><h2 id="_4-options\u914D\u7F6E\u8BE6\u89E3" tabindex="-1">4-OPTIONS\u914D\u7F6E\u8BE6\u89E3 <a class="header-anchor" href="#_4-options\u914D\u7F6E\u8BE6\u89E3" aria-hidden="true">#</a></h2><ul><li>navigationUI \u8BE5\u914D\u7F6E\u7684\u9ED8\u8BA4\u503C\uFF1A<code>auto</code>, \u53EF\u9009\u503C\u6709 <code>auto</code>\u3001<code>hide</code>\u3001<code>show</code>\u4E09\u4E2A\u9009\u9879\u3002</li></ul><p>\u8BE6\u60C5\u53C2\u7167MDN\u5730\u5740\uFF1A<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen" target="_blank" rel="noreferrer">navigationUI</a></p>`,24);function D(s,y,d,u,A,b){return t(),e("div",null,[a("h1",c,[p("\u3010"+n(s.$frontmatter.title)+" \u2014\u2014 "+n(s.$frontmatter.titleTemplate)+"\u3011 ",1),F]),i])}const h=l(r,[["render",D]]);export{m as __pageData,h as default};
