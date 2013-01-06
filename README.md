<h1><a href="http://reuze.me">reuze</a> v1.1</h1>

<p>Reuze is a teeny-tiny front end framework that makes structuring HTML and CSS for blogs and article-heavy sites a breeze. It plays nice with other frameworks such as Foundation and Boostrap but also works equally well on it's own.</p>

<p>Simply visit <a href="http://reuze.me">Reuze.me</a> to structure HTML5 code blocks and include the CSS found here. Code blocks are RDFa Lite compliant and are designed to sit inside a namespaced wrapping container.</p>

<p>Here is a simple Article code block that includes a left-aligned featured image, a caption, read-more link, and meta-data situated below the titles:</p>

<pre><code>&lt;div class="ac image-left"&gt;

&lt;article typeof="Article"&gt;

    &lt;div class="image-feat" property="image" style="width:75px;"&gt; 
       &lt;a href="#"&gt;&lt;img src="http://placehold.it/75x75/efefef" alt="sample image" property="thumbnailUrl"&gt;&lt;/a&gt; 
       &lt;p class="caption"&gt;This is a small image caption, 25 words or less is best.&lt;/p&gt;
    &lt;/div&gt;

    &lt;header&gt; 
    &lt;a href="#"&gt;&lt;h4 property="headline"&gt;Lorem Ipsum Doior&lt;/h4&gt;&lt;/a&gt; 
    &lt;h6 property="alternativeHeadline"&gt;Sub Title&lt;/h6&gt;

    &lt;ul class="meta"&gt;
       &lt;li property="datePublished"&gt;December 13th&lt;/li&gt;
       &lt;li property="author"&gt;By: &lt;a href="#"&gt;J.Smith&lt;/a&gt;&lt;/li&gt;
       &lt;li property="keywords"&gt;&lt;a href="#"&gt;Fiction&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/header&gt;

    &lt;div class="content" property="articleBody"&gt; 
       &lt;p&gt;Et denique petentium reprimique mel, no quo laudem convenire mediocritatem. Has contentiones comprehensam an, per consequat necessitatibus eu. Aliquam abhorreant philosophia ut eos. Phaedrum consequat te cum. No est inermis mentitum ponderum. Debitis posidonium ex mea, ex mundi tollit imperdiet sit.&lt;/p&gt; 
    &lt;/div&gt;

    &lt;footer&gt;
    &lt;a class="rm" href="#"&gt;Read More&lt;/a&gt;
    &lt;/footer&gt;

&lt;/article&gt;

&lt;/div&gt;</pre></code>

<h2>Benefits of Reuze-ing</h2>

<h5>A Small Footprint &mdash; Ideal for Big Sites</h5><p>Need to build a complex, content-rich site with a few thousand pages and a multitude of layout variations? Reuze has your back with an optimized CSS file that is &lt; 10kb &mdash; uncompressed. More efficient and modular CSS means easier maintenance down the road and a faster-loading site &mdash; good for both you and the client.</p>

<h5>Backend/Frontend Harmony</h5><p>Did the front end lead just run out for a latte or phone in sick because it's launch day in Cupertino? Not to worry, back end devs can simply arrange content at reuze.me to mirror functional project specs and start building out their Wordpress loops or Kentico transformations off the provided HTML5 code blocks &mdash; safe in the knowledge that only the CSS will change later.</p>

<h5>Mockup in the Browser</h5><p>Why waste valuable time in Photoshop producing boring grey-box mockups when it's possible to include a single CSS file, some basic HTML for layout, and the desired reuze content blocks to produce a live site within minutes? Look like a rock-star and deliver a working mockup in hours, not days.</p>

<h5>Chamaeleon-Like</h5><p>Reuze adapts seamlessly within other front end frameworks. Drop content containers into Foundation columns, Bootstrap spans, or, 960 grids and watch 'em go. Containers are completely responsive out of the box.</p>

<h5>Ridiculously Simple Interface</h5><p>No complicated drag-and-drop horror-show. You select from straight-forward content options on the left of the screen and watch the HTML and live content view update in real time. You can copy-and-paste, right?</p>

<h5>Clean, Semantic HTML5</h5><p>Reuze produces code that takes advantage of the latest HTML5 and <a href="http://manu.sporny.org/2012/mythical-differences/">RDFa Lite</a> structures. It's future-friendly for the next evolution of browsers, screen-readers and mobile devices.</p>

<h5>No Javascript</h5><p>This framework places substance above style &mdash; no reliance on Javascript; minimal base styling and full support back to IE8.</p>

<h2>Customizing Reuze</h2>

<p>Reuze is all about creating a consistent framework for delivering blog-style content in a multitude of ways using the smallest amount of CSS code possible. By design, it only provides the most basic of styling. These styles can be easily modified or built upon by targeting content types, or, individual blocks within the type itself. Let me give you some examples:</p>

<pre><code>.ac .rm { color: #333; }</pre></code>

This changes the color of all 'read-more' links for Article content across the entire site. (.ac)

<pre><code>.ac article.home h1  { color: #111; font-size: 3.8rem; }</pre></code>

<p>Perhaps you'll want to assign a class to articles that display on the landing page of a site (.home) so you can style headings differently.</p>

<h2>Getting the Most from Reuze</h2>
<p>In order for things to look neat and tidy in IE8, be sure to include the following in the document header AFTER the reuze.css file.</p>

<pre><code>&lt;!--[if IE 8]&gt;
&lt;link rel="stylesheet" href="css/ie8.css" media="screen" /&gt;
&lt;![endif]--&gt;</code></pre>

<p>All HTML code snippets available at <a href="http://reuze.me">Reuze.me</a> include support for <a href="http://manu.sporny.org/2012/mythical-differences/">RDFa Lite</a> (a subset of the Resource Description Framework). As of July 2012, this is the <a href="http://www.w3.org/TR/rdfa-lite/">official specification</a> for 'rich snippets'.</p>

<p>Simply include the following code in the body tag to enable RDFa:</p>
<pre><code>&lt;body vocab="http://schema.org/"&gt;</code></pre>

<p>The immediate children of Reuze content containers should be restricted to content blocks, period.</p>

<h5>Good Developer:</h5>
<pre><code>&lt;div class="ac"&gt;
   &lt;article typeof="Article"&gt;[...]&lt;/article&gt;
   &lt;article typeof="Article"&gt;[...]&lt;/article&gt;
   &lt;article typeof="Article"&gt;[...]&lt;/article&gt;
&lt;/div&gt;</pre></code>

<h5>Naughty Developer:</h5>
<pre><code>&lt;div class="ac"&gt;
   &lt;h2&gt;I am a title that should come before the ac Div&lt;/h2&gt;
   &lt;article typeof="Article"&gt;[...]&lt;/article&gt;
   &lt;article typeof="Article"&gt;[...]&lt;/article&gt;
   &lt;p&gt;Headings, text and any other stuff needs to be inside the related article block&lt;/p&gt;
   &lt;article typeof="Article"&gt;[...]&lt;/article&gt;
&lt;/div&gt;</pre></code>

<h2>Inline Styles</h2>

<p>My ambitious goal of building a robust CSS3/HTML5 framework for magazine/news sites that does not rely on any Javascript means that in a handful of situations, it's necessary to utilize in-line styles that can dynamically set widths and margins of content using values injected from the backend.</p>
<p>An example of this is forcing the footer of an article to align itself to the text block above, when a featured image is in the default position (left-aligned). The amount of margin required is calculated by taking the width of the image + 15px.</p>

<pre><code>&lt;footer style="margin-left:90px;"&gt; /* Image is 75x75 px */
&lt;a class="rm" href="#"&gt;Read More&lt;/a&gt;
&lt;/footer&gt;</pre></code>

<p>If Reuze is being used within the context of a CMS such as Wordpress or Kentico, it's a simple matter of injecting the actual width of the featured image + 15px using PHP or ASP.net. It's also a simple matter to hardcode the margin by adding the CSS rule: <em>.ac footer { margin-left: ??px; }</em> when working outside a CMS or in the situation where the image width will always be the same.</p>

<h2>Browser Support</h2>
<ul>
<li>Google Chrome</li>
<li>Mozilla Firefox 4+</li>
<li>Apple Safari 5+</li>
<li>Opera 12+</li>
<li>Internet Explorer 8+</li>
</ul>

<h2>Get in Touch!</h2>
<p><a href="http://www.reuze.me">Reuze.me</a> is a project by <a href="http://twitter.com/denniserny">Dennis Erny</a>.</p>
