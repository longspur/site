---
layout: base2.njk
permalink: newsletter.html
title: Newsletter
description: Archive of newsletter posts.
featured_image: favicon.png
---

This is an archive of my free newsletter, *Field Notes*, which I currently distribute via [Patreon](https://www.patreon.com/marginalsea) roughly once a month. Patreon allows you to receive email updates and interact, but the actual content itself can be found below.

I am working to format and rehost images, so some of those may be missing at present. I am toying with the idea of including comment functionality at some point.

---


### <i class="fa-solid fa-envelopes-bulk"></i> Field Notes

<!--This next part shows all of your posts tagged "posts" in reverse chronological order-->

<ul class="none">
{% assign top_posts = collections.posts | reverse %}
{%- for post in top_posts -%}
  <li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
{% endfor %}
</ul>

---

Tutorial for this setup using 11ty by [Midnight Reading](https://renkotsuban.neocities.org/posts/2023-11-15-Migrating-to-Eleventy).

