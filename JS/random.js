function info() {
    alert('COUCOU !')
}



function info1() {
    document.getElementById("hover1").style.transition = "1s";
    document.getElementById("hover1").style.opacity = "100%";
}
function rinfo1(){
    document.getElementById("hover1").style.opacity = "0%";
}
function info2() {
    document.getElementById("hover2").style.transition = "1s";
    document.getElementById("hover2").style.opacity = "100%";
}
function rinfo2(){
    document.getElementById("hover2").style.opacity = "0%";
}
function info3() {
    document.getElementById("hover3").style.transition = "1s";
    document.getElementById("hover3").style.opacity = "100%";
}
function rinfo3(){
    document.getElementById("hover3").style.opacity = "0%";
}
function info4() {
    document.getElementById("hover4").style.transition = "1s";
    document.getElementById("hover4").style.opacity = "100%";
}
function rinfo4(){
    document.getElementById("hover4").style.opacity = "0%";
}
function info5() {
    document.getElementById("hover5").style.transition = "1s";
    document.getElementById("hover5").style.opacity = "100%";
}
function rinfo5(){
    document.getElementById("hover5").style.opacity = "0%";
}
function info6() {
    document.getElementById("hover6").style.transition = "1s";
    document.getElementById("hover6").style.opacity = "100%";
}
function rinfo6(){
    document.getElementById("hover6").style.opacity = "0%";
}
function info7() {
    document.getElementById("hover7").style.transition = "1s";
    document.getElementById("hover7").style.opacity = "100%";
}
function rinfo7(){
    document.getElementById("hover7").style.display = "none";
}

var pop = true;
function popup(){
    pop = !pop
    if (pop == false) {
        document.getElementById('menu').style.transition = "0.5s";
        document.getElementById('menu').style.opacity = "100%";
        document.getElementById('chevron').style.transition = "0.5s";
        document.getElementById('chevron').style.transform = "rotate(180deg)";
        document.getElementById('menutxt').style.color = "#00c8c8";
    } else if (pop == true){
        document.getElementById('menu').style.opacity = "0%";
        document.getElementById('chevron').style.transform = "rotate(360deg)";
        document.getElementById('menutxt').style.color = "#222"
    }
}
function banner() {
    if (pop == false) {
        document.getElementById('menu').style.opacity = "0%";
        document.getElementById('chevron').style.transform = "rotate(360deg)"
        document.getElementById('menutxt').style.color = "#222"
        pop = !pop
    }
}
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        pop = !pop
        document.getElementById('menu').style.opacity = "0%";
        document.getElementById('chevron').style.transform = "rotate(0deg)"
        document.getElementById('menutxt').style.color = "#222"
    }
};
