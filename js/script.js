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

function scrollToTop() {
    const b = document.getElementById("totop");
    if (window.scrollY > 100) {
        b.classList.add("active");
    } else {
        b.classList.remove("active");
    }
}

window.addEventListener("scroll", scrollToTop);
window.addEventListener("load", scrollToTop);

document.getElementById("totop").addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

function preloader() {
    const l = document.getElementById("loader");
    setTimeout(() => {
        l.classList.add("ready");
    }, 1500);
}

window.addEventListener("load", preloader);

setTimeout(() => {
    const l = document.getElementById("loader");
    l.classList.add("ready");
}, 10000);