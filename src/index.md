---
title: Homepage
layout: base2.njk
---
Hello! I go by **Petrel** *(they/she)* among other names. I'm a biologist and hobby artist in my late 20s. I mostly work on projects with my original characters, in which I enjoy writing about weird scientist women and their issues. This is my personal site for archival purposes.

You may know me best by the username **ETOURVOL**, which I still use, but am feeling out different names right now online (resulting in a constellation of different usernames across sites...)

---

### <i class="fa-solid fa-radio"></i> Updates
> - **12 May 2026:** Working on mobile responsiveness (want to make navbar collapsible!), sorted newsletter by year
> - **11 May 2026:** Overhauled site layout, created light/dark mode, began mirroring newsletter
---

<!-- This next part will show your top three most recent posts. You can change how readableDate looks in your .eleventy.js file-->
### <i class="fa-solid fa-envelopes-bulk"></i> Recent Newsletters
<div id="recentpostlistdiv">
  <ul class="none">
  {% assign top_posts = collections.posts | reverse %}
	{%- for post in top_posts limit:3 -%}
		<li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
	{% endfor %}<li class="moreposts"><a href="newsletter.html">» See More</a></ul>
</div>
