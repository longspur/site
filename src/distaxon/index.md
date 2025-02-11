---
title: Disaster Taxon
layout: dt.njk
permalink: distaxon.html
---

Welcome... this is a placeholder. Intending to make a separate layout for this section of the site. Soon you may expect to see:

- Character Profiles
- "Blog" setup for writing/comics/etc.
- Setting information
- Trivia page (inspiration, fun facts, etc)
- Update "feed" for ideas? 

To-Do:
- Figure out the StyleSwitcher code for this portion of the site in a way that doesn't screw up the rest of the site...? 
    - Seems to be connected to saving settings for the whole site when I only want to save them for a portion, if that's possible to modify
- ~~Set up base structure for posts~~

This layout is extremely A Placeholder and lightly modified from the main site theme for now structurally, don't mind the construction. Images from Google Maps and dithered using [DitherIt](https://ditherit.com/).


## Recent Updates
<div id="recentpostlistdiv">
  <ul class="none">
  {% assign top_entries = collections.entries | reverse %}
    {%- for post in top_entries limit:3 -%}
        <li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
    {% endfor %}<li class="moreposts"><a href="distaxon/entries.html">» See More</a></li><li class="moreposts"></li></ul>
</div>
