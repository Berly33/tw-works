window.onload = function () {
    name();
    img();
    id()
};

function name() {
    var node = document.getElementById("new1");
    node.innerHTML = new1[0].name;
}

function img() {
    document.getElementById("pic1").src = new1[0].img;
}

function id() {
    var node = document.getElementById("new1");
}