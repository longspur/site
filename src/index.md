---
title: Homepage
layout: base2.njk
---
Hello! I go by **Petrel** *(they/she)* among other names. I'm a biologist and hobby artist in my late 20s. I mostly work on projects with my original characters, in which I enjoy writing about weird scientist women and their issues. This is my personal site for archival purposes.

| Other Sites   |   Username |
| -------- | -------- |
| <i class="fa fa-brands fa-bluesky" aria-hidden="true"></i> [BlueSky](https://bsky.app/profile/murkrow.bsky.social)  | _murkrow.bsky.social_ |
| <i class="fa-brands fa-tumblr" aria-hidden="true"></i> [Tumblr](https://etourvol.tumblr.com/)   | _ETOURVOL_ |
| <i class="fa-solid fa-brush" aria-hidden="true"></i> [Art Fight](https://artfight.net/~taxon) | _taxon_ |
| <i class="fa-solid fa-house-user" aria-hidden="true"></i> [Toyhouse](https://toyhou.se/taxon) | _taxon_ |
| <i class="fa-brands fa-patreon" aria-hidden="true"></i> [Patreon](https://www.patreon.com/marginalsea) | _marginalsea_ |

---

### <i class="fa-solid fa-radio"></i> Updates
> - **23 May 2026:** Uploaded images, made external links have an ↗ next to them, redid site links/about page
> - **12 May 2026:** Working on mobile responsiveness, sorted newsletter by year
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
