const PAGE={
  init: function(){
    this.bind();
  },
  bind: function(){
    window.addEventListener('load',this.highlight);
    window.addEventListener('load',this.parseTime);
    let nav = document.getElementById('header-nav');
    this.onEventlister(nav,'click','nav-item',this.handleShow);
  },
  onEventlister: function(parentNode,action,childClassName,callback){
    parentNode.addEventListener(action,function(e){
        e.target.className.indexOf(childClassName)>=0 && callback(e);
    })
  },
  highlight: function(){
    let href = window.location.href;
    href = href.split("?")[href.split("?").length-1];
    let navItem = document.getElementsByClassName('nav-item');
    if(href.includes("http")){
      navItem[0].className="nav-item active";
      return
    }
    if(href.includes("visits")){
      href = href.split("classify_id=")[href.split("classify_id=").length-1];
      PAGE.isActive(href);
      return
    }
    href=href.split("=")[href.split("=").length-1];
    PAGE.isActive(href);
  },
  isActive: function(href){
    let navItem = document.getElementsByClassName('nav-item');
    for(let i = 0; i < navItem.length; i++){
      let id = navItem[i].dataset.id;
      if(href == id){
        navItem[i].className = "nav-item active";
      }else{
        navItem[i].className = "nav-item";
      }
    }
  },
  parseTime: function(){
    let time=document.getElementsByClassName('item-time');
    for(let i=0;i<time.length;i++){
        let dateTime=time[i].innerText;
        let parseTime=PAGE.formatDate(dateTime);
        time[i].innerText=parseTime;
    }
  },
  formatDate: function(time,format='YY/MM/DD hh:mm:ss'){
    var date = new Date(time);
    var year = date.getFullYear(),
        month = date.getMonth()+1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    var preArr = new Array(10).fill(0).map((elem, index)=>{
        return '0'+index;
    });
    var newTime = format.replace(/YY/g,year)
                        .replace(/MM/g,preArr[month]||month)
                        .replace(/DD/g,preArr[day]||day)
                        .replace(/hh/g,preArr[hour]||hour)
                        .replace(/mm/g,preArr[min]||min)
                        .replace(/ss/g,preArr[sec]||sec);
    return newTime;			
  },
  handleShow: async function(event){
    let id=event.target.dataset.id;
    let url=`/article?classify_id=${id}`;
    location.assign(url);
  }
};
PAGE.init();