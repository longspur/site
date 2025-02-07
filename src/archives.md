---
layout: base.njk
permalink: archives.html
title: JOURNAL
description: These are where old posts go!
featured_image: favicon.png
---

I talk to myself sometimes. Feel free to browse by category.

## ![Journal](/images/journal.webp) Journal

<!--This next part shows all of your posts tagged "journal" in reverse chronological order-->

<ul class="none">
{% assign top_journal = collections.journal | reverse %}
{%- for post in top_journal -%}
  <li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
{% endfor %}
</ul>

---
## ![Berry](/images/leppa.png) Cooking
<!--This next part shows all of your posts tagged "video-games" in reverse chronological order-->

<ul class="none">
{% assign top_cooking = collections.cooking | reverse %}
{%- for post in top_cooking -%}
  <li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
{% endfor %}
</ul>

---

## ![Parcel](/images/parcel.webp) All Posts

<!--This next part shows all of your posts tagged "posts" in reverse chronological order-->

<ul class="none">
{% assign top_posts = collections.posts | reverse %}
{%- for post in top_posts -%}
  <li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
{% endfor %}
</ul>

---

Tutorial by [Midnight Reading](https://renkotsuban.neocities.org/posts/2023-11-15-Migrating-to-Eleventy).

