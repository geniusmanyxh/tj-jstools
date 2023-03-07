import{_ as s,c as n,o as a,d as l}from"./app.5daf3b16.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FEB\u901F\u4E0A\u624B","slug":"\u5FEB\u901F\u4E0A\u624B","link":"#\u5FEB\u901F\u4E0A\u624B","children":[{"level":3,"title":"\u5B89\u88C5\u4F9D\u8D56","slug":"\u5B89\u88C5\u4F9D\u8D56","link":"#\u5B89\u88C5\u4F9D\u8D56","children":[]},{"level":3,"title":"\u5224\u65AD\u6570\u636E\u7C7B\u578B","slug":"\u5224\u65AD\u6570\u636E\u7C7B\u578B","link":"#\u5224\u65AD\u6570\u636E\u7C7B\u578B","children":[]},{"level":3,"title":"\u6D4F\u89C8\u5668\u7F13\u5B58\uFF08cookie/localStorage/sessionStorage\uFF09","slug":"\u6D4F\u89C8\u5668\u7F13\u5B58\uFF08cookie-localstorage-sessionstorage\uFF09","link":"#\u6D4F\u89C8\u5668\u7F13\u5B58\uFF08cookie-localstorage-sessionstorage\uFF09","children":[]}]}],"relativePath":"guide/getting-started.md","lastUpdated":1678171819000}'),p={name:"guide/getting-started.md"},o=l(`<div style="display:flex;flex-wrap:wrap;"><div style="margin-top:2px;margin-left:2px;"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/geniusmanyxh/tj-jstools/main.yml?style=plastic">\xA0 </div><div style="margin-top:2px;margin-left:2px;"><img alt="npm" src="https://img.shields.io/npm/dw/tj-jstools?style=plastic">\xA0</div><div style="margin-top:2px;margin-left:2px;"><img alt="codecov" src="https://codecov.io/gh/geniusmanyxh/tj-jstools/branch/master/graph/badge.svg?token=EXYI8985P8">\xA0</div><div style="margin-top:2px;margin-left:2px;"><img alt="NPM" src="https://img.shields.io/npm/l/tj-jstools?style=plastic">\xA0</div><div style="margin-top:2px;margin-left:2px;"><img alt="npm" src="https://img.shields.io/npm/v/tj-jstools?style=plastic">\xA0</div><div style="margin-top:2px;margin-left:2px;"><img alt="node-current" src="https://img.shields.io/node/v/tj-jstools?style=plastic">\xA0</div><div style="margin-top:2px;margin-left:2px;"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/geniusmanyxh/tj-jstools?style=social">\xA0</div><div style="margin-top:2px;margin-left:2px;"><img alt="GitHub commit merge status" src="https://img.shields.io/github/commit-status/geniusmanyxh/tj-jstools/master/8dabedcffbc9f97c03ad4bed35b828a39530e0f1">\xA0</div><div style="margin-top:2px;margin-left:2px;"><img alt="GitHub language count" src="https://img.shields.io/github/languages/count/geniusmanyxh/tj-jstools?style=plastic">\xA0</div><div style="margin-top:2px;margin-left:2px;"><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/geniusmanyxh/tj-jstools?style=plastic">\xA0</div><div style="margin-top:2px;margin-left:2px;"><img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/geniusmanyxh/tj-jstools?style=plastic">\xA0</div><div style="margin-top:2px;margin-left:2px;"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/geniusmanyxh/tj-jstools?style=plastic">\xA0</div><div style="margin-top:2px;margin-left:2px;"><img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/geniusmanyxh/tj-jstools?style=plastic"></div></div><ul><li><a href="http://jstools.itbooks.work" target="_blank" rel="noreferrer">\u5B98\u65B9\u4F7F\u7528\u6587\u6863\u5730\u5740\uFF1Ahttp://jstools.itbooks.work</a></li><li><a href="https://geniusmanyxh.github.io/tj-jstools/" target="_blank" rel="noreferrer">GitHub \u4F7F\u7528\u6587\u6863\u5730\u5740\uFF1Ahttps://geniusmanyxh.github.io/tj-jstools/</a></li></ul><hr><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1">\u5B89\u88C5\u4F9D\u8D56 <a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a></h3><p><strong>npm\u65B9\u5F0F</strong></p><div class="language-sh line-numbers-mode"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install tj-jstools</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u6D4F\u89C8\u5668\u65B9\u5F0F</strong></p><ul><li><a href="https://cdn.jsdelivr.net/npm/tj-jstools@1.3.0/static/umd/index.js" target="_blank" rel="noreferrer">jsdelivr\u7684umd\u683C\u5F0F\u5730\u5740</a></li></ul><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/tj-jstools@1.3.0/static/umd/index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">_tj</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = window</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(_tj);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5F15\u5165\u540E\uFF0C\u67E5\u770B\u5168\u5C40\u53D8\u91CF\u4E2D\u7684<code>window._tj</code>\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u6240\u6709\u5DE5\u5177\u51FD\u6570\u3002</p><hr><h3 id="\u5224\u65AD\u6570\u636E\u7C7B\u578B" tabindex="-1">\u5224\u65AD\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u5224\u65AD\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h3><div class="language-typescript line-numbers-mode"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isInt</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isFloat</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isNumber</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tj-jstools</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isNumRes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">12.9</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isIntRes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isInt</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">12.9</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// false</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isFloatRes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isFloat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">12.9</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5F53\u4F60\u60F3\u786E\u5B9A\u67D0\u4E00\u4E2A\u53D8\u91CF\u6216\u8005\u503C\uFF0C\u662F\u5426\u548C\u4F60\u9884\u60F3\u7684\u4E00\u6837\u662F\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0A\u8FD9\u4E9B\u6570\u636E\u7C7B\u578B\u5224\u65AD\u51FD\u6570\u3002</p><p>\u5F53\u4F60\u60F3\u83B7\u53D6\u67D0\u4E00\u4E2A\u53D8\u91CF\u6216\u8005\u503C\u5177\u4F53\u7684\u6570\u636E\u7C7B\u578B\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u51FD\u6570\uFF1A</p><div class="language-typescript line-numbers-mode"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getType</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getArrayAllType</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getObjectAllType</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tj-jstools</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getTypeRes1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getType</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Array</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// array</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getTypeRes2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getType</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// object</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getTypeRes3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getType</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;">// undefined</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getTypeRes4 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getType</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// infinite</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5224\u65AD\u6570\u7EC4\u91CC\u9762\u7684\u6570\u636E\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,null,undefined,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5.01</span><span style="color:#89DDFF;">,{},</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{},NaN,</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arrRes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getArrayAllType</span><span style="color:#A6ACCD;">(arr) </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">//[&#39;boolean&#39;, &#39;null&#39;, &#39;undefined&#39;, &#39;infinite&#39;, &#39;int&#39;, &#39;float&#39;,&#39;object&#39;,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// &#39;array&#39;,&#39;function&#39;,&#39;NaN&#39;,&#39;string&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;">// \u5224\u65AD\u5BF9\u8C61\u91CC\u9762\u7684\u6570\u636E\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> testObj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">e</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6.01</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">g</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">h</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> objRes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getObjectAllType</span><span style="color:#A6ACCD;">(testObj)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">[</span></span>
<span class="line"><span style="color:#676E95;">  &#39;boolean&#39;, &#39;null&#39;, &#39;undefined&#39;, &#39;int&#39;, &#39;float&#39;,&#39;infinite&#39;,</span></span>
<span class="line"><span style="color:#676E95;">  &#39;object&#39;,  &#39;array&#39;, &#39;function&#39;</span></span>
<span class="line"><span style="color:#676E95;">]</span></span>
<span class="line"><span style="color:#676E95;">  */</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><hr><h3 id="\u6D4F\u89C8\u5668\u7F13\u5B58\uFF08cookie-localstorage-sessionstorage\uFF09" tabindex="-1">\u6D4F\u89C8\u5668\u7F13\u5B58\uFF08cookie/localStorage/sessionStorage\uFF09 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7F13\u5B58\uFF08cookie-localstorage-sessionstorage\uFF09" aria-hidden="true">#</a></h3><div class="language-typescript line-numbers-mode"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newStorage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tj-jstools</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Coptions </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">prefix</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">linkSign</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">suffix</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jstools</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">expireTime</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">unitTime</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u4E00\u4E2A\u64CD\u4F5CCookie\u7684\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> CInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">newStorage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cookie</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Coptions)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u521B\u5EFA\u4E00\u4E2A\u64CD\u4F5ClocalStorage\u7684\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> LInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">newStorage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">local</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Coptions)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u4E00\u4E2A\u64CD\u4F5CsessionStorage\u7684\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> SInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">newStorage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">session</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Coptions)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4FDD\u5B58\u548C\u83B7\u53D6cookie\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">CInstance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setFun</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testValue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">CInstance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFun</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// tj@test@jstools: testValue ; \u8FC7\u671F\u65F6\u95F4\uFF1A2\u5929</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4FDD\u5B58\u548C\u83B7\u53D6localStorage\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">LInstance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setFun</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testValue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">LInstance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFun</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// tj@test@jstools: testValue ; \u8FC7\u671F\u65F6\u95F4\uFF1A2\u5929</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4FDD\u5B58\u548C\u83B7\u53D6sessionStorage\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">SInstance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setFun</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testValue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">SInstance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFun</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// tj@test@jstools: testValue ; \u8FC7\u671F\u65F6\u95F4\uFF1A2\u5929</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li><p><strong>\u5BF9sessionStorage\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF0C\u5176\u5B9E\u6548\u679C\u4E0D\u5927\uFF0C\u4F1A\u968F\u7740\u6D4F\u89C8\u5668\u7684\u5173\u95ED\u800C\u6D88\u4EA1</strong></p></li><li><p><strong>\u5982\u679Ccookie\u4E0D\u8BBE\u7F6Eexpires\uFF0Ccookie \u4F1A\u5728\u5BF9\u8BDD\u7ED3\u675F\u65F6\u8FC7\u671F</strong></p></li></ul><p><a href="./../functions/index.html"><strong>\u5176\u4ED6\u8BE6\u60C5\u67E5\u770B\u51FD\u6570\u5177\u4F53\u6587\u6863</strong></a></p>`,23),e=[o];function t(r,c,i,y,D,F){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{A as __pageData,b as default};