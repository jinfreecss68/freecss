let startPage = 1;
const totalPage = 10;
const visible = 4;
let currentPage;

let path = window.location.pathname;
let filename = path.split('/').pop();
if (filename === 'shop.html') currentPage = 1;
else {
    let match = filename.match(/shop(\d+)\.html/);
    if (match) currentPage = parseInt(match[1]) + 1;
}

if (currentPage > totalPage - visible - 1) {
    startPage = totalPage - visible;
} else {
    startPage = Math.max(1, currentPage - Math.floor(visible / 2));
}

function renderPages(){
    let middle = document.getElementById("paginationMiddle");
    middle.innerHTML = "";
    let numToShow = visible;
    if (startPage + visible - 1 >= totalPage) {
        numToShow = totalPage - startPage + 1;
    }
    for (let i = 0; i < numToShow; i++){
        let page = startPage + i;
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerText = page;
        a.href = page === 1 ? "shop.html" : "shop" + (page-1) + ".html";
        if (page === currentPage) {
            a.classList.add("active");
        }
        a.onclick = () => setActive(a, page);
        li.appendChild(a);
        middle.appendChild(li);
    }
    if (startPage + numToShow - 1 < totalPage){
        let ellipsis = document.createElement("li");
        ellipsis.innerHTML = '<a href="#">...</a>';
        middle.appendChild(ellipsis);
        let lastLi = document.createElement("li");
        let lastA = document.createElement("a");
        lastA.innerText = totalPage;
        lastA.href = totalPage === 1 ? "shop.html" : "shop" + (totalPage-1) + ".html";
        lastLi.appendChild(lastA);
        middle.appendChild(lastLi);
    }
}

function nextSet(){
    if (startPage + visible <= totalPage){
        startPage++;
        renderPages();
    }
}

function prevSet(){
    if (startPage > 1){
        startPage--;
        renderPages();
    }
}

function setActive(element, page){
    document.querySelectorAll(".pagination a").forEach(el =>{
        el.classList.remove("active");
    });
    element.classList.add("active");
    currentPage = page;
}

renderPages();
