const Article={
  data: {
    page_number: 2,
    len: null,
    Total_pages: null,
    currentPage: 1,
  },
  init: function(){
      this.bind();
  },
  bind: function(){
    window.addEventListener('load',this.articleShow);
    window.addEventListener('load',this.paginationShow);
    let articleList = document.getElementById('article-list');
    this.onEventlister(articleList,'click','item-title',this.handleArticleShow);
    let pagination = document.getElementById('pagination');
    this.onEventlister(pagination,'click','pagination-btn',this.handlePreOrNextPage);
    this.onEventlister(pagination,'click','pagination-item',this.handleToPage);
  },
  onEventlister: function(parentNode,action,childClassName,callback){
    parentNode.addEventListener(action,function(e){
        e.target.className.indexOf(childClassName)>=0 && callback(e);
    })
  },
  articleShow: function(){
    let page_number = Article.data.page_number;
    let articleList = document.getElementById("article-list");
    let len = articleList.dataset.length;
    Article.data.len = len;
    for(let i = 1; i <= len; i++) {
      let row = document.getElementById(`row${i}`)
      if(i > page_number){
        row.style.display="none";
      }
    }
  },
  paginationShow: function(){
    let len = Article.data.len;
    let page_number=Article.data.page_number;
    let Total_pages = len % page_number == 0 ? len / page_number : len / page_number + 1; //页数
    Article.data.Total_pages=Math.floor(Total_pages);
    let ul=document.getElementById("pagination")
    if(Total_pages >= 2){
      ul.innerHTML = `
        <button class="pagination-btn" id="pre">&laquo;</button>
      `
      for (var i = 1; i <= Total_pages; i++) {
        ul.innerHTML += `
          <li class="pagination-item" id="${i}">${i}</li>
        `
      };
      ul.innerHTML += `
        <button class="pagination-btn" id="next">&raquo;</button>
      `
      let pre = document.getElementById('pre');
      pre.setAttribute("disabled","disabled");
      let liAll = document.getElementsByClassName("pagination-item");
      liAll[0].style.color = "rgb(5, 246, 5)";
    }
  },
  handleArticleShow: function(event){
    let id = event.target.dataset.id;
    let visits = event.target.dataset.visits;
    let classify_id = event.target.dataset.classify_id;
    location.assign(`/article/show/${id}?visits=${visits}&classify_id=${classify_id}`);
  },
  handlePreOrNextPage: function(event){
    let currentPage = Number(Article.data.currentPage);
    let Total_pages = Article.data.Total_pages;
    if(event.target.id == "pre"){
      if(currentPage - 1 == 1){
        event.target.setAttribute("disabled","disabled");
      }
      let next = document.getElementById('next');
      next.removeAttribute("disabled");
      Article.changeColor(currentPage - 1);
      Article.goPage(currentPage-1);
      Article.data.currentPage = currentPage - 1;
    }
    if(event.target.id == "next"){
      if(currentPage + 1 == Total_pages){
        event.target.setAttribute("disabled","disabled");
      }
      let pre = document.getElementById('pre');
      pre.removeAttribute("disabled");
      Article.changeColor(currentPage + 1);
      Article.goPage(currentPage + 1);
      Article.data.currentPage = currentPage + 1;
    }
  },
  changeColor: function(id){
    let liAll = document.getElementsByClassName("pagination-item");
    for (let j = 0; j < liAll.length; j++) {
        liAll[j].style.color = "black";
    }
    liAll[id-1].style.color = "rgb(5, 246, 5)";
  },
  goPage: function(id){
    let page_number = Article.data.page_number;
    let len = Article.data.len;
    let start; //当页数据的起始下标
    let end; //当页数据的结束下标
    if (id != 1) {
      start = (id - 1) * page_number;
      end = start + page_number;
      if (end > len - 1) { //如果当页数据结束值大于总数据条数下标的值则赋值为总数据条数最大下标值
        end = len;
      }
    } else {
      start = 0;
      end = page_number;
    }
    for(let i = 1; i <= len; i++) {
      let row = document.getElementById(`row${i}`);
      if(i <= start || i > end){
        row.style.display="none";
      } else {
        row.style.display="block";
      }
    }
  },
  handleToPage: function(event){
    let id = event.target.id;
    let Total_pages = Article.data.Total_pages;
    let pre = document.getElementById('pre');
    let next = document.getElementById('next');
    switch(id){
      case "1":
        pre.setAttribute("disabled","disabled");
        next.removeAttribute("disabled");
        break;
      case `${Total_pages}`:
        next.setAttribute("disabled","disabled");
        pre.removeAttribute("disabled");
        break;
      default:
        pre.removeAttribute("disabled");
        next.removeAttribute("disabled");
    }
    Article.data.currentPage = id;
    Article.changeColor(id);
    Article.goPage(id);
  }
};
Article.init();