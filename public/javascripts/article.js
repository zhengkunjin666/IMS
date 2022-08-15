"use strict";var Article={data:{page_number:2,len:null,Total_pages:null,currentPage:1},init:function(){this.bind()},bind:function(){window.addEventListener("load",this.articleShow),window.addEventListener("load",this.paginationShow);var t=document.getElementById("article-list"),t=(this.onEventlister(t,"click","item-title",this.handleArticleShow),document.getElementById("pagination"));this.onEventlister(t,"click","pagination-btn",this.handlePreOrNextPage),this.onEventlister(t,"click","pagination-item",this.handleToPage)},onEventlister:function(t,e,a,n){t.addEventListener(e,function(t){0<=t.target.className.indexOf(a)&&n(t)})},articleShow:function(){var t=Article.data.page_number,e=document.getElementById("article-list").dataset.length;Article.data.len=e;for(var a=1;a<=e;a++){var n=document.getElementById("row".concat(a));t<a&&(n.style.display="none")}},paginationShow:function(){var t=Article.data.len,e=Article.data.page_number,a=t%e==0?t/e:t/e+1,n=(Article.data.Total_pages=Math.floor(a),document.getElementById("pagination"));if(2<=a){n.innerHTML='\n        <button class="pagination-btn" id="pre">&laquo;</button>\n      ';for(var i=1;i<=a;i++)n.innerHTML+='\n          <li class="pagination-item" id="'.concat(i,'">').concat(i,"</li>\n        ");n.innerHTML+='\n        <button class="pagination-btn" id="next">&raquo;</button>\n      ',document.getElementById("pre").setAttribute("disabled","disabled"),document.getElementsByClassName("pagination-item")[0].style.color="rgb(5, 246, 5)"}},handleArticleShow:function(t){var e=t.target.dataset.id,a=t.target.dataset.visits,t=t.target.dataset.classify_id;location.assign("/article/show/".concat(e,"?visits=").concat(a,"&classify_id=").concat(t))},handlePreOrNextPage:function(t){var e=Number(Article.data.currentPage),a=Article.data.Total_pages;"pre"==t.target.id&&(e-1==1&&t.target.setAttribute("disabled","disabled"),document.getElementById("next").removeAttribute("disabled"),Article.changeColor(e-1),Article.goPage(e-1),Article.data.currentPage=e-1),"next"==t.target.id&&(e+1==a&&t.target.setAttribute("disabled","disabled"),document.getElementById("pre").removeAttribute("disabled"),Article.changeColor(e+1),Article.goPage(e+1),Article.data.currentPage=e+1)},changeColor:function(t){for(var e=document.getElementsByClassName("pagination-item"),a=0;a<e.length;a++)e[a].style.color="black";e[t-1].style.color="rgb(5, 246, 5)"},goPage:function(t){var e,a,n=Article.data.page_number,i=Article.data.len;1!=t?i-1<(a=(e=(t-1)*n)+n)&&(a=i):(e=0,a=n);for(var r=1;r<=i;r++){var l=document.getElementById("row".concat(r));l.style.display=r<=e||a<r?"none":"block"}},handleToPage:function(t){var t=t.target.id,e=Article.data.Total_pages,a=document.getElementById("pre"),n=document.getElementById("next");switch(t){case"1":a.setAttribute("disabled","disabled"),n.removeAttribute("disabled");break;case"".concat(e):n.setAttribute("disabled","disabled"),a.removeAttribute("disabled");break;default:a.removeAttribute("disabled"),n.removeAttribute("disabled")}Article.data.currentPage=t,Article.changeColor(t),Article.goPage(t)}};Article.init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUuanMiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImRhdGEiLCJwYWdlX251bWJlciIsImxlbiIsImluaXQiLCJjdXJyZW50UGFnZSIsInRoaXMiLCJiaW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFydGljbGVTaG93IiwicGFnaW5hdGlvblNob3ciLCJnZXRFbGVtZW50QnlJZCIsImFydGljbGVMaXN0IiwiaGFuZGxlQXJ0aWNsZVNob3ciLCJkb2N1bWVudCIsIm9uRXZlbnRsaXN0ZXIiLCJwYWdpbmF0aW9uIiwiaGFuZGxlVG9QYWdlIiwiYWN0aW9uIiwiY2hpbGRDbGFzc05hbWUiLCJjYWxsYmFjayIsInBhcmVudE5vZGUiLCJlIiwiY2xhc3NOYW1lIiwiaW5kZXhPZiIsImxlbmd0aCIsImkiLCJkYXRhc2V0IiwiY29uY2F0Iiwicm93Iiwic3R5bGUiLCJkaXNwbGF5IiwiVG90YWxfcGFnZXMiLCJNYXRoIiwiZmxvb3IiLCJ1bCIsImlubmVySFRNTCIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcmUiLCJjb2xvciIsImV2ZW50IiwiaWQiLCJ0YXJnZXQiLCJ2aXNpdHMiLCJjbGFzc2lmeV9pZCIsImxvY2F0aW9uIiwiaGFuZGxlUHJlT3JOZXh0UGFnZSIsIk51bWJlciIsImdvUGFnZSIsIm5leHQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjaGFuZ2VDb2xvciIsImoiLCJsaUFsbCIsInN0YXJ0IiwiZW5kIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUFNQSxRQUFRLENBQ1pDLEtBQU0sQ0FERkQsWUFBUSxFQUNaQyxJQUFNLEtBQ0pDLFlBQWEsS0FDYkMsWUFGSSxHQU1OQyxLQUZFQyxXQUxVQyxLQUFBQyxRQVVaQSxLQUZJLFdBUlFDLE9BQUFDLGlCQUFBLE9BQUFILEtBQUFJLGFBVVpILE9BQU1FLGlCQUFVLE9BQUFILEtBQUFLLGdCQUNkSCxJQUFBQSxFQUFPQyxTQUFpQkcsZUFBWUYsZ0JBRWhDRyxHQURK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Q0FhLEVBQ0lELEVBRkFBLEVBQVF4QyxRQUFTd0IsS0FBQUEsWUFRakJwQyxFQUFNSCxRQUFRQyxLQUFLRSxJQUx0QixHQUFBd0MsRUE5RlN4QyxFQUFBLEdBK0ZWb0QsR0FRRUMsR0FBU2IsRUFBSyxHQUFLekMsR0FSVDZCLEtBRVIwQixFQUFFdEQsSUFHTnFELEVBSGtCLEVBYWhCQyxFQUFNdkQsR0FFUixJQUFJLElBQUl5QixFQUFJLEVBQUdBLEdBQUt4QixFQUFLd0IsSUFBSyxDQVY5QixJQUFNRyxFQUFOZixTQUFhSCxlQUFiLE1BQUFpQixPQUFhRixJQUVYOEIsRUFBTUQsTUFBS3hCLFFBRFh3QixHQUFRQSxHQUFXdEQsRUFBWHlCLEVBQ016QixPQUNLLFVBZ0J2QmdCLGFBYlMsU0FBQXdCLEdBY1AsSUFiRWMsRUFBS2QsRUFBTEUsT0FBQUQsR0FDQWMsRUFBTXZELFFBQU5ELEtBQUFnQyxZQUNETyxFQUFBekIsU0FBQUgsZUFBQSxPQWNHdUMsRUFBT3BDLFNBQVNILGVBQWUsUUFibkMsT0FBSStCLEdBQ0YsSUFBSWIsSUFlRlUsRUFBSUYsYUFBYSxXQUFXLFlBZDlCYSxFQUFJQyxnQkFBaUJLLFlBQ25CM0IsTUFDRCxJQUFBLEdBQUFELE9BQU1JLEdBQ0xILEVBQUlDLGFBQUosV0FBQSxZQUNEUyxFQUFBWSxnQkFBQSxZQUNGLE1BdkhTLFFBeUhabEMsRUFBQUEsZ0JBQWMsWUFDUnlCLEVBQUtELGdCQUFULFlBRUExQyxRQUFPQyxLQUFHYyxZQUFTSCxFQUNuQlosUUFBUXFELFlBQVl6QyxHQWdCcEJaLFFBQVFrRCxPQUFPUCxLQUduQjNDLFFBaEJRd0MiLCJmaWxlIjoiYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFydGljbGU9e1xyXG4gIGRhdGE6IHtcclxuICAgIHBhZ2VfbnVtYmVyOiAyLFxyXG4gICAgbGVuOiBudWxsLFxyXG4gICAgVG90YWxfcGFnZXM6IG51bGwsXHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICB9LFxyXG4gIGluaXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuYmluZCgpO1xyXG4gIH0sXHJcbiAgYmluZDogZnVuY3Rpb24oKXtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyx0aGlzLmFydGljbGVTaG93KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyx0aGlzLnBhZ2luYXRpb25TaG93KTtcclxuICAgIGxldCBhcnRpY2xlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnRpY2xlLWxpc3QnKTtcclxuICAgIHRoaXMub25FdmVudGxpc3RlcihhcnRpY2xlTGlzdCwnY2xpY2snLCdpdGVtLXRpdGxlJyx0aGlzLmhhbmRsZUFydGljbGVTaG93KTtcclxuICAgIGxldCBwYWdpbmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2luYXRpb24nKTtcclxuICAgIHRoaXMub25FdmVudGxpc3RlcihwYWdpbmF0aW9uLCdjbGljaycsJ3BhZ2luYXRpb24tYnRuJyx0aGlzLmhhbmRsZVByZU9yTmV4dFBhZ2UpO1xyXG4gICAgdGhpcy5vbkV2ZW50bGlzdGVyKHBhZ2luYXRpb24sJ2NsaWNrJywncGFnaW5hdGlvbi1pdGVtJyx0aGlzLmhhbmRsZVRvUGFnZSk7XHJcbiAgfSxcclxuICBvbkV2ZW50bGlzdGVyOiBmdW5jdGlvbihwYXJlbnROb2RlLGFjdGlvbixjaGlsZENsYXNzTmFtZSxjYWxsYmFjayl7XHJcbiAgICBwYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoYWN0aW9uLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKGNoaWxkQ2xhc3NOYW1lKT49MCAmJiBjYWxsYmFjayhlKTtcclxuICAgIH0pXHJcbiAgfSxcclxuICBhcnRpY2xlU2hvdzogZnVuY3Rpb24oKXtcclxuICAgIGxldCBwYWdlX251bWJlciA9IEFydGljbGUuZGF0YS5wYWdlX251bWJlcjtcclxuICAgIGxldCBhcnRpY2xlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJ0aWNsZS1saXN0XCIpO1xyXG4gICAgbGV0IGxlbiA9IGFydGljbGVMaXN0LmRhdGFzZXQubGVuZ3RoO1xyXG4gICAgQXJ0aWNsZS5kYXRhLmxlbiA9IGxlbjtcclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gbGVuOyBpKyspIHtcclxuICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3cke2l9YClcclxuICAgICAgaWYoaSA+IHBhZ2VfbnVtYmVyKXtcclxuICAgICAgICByb3cuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnaW5hdGlvblNob3c6IGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgbGVuID0gQXJ0aWNsZS5kYXRhLmxlbjtcclxuICAgIGxldCBwYWdlX251bWJlcj1BcnRpY2xlLmRhdGEucGFnZV9udW1iZXI7XHJcbiAgICBsZXQgVG90YWxfcGFnZXMgPSBsZW4gJSBwYWdlX251bWJlciA9PSAwID8gbGVuIC8gcGFnZV9udW1iZXIgOiBsZW4gLyBwYWdlX251bWJlciArIDE7IC8v6aG15pWwXHJcbiAgICBBcnRpY2xlLmRhdGEuVG90YWxfcGFnZXM9TWF0aC5mbG9vcihUb3RhbF9wYWdlcyk7XHJcbiAgICBsZXQgdWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdpbmF0aW9uXCIpXHJcbiAgICBpZihUb3RhbF9wYWdlcyA+PSAyKXtcclxuICAgICAgdWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLWJ0blwiIGlkPVwicHJlXCI+JmxhcXVvOzwvYnV0dG9uPlxyXG4gICAgICBgXHJcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IFRvdGFsX3BhZ2VzOyBpKyspIHtcclxuICAgICAgICB1bC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwicGFnaW5hdGlvbi1pdGVtXCIgaWQ9XCIke2l9XCI+JHtpfTwvbGk+XHJcbiAgICAgICAgYFxyXG4gICAgICB9O1xyXG4gICAgICB1bC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLWJ0blwiIGlkPVwibmV4dFwiPiZyYXF1bzs8L2J1dHRvbj5cclxuICAgICAgYFxyXG4gICAgICBsZXQgcHJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZScpO1xyXG4gICAgICBwcmUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpO1xyXG4gICAgICBsZXQgbGlBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGFnaW5hdGlvbi1pdGVtXCIpO1xyXG4gICAgICBsaUFsbFswXS5zdHlsZS5jb2xvciA9IFwicmdiKDUsIDI0NiwgNSlcIjtcclxuICAgIH1cclxuICB9LFxyXG4gIGhhbmRsZUFydGljbGVTaG93OiBmdW5jdGlvbihldmVudCl7XHJcbiAgICBsZXQgaWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIGxldCB2aXNpdHMgPSBldmVudC50YXJnZXQuZGF0YXNldC52aXNpdHM7XHJcbiAgICBsZXQgY2xhc3NpZnlfaWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5jbGFzc2lmeV9pZDtcclxuICAgIGxvY2F0aW9uLmFzc2lnbihgL2FydGljbGUvc2hvdy8ke2lkfT92aXNpdHM9JHt2aXNpdHN9JmNsYXNzaWZ5X2lkPSR7Y2xhc3NpZnlfaWR9YCk7XHJcbiAgfSxcclxuICBoYW5kbGVQcmVPck5leHRQYWdlOiBmdW5jdGlvbihldmVudCl7XHJcbiAgICBsZXQgY3VycmVudFBhZ2UgPSBOdW1iZXIoQXJ0aWNsZS5kYXRhLmN1cnJlbnRQYWdlKTtcclxuICAgIGxldCBUb3RhbF9wYWdlcyA9IEFydGljbGUuZGF0YS5Ub3RhbF9wYWdlcztcclxuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PSBcInByZVwiKXtcclxuICAgICAgaWYoY3VycmVudFBhZ2UgLSAxID09IDEpe1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIik7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG4gICAgICBuZXh0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICBBcnRpY2xlLmNoYW5nZUNvbG9yKGN1cnJlbnRQYWdlIC0gMSk7XHJcbiAgICAgIEFydGljbGUuZ29QYWdlKGN1cnJlbnRQYWdlLTEpO1xyXG4gICAgICBBcnRpY2xlLmRhdGEuY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZSAtIDE7XHJcbiAgICB9XHJcbiAgICBpZihldmVudC50YXJnZXQuaWQgPT0gXCJuZXh0XCIpe1xyXG4gICAgICBpZihjdXJyZW50UGFnZSArIDEgPT0gVG90YWxfcGFnZXMpe1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIik7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHByZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmUnKTtcclxuICAgICAgcHJlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICBBcnRpY2xlLmNoYW5nZUNvbG9yKGN1cnJlbnRQYWdlICsgMSk7XHJcbiAgICAgIEFydGljbGUuZ29QYWdlKGN1cnJlbnRQYWdlICsgMSk7XHJcbiAgICAgIEFydGljbGUuZGF0YS5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlICsgMTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNoYW5nZUNvbG9yOiBmdW5jdGlvbihpZCl7XHJcbiAgICBsZXQgbGlBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGFnaW5hdGlvbi1pdGVtXCIpO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaUFsbC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGxpQWxsW2pdLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgfVxyXG4gICAgbGlBbGxbaWQtMV0uc3R5bGUuY29sb3IgPSBcInJnYig1LCAyNDYsIDUpXCI7XHJcbiAgfSxcclxuICBnb1BhZ2U6IGZ1bmN0aW9uKGlkKXtcclxuICAgIGxldCBwYWdlX251bWJlciA9IEFydGljbGUuZGF0YS5wYWdlX251bWJlcjtcclxuICAgIGxldCBsZW4gPSBBcnRpY2xlLmRhdGEubGVuO1xyXG4gICAgbGV0IHN0YXJ0OyAvL+W9k+mhteaVsOaNrueahOi1t+Wni+S4i+agh1xyXG4gICAgbGV0IGVuZDsgLy/lvZPpobXmlbDmja7nmoTnu5PmnZ/kuIvmoIdcclxuICAgIGlmIChpZCAhPSAxKSB7XHJcbiAgICAgIHN0YXJ0ID0gKGlkIC0gMSkgKiBwYWdlX251bWJlcjtcclxuICAgICAgZW5kID0gc3RhcnQgKyBwYWdlX251bWJlcjtcclxuICAgICAgaWYgKGVuZCA+IGxlbiAtIDEpIHsgLy/lpoLmnpzlvZPpobXmlbDmja7nu5PmnZ/lgLzlpKfkuo7mgLvmlbDmja7mnaHmlbDkuIvmoIfnmoTlgLzliJnotYvlgLzkuLrmgLvmlbDmja7mnaHmlbDmnIDlpKfkuIvmoIflgLxcclxuICAgICAgICBlbmQgPSBsZW47XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXJ0ID0gMDtcclxuICAgICAgZW5kID0gcGFnZV9udW1iZXI7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IGxlbjsgaSsrKSB7XHJcbiAgICAgIGxldCByb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcm93JHtpfWApO1xyXG4gICAgICBpZihpIDw9IHN0YXJ0IHx8IGkgPiBlbmQpe1xyXG4gICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGFuZGxlVG9QYWdlOiBmdW5jdGlvbihldmVudCl7XHJcbiAgICBsZXQgaWQgPSBldmVudC50YXJnZXQuaWQ7XHJcbiAgICBsZXQgVG90YWxfcGFnZXMgPSBBcnRpY2xlLmRhdGEuVG90YWxfcGFnZXM7XHJcbiAgICBsZXQgcHJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZScpO1xyXG4gICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG4gICAgc3dpdGNoKGlkKXtcclxuICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICBwcmUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIG5leHQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgYCR7VG90YWxfcGFnZXN9YDpcclxuICAgICAgICBuZXh0LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICBwcmUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcHJlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIG5leHQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcbiAgICBBcnRpY2xlLmRhdGEuY3VycmVudFBhZ2UgPSBpZDtcclxuICAgIEFydGljbGUuY2hhbmdlQ29sb3IoaWQpO1xyXG4gICAgQXJ0aWNsZS5nb1BhZ2UoaWQpO1xyXG4gIH1cclxufTtcclxuQXJ0aWNsZS5pbml0KCk7Il19