---
layout: dt.njk
permalink: distaxon/entries.html
title: ENTRIES
---

Testing.


## All Posts

<!--This next part shows all of your posts tagged "posts" in reverse chronological order-->

<ul class="none">
{% assign top_entries = collections.entries | reverse %}
{%- for post in top_entries -%}
  <li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
{% endfor %}
</ul>

---


## Visual

<!--This next part shows all of your posts tagged "posts" in reverse chronological order-->

<ul class="none">
{% assign top_visual = collections.visual | reverse %}
{%- for post in top_visual -%}
  <li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
{% endfor %}
</ul>

---


## Written

<!--This next part shows all of your posts tagged "posts" in reverse chronological order-->

<ul class="none">
{% assign top_written = collections.written | reverse %}
{%- for post in top_written -%}
  <li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
{% endfor %}
</ul>

---

Tutorial by [Midnight Reading](https://renkotsuban.neocities.org/posts/2023-11-15-Migrating-to-Eleventy).

