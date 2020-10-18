function nextSlide() {
    var q = function (sel) { return document.querySelector(sel); };
    q(".bbbox").appendChild(q(".bbbox img:first-child"));
}

setInterval(nextSlide, 150)

function rnextSlide() {
    var q = function (sel) { return document.querySelector(sel); };
    q(".rbox").appendChild(q(".rbox img:first-child"));
}

setInterval(rnextSlide, 500)


function lnextSlide() {
    var q = function (sel) { return document.querySelector(sel); };
    q(".lbox").appendChild(q(".lbox img:first-child"));
}

setInterval(lnextSlide, 500)