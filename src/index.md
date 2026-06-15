---
title: Homepage
layout: base2.njk
permalink: index.html
---


  <div id="statuscafe"> <i class="fa-solid fa-bullhorn" style="margin-right:1em;"></i><div id="statuscafe-username"> </div>
  <div id="statuscafe-content"></div></div><script src="https://status.cafe/current-status.js?name=petrel" defer></script>

Hello! I go by **Petrel** *(they/she)* among other names. I'm a biologist and hobby artist in my late 20s. I mostly work on projects with my original characters, in which I enjoy writing about weird scientist women and their issues. This is my personal site for archival purposes.



<div class="button">
  <img src="/images/button.png" height="100%" alt="petrel">
<div style="width:"75%"><textarea name="" id="" cols="20" rows="1" aria-label="link-back code" class="code-textarea">&lt;a href="https://petrel.neocities.org/"&gt;&lt;img src="https://petrel.neocities.org/images/button.png" alt="petrel" title="petrel"&gt;&lt;/a&gt;</textarea></div>
</div>



| Other Sites   |   Username |
| -------- | -------- |
| <i class="fa fa-brands fa-bluesky" aria-hidden="true"></i> [**BlueSky**](https://bsky.app/profile/murkrow.bsky.social)  | _murkrow.bsky.social_ |
| <i class="fa-brands fa-tumblr" aria-hidden="true"></i> [**Tumblr**](https://etourvol.tumblr.com/)   | _ETOURVOL_ |
| <i class="fa-solid fa-brush" aria-hidden="true"></i> [**Art Fight**](https://artfight.net/~taxon) | _taxon_ |
| <i class="fa-solid fa-house-user" aria-hidden="true"></i> [**Toyhouse**](https://toyhou.se/taxon) | _taxon_ |
| <i class="fa-brands fa-patreon" aria-hidden="true"></i> [**Patreon**](https://www.patreon.com/marginalsea) | _marginalsea_ |
| <i class="fa-solid fa-envelope" aria-hidden="true"></i> [**Mail**](mailto:etourvol@gmail.com) | _etourvol[@]gmail.com_ |


---

### <i class="fa-solid fa-radio"></i> Updates
*Something look funny? Try **hard refreshing!** (CTRL + F5 on PC)*
> - **14 Jun 2024:** Doing some cleanup of the Styleswitcher, none of which will be visible to you but hopefully will make the code easier to update on the backend.
> - **26 May 2026:** Broke all the site permalinks (oops!), but hopefully fixed them? Hard refresh if you're getting page not founds. Also, added comment sections to newsletters.
> - **24 May 2026:** Site button, guestbook, other widgets added.
> - **[» See older updates](/updates)**
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
