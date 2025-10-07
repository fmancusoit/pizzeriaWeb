function scrollHeader() {
    const h = document.getElementById("header");
    if (window.scrollY > 0) {
        h.classList.add("fixed");
    } else {
        h.classList.remove("fixed");
    }
}

window.addEventListener("scroll", scrollHeader);
window.addEventListener("load", scrollHeader);