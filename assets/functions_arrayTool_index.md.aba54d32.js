import{_ as e,c as t,o as a,d as s}from"./app.c36a20b7.js";const u=JSON.parse('{"title":"\u6570\u7EC4\u7C7B\u5DE5\u5177","titleTemplate":"arrayTool","description":"\u524D\u7AEF\u4E1A\u52A1\u5DE5\u5177\u5E93\u2014\u2014\u6570\u7EC4\u64CD\u4F5C","frontmatter":{"title":"\u6570\u7EC4\u7C7B\u5DE5\u5177","titleTemplate":"arrayTool","layout":"doc","head":[["meta",{"name":"description","content":"\u524D\u7AEF\u4E1A\u52A1\u5DE5\u5177\u5E93\u2014\u2014\u6570\u7EC4\u64CD\u4F5C"}],["meta",{"name":"keywords","content":"JSTOOLS arrayTool"}]]},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":2,"title":"\u7B80\u5355\u4F7F\u7528","slug":"\u7B80\u5355\u4F7F\u7528","link":"#\u7B80\u5355\u4F7F\u7528","children":[]},{"level":2,"title":"API-\u5217\u8868","slug":"api-\u5217\u8868","link":"#api-\u5217\u8868","children":[]}],"relativePath":"functions/arrayTool/index.md","lastUpdated":1675307648000}'),n={name:"functions/arrayTool/index.md"},o=s(`<h1 id="tj-jstools-\u6570\u7EC4\u5DE5\u5177\u51FD\u6570" tabindex="-1">TJ-JSTOOLS ---- \u6570\u7EC4\u5DE5\u5177\u51FD\u6570 <a class="header-anchor" href="#tj-jstools-\u6570\u7EC4\u5DE5\u5177\u51FD\u6570" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-sh line-numbers-mode"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">  npm i tj-jstools</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1">\u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toTreeData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tj-jstools</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(toTreeData)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="api-\u5217\u8868" tabindex="-1">API-\u5217\u8868 <a class="header-anchor" href="#api-\u5217\u8868" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5E8F\u53F7</th><th style="text-align:center;">\u540D\u79F0</th><th>\u53C2\u6570</th><th>\u529F\u80FD\u7B80\u4ECB</th></tr></thead><tbody><tr><td>1</td><td style="text-align:center;"><a href="./toTreeData.html"><code>toTreeData</code></a></td><td>targetArr: <code>any[]</code>,<br> options?: <code>treeOption</code></td><td>\u5C06\u7279\u5B9A\u6570\u7EC4\u8F6C\u4E3A\u6811\u5F62\u7ED3\u6784</td></tr><tr><td>2</td><td style="text-align:center;"><a href="./treeToFlat.html"><code>treeToFlat</code></a></td><td>targetArr: <code>any[]</code>,<br> childName?: <code>string</code></td><td>\u5C06\u6811\u5F62\u7ED3\u6784\u6241\u5E73\u5316\u4E00\u7EF4\u6570\u7EC4</td></tr><tr><td>3</td><td style="text-align:center;"><a href="./findTreeData.html"><code>findTreeData</code></a></td><td>targetArr: <code>any[]</code>,<br> conditions: <code>object</code>,<br> cb?: <code>Function</code>, <br>childName?: <code>string</code></td><td>\u67E5\u627E\u7B26\u5408\u6761\u4EF6\u7684\u6811\u5F62\u8282\u70B9</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u70B9\u51FBAPI\u540D\u79F0\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8FDB\u5165\u5BF9\u5E94API\u8BE6\u60C5\u9875\u9762\uFF01</p></div>`,8),l=[o];function r(c,d,p,i,h,y){return a(),t("div",null,l)}const D=e(n,[["render",r]]);export{u as __pageData,D as default};