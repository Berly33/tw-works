window.onload=function(){
    init();
    img()
};
function init() {
    var node = document.getElementById("new1");
    node.innerHTML = new1[0].name;
}

function img() {
    document.getElementById("pic1").src = new1[0].img;
}