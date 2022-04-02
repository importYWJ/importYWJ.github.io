import{_ as i,r as o,o as l,a as d,b as t,d as n,w as a,F as p,e,c as r}from"./app.7201ef71.js";const h={},u=t("h1",{id:"theme",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#theme","aria-hidden":"true"},"#"),e(" Theme")],-1),m=t("p",null,"VuePress theme can provide layouts, styles and many other features for you, helping you to focus on writing Markdown content.",-1),_=e("VuePress has a default theme out of the box, which is applied to our documentation site you are currently browsing. The default theme provides basic but useful features for documentation site, you can check out "),f=e("Default Theme Config Reference"),b=e(" for a full list of config."),y=t("p",null,[e("However, you might think it is not good enough. Or, you want to build a different type of site, for example, a blog, instead of a documentation. Then, you can try to "),t("a",{href:"#community-theme"},"use a community theme"),e(" or "),t("a",{href:"#local-theme"},"create a local theme"),e(".")],-1),v=t("h2",{id:"community-theme",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#community-theme","aria-hidden":"true"},"#"),e(" Community Theme")],-1),g=e("Community users have created lots of theme and published them to "),k={href:"https://www.npmjs.com/search?q=keywords:vuepress-theme",target:"_blank",rel:"noopener noreferrer"},x=e("NPM"),w=e(". You should check the theme's own documentation for detailed guide."),j=e("In general, you need to specify the name of the theme to use in "),T=e("theme"),N=e(" option:"),V=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>You can use either theme name or its shorthand:</p><table><thead><tr><th>Theme Name</th><th>Shorthand</th></tr></thead><tbody><tr><td><code>vuepress-theme-foo</code></td><td><code>foo</code></td></tr><tr><td><code>@org/vuepress-theme-bar</code></td><td><code>@org/bar</code></td></tr><tr><td><code>@vuepress/theme-default</code></td><td><code>@vuepress/default</code></td></tr></tbody></table><h2 id="local-theme" tabindex="-1"><a class="header-anchor" href="#local-theme" aria-hidden="true">#</a> Local Theme</h2><p>If you want to use your own custom theme but don&#39;t want to publish it, you can create a local theme.</p><p>First, create the local theme directory, typically <code>.vuepress/theme</code> :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2514\u2500 docs
   \u251C\u2500 .vuepress
   \u2502  \u251C\u2500 theme
   \u2502  \u2502  \u2514\u2500 index.js
   \u2502  \u2514\u2500 config.js
   \u2514\u2500 README.md
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,7),C=e("Then, set the "),E=e("theme"),L=e(" option to the absolute path of the "),I=e("theme entry"),R=e(" to use it:"),B=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/docs/.vuepress/theme/index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,1),F=e("Next, refer to "),M=e("Advanced > Writing a Theme"),P=e(" for how to write your own theme.");function A(D,S){const s=o("RouterLink"),c=o("ExternalLinkIcon");return l(),d(p,null,[u,m,t("p",null,[_,n(s,{to:"/reference/default-theme/config.html"},{default:a(()=>[f]),_:1}),b]),y,v,t("p",null,[g,t("a",k,[x,n(c)]),w]),t("p",null,[j,n(s,{to:"/reference/config.html#theme"},{default:a(()=>[T]),_:1}),N]),V,t("p",null,[C,n(s,{to:"/reference/config.html#theme"},{default:a(()=>[E]),_:1}),L,n(s,{to:"/advanced/theme.html#theme-entry"},{default:a(()=>[I]),_:1}),R]),B,t("p",null,[F,n(s,{to:"/advanced/theme.html"},{default:a(()=>[M]),_:1}),P])],64)}var q=i(h,[["render",A],["__file","theme.html.vue"]]);export{q as default};
