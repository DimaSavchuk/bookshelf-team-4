!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("kZtGT");window.addEventListener("DOMContentLoaded",(function(e){document.querySelector(".layout").classList.add("is-loading"),Promise.all([(0,r.authCheck)()]).then((function(){var e=document.querySelector(".js-loading"),t=document.querySelector(".layout");e.classList.add("loading-overlay-hide"),t.classList.remove("is-loading")}))})),o("kZtGT"),o("9Z1ug"),o("5iK4t");var a,i=o("79s99"),l={sellectedBooksList:document.querySelector(".sellected-books-list"),noBooksSection:document.querySelector(".books-not-available")};function s(){var e=a.map((function(e){var t=e._id,n=e.title,o=e.author,r=e.book_image,a=(e.description,e.list_name),i=e.buy_links,l=i.find((function(e){return"Amazon"==e.name})).url,s=i.find((function(e){return"Apple Books"==e.name})).url,c=i.find((function(e){return"Bookshop"==e.name})).url;return'<li id="'.concat(t,'" class="book-item">\n            <img src="').concat(r,'" alt="').concat(n,'" class="book-image" />\n            <div class="book-info">\n            <div class="book-style">\n            <h2 class="book-title">').concat(n,'</h2>\n            \n            <div>\n            <button id="').concat(t,'" class="delete-book-button"></button>\n            </div>\n            </div>\n            \n            <p class="book-category">').concat(a,'</p>\n            <p class="book-description">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>\n            <div class="book-styles">\n            <h3 class="book-author">').concat(o,'</h3>\n            <div class="trading-platforms-list list">\n            <a href=""></a>\n            <a href="').concat(l,'" class="amazon" target="_blank" rel="noreferrer noopener"></a>\n            <a href="').concat(s,'" class="apple" target="_blank" rel="noreferrer noopener"></a>\n            <a href="').concat(c,'" class="shop" target="_blank" rel="noreferrer noopener"></a>\n            </div>\n            </div>\n            </div>\n        </li>')})).join("");l.sellectedBooksList.insertAdjacentHTML("beforeend",e),document.querySelectorAll(".delete-book-button").forEach((function(e){return e.addEventListener("click",c)}))}function c(e){var t=e.srcElement.id;!function(e){a=a.filter((function(t){return t._id!==e})),m(i.STORAGE_KEY,a)}(t),function(e){document.getElementById(e.toString()).remove()}(t),!a||a.length<1?(l.noBooksSection.style.display="block",y.style.display="none"):(l.sellectedBooksList.innerHTML="",b.innerHTML="",s(),L(f))}document.addEventListener("DOMContentLoaded",(function(){(a=v(i.STORAGE_KEY))&&a.length>0?(s(),l.noBooksSection.style.display="none",L(1)):y.style.display="none";var e=document.querySelector(".bestsellers"),t=document.querySelector(".js-home"),n=document.querySelector(".js-shop");e.classList.add("hide"),t.classList.remove("current"),n.classList.add("current")}));var d,u,f,m=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},v=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},b=document.getElementById("pagination-numbers"),h=document.getElementById("paginated-list"),g=document.getElementById("next-button"),p=document.getElementById("prev-button"),y=document.getElementById("pagination-container"),k=window.screen.width>=768?3:4;function L(e){d=h.querySelectorAll("li"),(u=Math.ceil(d.length/k))<2?y.style.display="none":(e>u&&(e=u),E(),S(e),p.addEventListener("click",(function(){S(f-1)})),g.addEventListener("click",(function(){S(f+1)})),document.querySelectorAll(".pagination-number").forEach((function(e){var t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(function(){S(t)}))})))}var E=function(){for(var e=1;e<=u;e++)w(e)},w=function(e){var t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),b.appendChild(t)},S=function(e){f=e,A(),_();var t=(e-1)*k,n=e*k;d.forEach((function(e,o){e.style.display="none",o>=t&&o<n&&(e.style.display="flex")}))};var A=function(){document.querySelectorAll(".pagination-number").forEach((function(e){e.classList.remove("active"),Number(e.getAttribute("page-index"))==f&&e.classList.add("active")}))},B=function(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)},q=function(e){e.classList.remove("disabled"),e.removeAttribute("disabled")},_=function(){1===f?B(p):q(p),u===f?B(g):q(g)};o("jn6s9"),o("79s99"),o("l2zkM")}();
//# sourceMappingURL=shoping-list.231cac4b.js.map
