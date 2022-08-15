{% extends '../layout.tpl' %}

{% block css %}
    <link rel="stylesheet" href="/stylesheets/reset.css">
    <link rel="stylesheet" href="/stylesheets/base.css">
    <link rel="stylesheet" href="/stylesheets/article.css">
{% endblock %}

{% block content %}
<main class="page-body">
  <div class="article-list" id="article-list" data-length="{{article.length}}">
    {% for data in article %}
    <ul class="item-wrapper" id="row{{loop.index}}">
      <li class="article-item">
        <div class="item-index">{{loop.index}}</div>
        <div class="item-text">
          <p class="item-title" data-id={{data.id}} data-visits={{data.visits}} data-classify_id={{data.classify_id}}>{{data.title}}</p>
          <p class="item-time">{{data.created_at}}</p>
        </div>
      </li>
    </ul>
    {% endfor %}
  </div>
  <div class="pagination-section">
    <ul class="pagination-list" id="pagination">
    </ul>
  </div>
</main>
{% endblock %}

{% block js %}
<script src="/javascripts/article.js"></script>
{% endblock %}