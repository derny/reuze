<h1><a href="http://reuze.me">reuze</a> v1.0.1</h1>

<p>Reuze is a teeny-tiny front end framework (&lt; 10KB) that makes structuring HTML and CSS for mid-to-large sized content-rich sites a breeze. It plays nice with other front end frameworks such as Foundation and Boostrap but also works equally well on it's own.</p>

<p>Documentation is coming in late November... Please stay tuned</p>

<h2>Getting the Most from Reuze</h2>
<p>An optional reuze.js file is included which helps to make some small style adjustments for IE8 and also enables the 'image-column' option.</p>
<p>If using reuze.js you will also need to include jQuery and the following conditional comments code in your header:</p>

<pre><code>&lt;!--[if lt IE 7]&gt; &lt;html class="no-js lt-ie9 lt-ie8 lt-ie7"&gt; &lt;![endif]--&gt;
&lt;!--[if IE 7]&gt; &lt;html class="no-js lt-ie9 lt-ie8"&gt; &lt;![endif]--&gt;
&lt;!--[if IE 8]&gt; &lt;html class="no-js lt-ie9"&gt; &lt;![endif]--&gt;
&lt;!--[if gt IE 8]&gt;&lt;!--&gt;&lt;html class="no-js"&gt;&lt;!--&lt;![endif]--&gt;</code></pre>

<p>All HTML code snippets available at <a href="http://reuze.me">Reuze.me</a> include support for <a href="http://schema.org/docs/datamodel.html">RDFa Lite</a> (a subset of the Resource Description Framework). As of July 2012, this is the <a href="http://www.w3.org/TR/rdfa-lite/">official specification for machine-readable-only web page code</a>.</p>

<p>Simply include the following code in the body tag to enable RDFa:</p>
<pre><code>vocab="http://schema.org/"</code></pre>

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
