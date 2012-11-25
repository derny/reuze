<h1><a href="http://reuze.me">reuze</a> v1.0.1</h1>

<p>Reuze is a teeny-tiny front end framework (&lt; 10KB) that makes structuring HTML and CSS for mid-to-large sized content-rich sites a breeze. It plays nice with other front end frameworks such as Foundation and Boostrap but also works equally well on it's own.</p>

<p>Simply visit <a href="http://reuze.me">Reuze.me</a> to structure HTML5 code blocks and include the CSS files found here. Code blocks are RDFa Lite compliant and are designed to sit inside a wrapping container with a class that denotes the content type (Articles for instance are wrapped in a Div with a class of 'ac').</p>

<p>Here is a simple Article code block that includes a left-aligned featured image, a caption, read-more link, and meta-data situated below the titles:</p>

<pre><code>&lt;div class="ac" typeof="Article"&gt;

&lt;article&gt;

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

<h2>Benefits of Reuze</h2>

<h5>Mockup in the Browser</h5><p>Why waste valuable time in Photoshop producing boring grey-box mockups when it's possible to include a single CSS file, some basic HTML for layout, and the desired reuze content blocks to produce a live site within minutes? Look like a rock-star and deliver a working mockup in hours &mdash; not days.</p>

<h5>Chamaeleon-Like</h5><p>Reuze adapts seamlessly within other front end frameworks. Drop content containers into Foundation columns, Bootstrap spans, or, 960 grids and watch 'em go. Containers are completely responsive out of the box.</p>

<h5>Backend/Frontend Harmony</h5><p>Did the front end lead just run out for a latte or phone in sick because it's launch day in Cupertino? Not to worry, back end devs can simply arrange content at reuze.me to mirror functional project specs and start building off the provided HTML5 code blocks &mdash; safe in the knowledge that only the CSS will change later.</p>

<h5>Ridiculously Simple Interface</h5><p>No complicated drag-and-drop horror-show. You select from straight-forward content options on the left and watch the HTML and live content view update in real time. You can copy-and-paste, right?</p>

<h5>Clean, Semantic HTML5</h5><p>Reuze produces code that takes advantage of the latest HTML5 and <a href="http://schema.org/docs/datamodel.html">RDFa Lite</a> structures. It's future-friendly for the next evolution of browsers, screen-readers and mobile devices.</p>

<h5>Teeny Tiny</h5><p>Need to build a complex content-rich site with a few thousand pages and a multitude of layout variations? Reuze has your back with a CSS file that is only 15kb &mdash; uncompressed. More efficient CSS means less bandwidth usage which is good for the environment.</p>

<h5>No Javascript</h5><p>This framework places substance above style &mdash; no reliance on any Javascript, minimal base styling and full support back to IE8.</p>

<h2>Getting the Most from Reuze</h2>
<p>In order for things to look neat and tidy in IE8, be sure to include the following in the document header AFTER the reuze.css file.</p>

<pre><code>&lt;!--[if IE 8]&gt;
&lt;link rel="stylesheet" href="css/ie8.css" media="screen" /&gt;
&lt;![endif]--&gt;</code></pre>

<p>All HTML code snippets available at <a href="http://reuze.me">Reuze.me</a> include support for <a href="http://schema.org/docs/datamodel.html">RDFa Lite</a> (a subset of the Resource Description Framework). As of July 2012, this is the <a href="http://www.w3.org/TR/rdfa-lite/">official specification</a> for machine-readable-only web page code.</p>

<p>Simply include the following code in the body tag to enable RDFa:</p>
<pre><code>&lt;body vocab="http://schema.org/"&gt;</code></pre>

<h2>Browser Support</h2>
<ul>
<li>Google Chrome</li>
<li>Mozilla Firefox 4+</li>
<li>Apple Safari 5+</li>
<li>Opera 12+</li>
<li>Internet Explorer 8+</li>
</ul>

<h2>Acknowledgements</h2>
<p><a href="http://www.reuze.me">Reuze.me</a> is a project by <a href="http://twitter.com/denniserny">Dennis Erny</a>.</p>
