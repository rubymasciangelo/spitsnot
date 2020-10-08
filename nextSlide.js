function nextSlide() {
    var q = function (sel) { return document.querySelector(sel); };
    q(".bbbox").appendChild(q(".bbbox img:first-child"));
}

setInterval(nextSlide, 150)