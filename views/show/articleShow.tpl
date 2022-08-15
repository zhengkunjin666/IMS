{% extends '../layout.tpl' %}

{% block css %}
    <link rel="stylesheet" href="/stylesheets/reset.css">
    <link rel="stylesheet" href="/stylesheets/base.css">
    <link rel="stylesheet" href="/stylesheets/articleShow.css">
{% endblock %}

{% block content %}
<main class="page-body">
  <div class="article-section">
    <div class="article-container">
      <h1 class="article-title">{{article[0].title}}</h1>
      <div class="article-subtitle">
        <p class="article-time item-time">{{article[0].created_at}}</p>
        <span class="article-visits">阅读次数：{{article[0].visits}}</span>
      </div>
      <div class="article-content" id="item-content">{{article[0].content | safe}}</div>
    </div>
  </div>
</main>
{% endblock %}

{% block js %}
{% endblock %}