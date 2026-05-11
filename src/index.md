---
title: Homepage
layout: base.njk
---

This is a test. Hi


<!-- This next part will show your top three most recent posts. You can change how readableDate looks in your .eleventy.js file-->
## Recent Newsletter
<div id="recentpostlistdiv">
  <ul class="none">
  {% assign top_posts = collections.posts | reverse %}
	{%- for post in top_posts limit:3 -%}
		<li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
	{% endfor %}<li class="moreposts"><a href="archives.html">» See More</a></li><li class="moreposts"></li></ul>
</div>
