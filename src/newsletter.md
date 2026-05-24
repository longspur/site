---
layout: base2.njk
permalink: newsletter.html
title: Newsletter
description: Archive of newsletter posts.
featured_image: favicon.png
---

This is an archive of my free newsletter, *Field Notes*, which I currently distribute via [Patreon](https://www.patreon.com/marginalsea) roughly once a month. Patreon allows you to receive email updates and interact, but the actual content itself can be found below.

You will find photographs here are [dithered](https://app.dithermark.com/), this is to reduce file size (and I think it looks cool!). The images in their initial quality can be found on the links to the original newsletter. 

I am toying with the idea of including comment functionality at some point, but for now feel free to leave comments on Patreon.

---


### <i class="fa-solid fa-envelopes-bulk"></i> All Field Notes

<!--This next part shows all of your posts tagged "posts" in reverse chronological order-->

<ul class="none">
{% assign top_posts = collections.posts | reverse %}
{%- for post in top_posts -%}
  <li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
{% endfor %}
</ul>

---

#### <i class="fa-solid fa-calendar-day"></i> 2026
<!--This next part shows all of your posts tagged "y2026" in reverse chronological order-->


<ul class="none">
{% assign top_y2026 = collections.y2026 %}
{%- for post in top_y2026 -%}
  <li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
{% endfor %}
</ul>


---

<i class="fa-solid fa-code"></i> Tutorial for this setup using 11ty by [Midnight Reading](https://renkotsuban.neocities.org/posts/2023-11-15-Migrating-to-Eleventy).

