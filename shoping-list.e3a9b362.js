!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequired7c6=o);var a=o("ebCjK");window.addEventListener("DOMContentLoaded",(function(t){document.querySelector(".layout").classList.add("is-loading"),Promise.all([(0,a.authCheck)()]).then((function(){var t=document.querySelector(".js-loading"),e=document.querySelector(".layout");t.classList.add("loading-overlay-hide"),e.classList.remove("is-loading")}))})),o("i8Q71"),o("xpKCW");var r,s=function(t,e){try{var n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}},c=o("5ZpUA"),l=o("8MBJY"),u=o("a2hTj"),d=o("hKHmD"),g=new(function(){"use strict";function e(){var n=this;t(l)(this,e),t(d)(this,"hidePaginationContainer",(function(){n.paginationContainer.style.display="none"})),t(d)(this,"getPaginationNumbers",(function(){for(var t=1;t<=n.pageCount;t++)n.appendPageNumber(t)})),t(d)(this,"appendPageNumber",(function(t){var e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),n.paginationNumbers.appendChild(e)})),t(d)(this,"setCurrentPage",(function(t){n.currentPage=t,n.handleActivePageNumber(),n.handlePageButtonsStatus();var e=(t-1)*n.paginationLimit,i=t*n.paginationLimit;n.listItems.forEach((function(t,n){t.style.display="none",n>=e&&n<i&&(t.style.display="flex")}))})),t(d)(this,"handleActivePageNumber",(function(){var t=n;document.querySelectorAll(".pagination-number").forEach((function(e){e.classList.remove("active"),Number(e.getAttribute("page-index"))==t.currentPage&&e.classList.add("active")}))})),t(d)(this,"disableButton",(function(t){t.classList.add("disabled"),t.setAttribute("disabled",!0)})),t(d)(this,"enableButton",(function(t){t.classList.remove("disabled"),t.removeAttribute("disabled")})),t(d)(this,"handlePageButtonsStatus",(function(){1===n.currentPage?n.disableButton(n.prevButton):n.enableButton(n.prevButton),n.pageCount===n.currentPage?n.disableButton(n.nextButton):n.enableButton(n.nextButton)})),t(d)(this,"clearPaginationButtons",(function(){n.paginationNumbers.innerHTML=""})),this.currentPage=1,this.paginationLimit=window.screen.width>=768?3:4,this.pageCount,this.listItems,this.paginationNumbers=document.getElementById("pagination-numbers"),this.paginatedList=document.getElementById("paginated-list"),this.nextButton=document.getElementById("next-button"),this.prevButton=document.getElementById("prev-button"),this.paginationContainer=document.getElementById("pagination-container")}return t(u)(e,[{key:"setPagination",value:function(t){var e=this;this.listItems=this.paginatedList.querySelectorAll("li"),this.pageCount=Math.ceil(this.listItems.length/this.paginationLimit),this.pageCount<2?this.hidePaginationContainer():(t>this.pageCount&&(t=this.pageCount),this.getPaginationNumbers(),this.setCurrentPage(t),this.setNextAndPreviousButtons(),document.querySelectorAll(".pagination-number").forEach((function(t){var n=e,i=Number(t.getAttribute("page-index"));i&&t.addEventListener("click",(function(){n.setCurrentPage(i)}))})))}},{key:"setNextAndPreviousButtons",value:function(){var t=this;this.prevButton.addEventListener("click",(function(){t.setCurrentPage(t.currentPage-1)})),this.nextButton.addEventListener("click",(function(){t.setCurrentPage(t.currentPage+1)}))}}]),e}()),h={sellectedBooksList:document.querySelector(".sellected-books-list"),noBooksSection:document.querySelector(".books-not-available")};document.addEventListener("DOMContentLoaded",(function(){r=function(t){try{var e=localStorage.getItem(t);return null===e?[]:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}}(c.STORAGE_KEY),m()?(p(),h.noBooksSection.style.display="none",g.setPagination(1)):g.hidePaginationContainer()})),window.onresize=function(){var t=window.screen.width>=768?3:4;m()&&t!=g.paginationLimit&&(g.paginationLimit=t,b())};var m=function(){return r&&r.length>0};function p(){var t=r.map((function(t){var e=t._id,n=t.title,i=t.author,o=t.book_image,a=(t.description,t.list_name),r=t.buy_links,s=r.find((function(t){return"Amazon"==t.name})).url,c=r.find((function(t){return"Apple Books"==t.name})).url,l=r.find((function(t){return"Bookshop"==t.name})).url;return'<li id="'.concat(e,'" class="book-item">\n            <img src="').concat(o,'" alt="').concat(n,'" class="book-image" />\n            <div class="book-info">\n            <div class="book-style">\n            <h2 class="book-title">').concat(n,'</h2>\n            \n            <div>\n            <button id="').concat(e,'" class="delete-book-button"></button>\n            </div>\n            </div>\n            \n            <p class="book-category">').concat(a,'</p>\n            <p class="book-description">A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show. Read by Miranda Raison, Pandora Sykes and the author. 11 hours, 55 minutes unabridged.A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show. Read by Miranda Raison, Pandora Sykes and the author. 11 hours, 55 minutes unabridged.</p>\n            <div class="book-styles">\n            <h3 class="book-author">').concat(i,'</h3>\n            <div class="trading-platforms-list list">\n            <a href=""></a>\n            <a href="').concat(s,'" class="amazon" target="_blank" rel="noreferrer noopener"></a>\n            <a href="').concat(c,'" class="apple" target="_blank" rel="noreferrer noopener"></a>\n            <a href="').concat(l,'" class="shop" target="_blank" rel="noreferrer noopener"></a>\n            </div>\n            </div>\n            </div>\n        </li>')})).join("");h.sellectedBooksList.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".delete-book-button").forEach((function(t){return t.addEventListener("click",f)}))}function f(t){var e=t.srcElement.id;!function(t){r=r.filter((function(e){return e._id!==t})),s(c.STORAGE_KEY,r)}(e),function(t){document.getElementById(t.toString()).remove()}(e),m()?b():(h.noBooksSection.style.display="block",g.hidePaginationContainer())}function b(){h.sellectedBooksList.innerHTML="",g.clearPaginationButtons(),p(),g.setPagination(g.currentPage)}o("7hKzD");var v={bodyShoppingEl:document.querySelector(".shopping-dark-js")},y=document.querySelector(".js-switch-theme"),k="dark-theme";y.addEventListener("click",(function(){if(v.bodyShoppingEl.classList.toggle("dark-theme"),"true"===localStorage.getItem(k))return void localStorage.removeItem(k);localStorage.setItem(k,!0)})),localStorage.getItem(k)&&(y.setAttribute("checked",!0),v.bodyShoppingEl.classList.add("dark-theme"))}();
//# sourceMappingURL=shoping-list.e3a9b362.js.map
