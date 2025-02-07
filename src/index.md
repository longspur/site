---
title: Homepage
layout: base.njk
---

## Welcome to my website!

This is a test. There will be more here later... including:

- Birdwatching
- Recipes/Cooking Journal??
- **OC STUFF?!**

<!-- This next part will show your top three most recent posts. You can change how readableDate looks in your .eleventy.js file-->
## Recent Blog Posts

<div id="recentpostlistdiv">
  <ul>
  {% assign top_posts = collections.posts | reverse %}
	{%- for post in top_posts limit:3 -%}
		<li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
	{% endfor %}<li class="moreposts"><a href="archives.html">» See More</a></li><li class="moreposts"></li></ul>
</div>