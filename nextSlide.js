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

function logonextSlide() {
    var q = function (sel) { return document.querySelector(sel); };
    q(".logobox").appendChild(q(".logobox img:first-child"));
}

setInterval(logonextSlide, 100)

function logo2nextSlide() {
    var q = function (sel) { return document.querySelector(sel); };
    q(".logo2box").appendChild(q(".logo2box img:first-child"));
}

setInterval(logo2nextSlide, 100)

function mbnextSlide() {
    var q = function (sel) { return document.querySelector(sel); };
    q(".mbbox").appendChild(q(".mbbox img:first-child"));
}

setInterval(mbnextSlide, 100)