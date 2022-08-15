<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
  {% block css %}
  {% endblock %}
</head>
<body>
  <header class="page-header">
    <nav class="header-nav" id="header-nav">
      <a class="nav-item active" href="/article">全部</a>
      {% for data in classify %}
      <a class="nav-item" href="javascript:#" data-id="{{data.id}}">{{data.name}}</a>
      {% endfor %}
    </nav>
  </header>
  {% block content %}
  {% endblock %}

  <script src="/javascripts/base.js"></script>
  {% block js %}
  {% endblock %}
</body>
</html>