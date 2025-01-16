import{_ as i,c as a,a0 as e,o as t}from"./chunks/framework.Bw0siCr8.js";const c=JSON.parse('{"title":"Welcome to Allbibek","description":"","frontmatter":{},"headers":[],"relativePath":"newpost.md","filePath":"newpost.md"}'),n={name:"newpost.md"};function l(r,s,h,o,p,d){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="welcome-to-allbibek" tabindex="-1">Welcome to Allbibek <a class="header-anchor" href="#welcome-to-allbibek" aria-label="Permalink to &quot;Welcome to Allbibek&quot;">​</a></h1><p>Hi there 👋 Welcome to our documentation site! Let&#39;s explore some of the amazing features that VitePress offers.</p><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><p>VitePress is a Static Site Generator (SSG) designed to help you create beautiful documentation sites with minimal effort. Here&#39;s why it&#39;s awesome:</p><ul><li>📝 <strong>Markdown-Centered</strong> - Focus on writing content in Markdown</li><li>⚡ <strong>Lightning Fast</strong> - Powered by Vite for instant development</li><li>🎨 <strong>Customizable</strong> - Easy to theme and extend</li><li>🔧 <strong>Developer Friendly</strong> - Great DX out of the box</li></ul><h2 id="markdown-features" tabindex="-1">Markdown Features <a class="header-anchor" href="#markdown-features" aria-label="Permalink to &quot;Markdown Features&quot;">​</a></h2><h3 id="code-blocks" tabindex="-1">Code Blocks <a class="header-anchor" href="#code-blocks" aria-label="Permalink to &quot;Code Blocks&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Here&#39;s some JavaScript code</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`Hello, \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}!\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># And some Python</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">!&quot;</span></span></code></pre></div><h3 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Feature</th><th>Description</th></tr></thead><tbody><tr><td>Fast</td><td>Built on top of Vite</td></tr><tr><td>Flexible</td><td>Use Vue components in Markdown</td></tr><tr><td>Simple</td><td>Minimal configuration needed</td></tr></tbody></table><h3 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip - useful for highlighting important information!</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning - use it to prevent common mistakes.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a danger zone - perfect for critical warnings.</p></div><details class="details custom-block"><summary>Click me to view more</summary><p>Here&#39;s some hidden content that users can reveal by clicking!</p></details><h2 id="using-vue-in-markdown" tabindex="-1">Using Vue in Markdown <a class="header-anchor" href="#using-vue-in-markdown" aria-label="Permalink to &quot;Using Vue in Markdown&quot;">​</a></h2><p>VitePress allows you to use Vue directly in your Markdown files. Here&#39;s a simple counter example:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Count is: {{ count }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="emoji-support" tabindex="-1">Emoji Support <a class="header-anchor" href="#emoji-support" aria-label="Permalink to &quot;Emoji Support&quot;">​</a></h2><p>VitePress comes with emoji support! 🎉</p><ul><li>🚀 Fast development</li><li>💡 Smart features</li><li>🎨 Beautiful themes</li><li>🔧 Easy configuration</li></ul><h2 id="lists" tabindex="-1">Lists <a class="header-anchor" href="#lists" aria-label="Permalink to &quot;Lists&quot;">​</a></h2><h3 id="unordered-lists" tabindex="-1">Unordered Lists <a class="header-anchor" href="#unordered-lists" aria-label="Permalink to &quot;Unordered Lists&quot;">​</a></h3><ul><li>First item</li><li>Second item <ul><li>Nested item 1</li><li>Nested item 2</li></ul></li><li>Third item</li></ul><h3 id="ordered-lists" tabindex="-1">Ordered Lists <a class="header-anchor" href="#ordered-lists" aria-label="Permalink to &quot;Ordered Lists&quot;">​</a></h3><ol><li>First step</li><li>Second step <ol><li>Sub-step one</li><li>Sub-step two</li></ol></li><li>Third step</li></ol><h2 id="links-and-references" tabindex="-1">Links and References <a class="header-anchor" href="#links-and-references" aria-label="Permalink to &quot;Links and References&quot;">​</a></h2><ul><li><a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress Documentation</a></li><li><a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue.js</a></li><li><a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a></li></ul><h2 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-label="Permalink to &quot;Images&quot;">​</a></h2><p>You can add images like this:</p><p><img src="https://vitepress.dev/vitepress-logo-large.webp" alt="VitePress Logo"></p><h2 id="keyboard-keys" tabindex="-1">Keyboard Keys <a class="header-anchor" href="#keyboard-keys" aria-label="Permalink to &quot;Keyboard Keys&quot;">​</a></h2><p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p><h2 id="text-formatting" tabindex="-1">Text Formatting <a class="header-anchor" href="#text-formatting" aria-label="Permalink to &quot;Text Formatting&quot;">​</a></h2><ul><li><strong>Bold text</strong> for emphasis</li><li><em>Italic text</em> for slight emphasis</li><li><s>Strikethrough</s> for deleted text</li><li><code>inline code</code> for code references</li><li><mark>Highlighted text</mark> for important points</li></ul><h2 id="quotes" tabindex="-1">Quotes <a class="header-anchor" href="#quotes" aria-label="Permalink to &quot;Quotes&quot;">​</a></h2><blockquote><p>&quot;VitePress is amazing for documentation sites!&quot;</p><p>— Happy Developer</p></blockquote><h2 id="math-equations" tabindex="-1">Math Equations <a class="header-anchor" href="#math-equations" aria-label="Permalink to &quot;Math Equations&quot;">​</a></h2><p>When enabled, you can write math equations:</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$$</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">f(x) = \\int_{-\\infty}^\\infty</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    \\,d\\xi</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$$</span></span></code></pre></div><h2 id="final-thoughts" tabindex="-1">Final Thoughts <a class="header-anchor" href="#final-thoughts" aria-label="Permalink to &quot;Final Thoughts&quot;">​</a></h2><p>This page demonstrates many of VitePress&#39;s features, but there&#39;s even more to explore! Check out the <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">official documentation</a> to learn about all the possibilities.</p>`,43)]))}const u=i(n,[["render",l]]);export{c as __pageData,u as default};
