---
layout: page
permalink: /albums/homecooking/
title: homecooking
description: A growing archive of recipes I've cooked — pulled from Instagram, with ingredients, notes, and source links.
nav: false
---

{% assign recipes = site.recipes | sort: "date" | reverse %}
{% assign months = recipes | group_by_exp: "r", "r.date | date: '%Y-%m'" %}

<div class="cookbook-stats">
  <span class="cookbook-stat"><strong>{{ recipes | size }}</strong> recipes</span>
  <span class="cookbook-stat-divider">·</span>
  <span class="cookbook-stat"><strong>{{ months | size }}</strong> months</span>
</div>

<nav class="month-nav" aria-label="Jump to month">
  {% for m in months %}
    {% assign month_date = m.name | append: "-01" | date: "%b %Y" %}
    <a href="#month-{{ m.name }}">{{ month_date }}</a>
  {% endfor %}
</nav>

{% for m in months %}
  {% assign month_label = m.name | append: "-01" | date: "%B %Y" %}
  <section class="month-section" id="month-{{ m.name }}">
    <h2 class="month-section__header">{{ month_label }}</h2>

    <div class="recipe-grid">
      {% for r in m.items %}
        {% assign first_photo = r.photos | first %}
        <a href="{{ r.url | relative_url }}" class="recipe-card">
          {% if first_photo %}
            <div class="recipe-card__photo-wrap">
              <img src="{{ site.r2_base_url }}{{ first_photo.path }}"
                   class="recipe-card__photo"
                   loading="lazy"
                   alt="{{ r.title | escape }}">
            </div>
          {% else %}
            <div class="recipe-card__photo-wrap recipe-card__photo-wrap--empty"></div>
          {% endif %}
          <div class="recipe-card__body">
            <div class="recipe-card__title">{{ r.title }}</div>
            <div class="recipe-card__meta">
              <span class="recipe-card__date">{{ r.date | date: "%b %-d" }}</span>
              {% if r.photos.size > 1 %}
                <span class="recipe-card__dot">·</span>
                <span class="recipe-card__photo-count">{{ r.photos.size }} photos</span>
              {% endif %}
            </div>
          </div>
        </a>
      {% endfor %}
    </div>
  </section>
{% endfor %}
