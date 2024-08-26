window.addEventListener("load", init)
var scrollTarget = 0;
var currentScroll = 0;
var lerpSpeed = 0.02;
var slideshowInterval = 4000;
function smoothScroll(selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'instant', block: "start" });
}
function init() {
    let slideshowContainer = document.querySelector(".slideshow-container")
    let slideshowCount = slideshowContainer.children.length
    setInterval(() => {
        scrollTarget += slideshowContainer.clientWidth;
    }, slideshowInterval)
    setInterval(() => {
        currentScroll = currentScroll + (scrollTarget - currentScroll) * lerpSpeed
        currentScroll = parseFloat(currentScroll.toFixed(2))
        if (currentScroll >= (slideshowContainer.clientWidth * slideshowCount) - 2) {
            slideshowContainer.scrollLeft = 0
            currentScroll = 0
            scrollTarget = 0
        }
        slideshowContainer.scrollLeft = currentScroll;
    })
}