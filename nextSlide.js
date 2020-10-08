function nextSlide() {
    var q = function (sel) { return document.querySelector(sel); };
    q(".bbbox").appendChild(q(".bbbox img:first-child"));
}

setInterval(nextSlide, 150)

function nextSlide() {
    var q = function (sel) { return document.querySelector(sel); };
    q(".rbox").appendChild(q(".rbox img:first-child"));
}

setInterval(nextSlide, 800)