const e=document.querySelector(".bestsellers");(async function(){const e=await fetch("https://books-backend.p.goit.global/books/top-books");if(!e.ok)throw new Error(console.log("Oops, there is no country with that name"));return await e.json()})().then((s=>{e.insertAdjacentHTML("beforeend",s.map((({list_name:e,books:s})=>`<div class="bestsellers-card">\n            <h2 class="bestsellers-title-book">${e}</h2>\n            <ul class="bestsellers-list">\n            ${s.map((({book_image:e,title:s,author:t,book_image_width:o,book_image_height:n})=>` <li class="bestsellers-card-item">\n                                <a href="" class="bestsellers-link project-transit">\n                                \x3c!-- box-menu --\x3e\n                                <div class="box">\n                                    <p class = "overlay">Quick View</p>  \n                                    <img class="gallery__image" src="${e}" >\n                                    </div>\n                                 \x3c!-- box-menu --\x3e\n                                 <div class="text-box">\n                                  <h3 class="book-name">${s}</h3>\n                                \n                                  <p class="author">${t}</p>\n                                  </div>\n                                   </a>\n                                 \n                         </li>`)).join("")}\n                </ul>\n                <button class="bestsellers-btn" type="button" data-action="click">See more</button>\n            </div>`)).join(""))})).catch((e=>console.log(e)));
//# sourceMappingURL=index.84fd6991.js.map
