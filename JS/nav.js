var t = 0;

function nav() {
    if (t == 1) {
        var t = 0;
        alert('text2')
    }
    if (t == 0) {
        var t = 1;
        alert('text1')
    }
}
var btn = document.getElementById("search2");

btn.onclick = function() {
    alert('TEST')
}
