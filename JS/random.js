document.getElementById('menutxt').addEventListener("click", popup);

function info(event) {
    parseInt(event);
    if (event%2==1) {
        var eventreal = document.getElementById(event).nextElementSibling.id;
        document.getElementById(eventreal).style.transition = "0.5s";
        document.getElementById(eventreal).style.opacity = "100%";
        console.log(eventreal);
    } else if (event%2==0) {
        document.getElementById(event).style.transition = "0.5s";
        document.getElementById(event).style.opacity = "100%";
    }
}
function rinfo(event){
    if (event%2==1) {
        var eventreal = document.getElementById(event).nextElementSibling.id;
        document.getElementById(eventreal).style.opacity = "0%";
    } else if (event%2==0) {
        document.getElementById(event).style.opacity = "0%";
    }
}


var pop = true;
function popup(){
    pop = !pop
    if (pop == false) {
        popupIn()
    } else if (pop == true){
        popupOut()
    }
}
function banner() {
    if (pop == false) {
        popupOut()
        pop = !pop
    }
}
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        pop = !pop
        popupOut()
    }
};

function popupIn(){
    document.getElementById('menu').style.transition = "0.5s";
    document.getElementById('menu').style.opacity = "100%";
    document.getElementById('chevron').style.transition = "0.5s";
    document.getElementById('chevron').style.transform = "rotate(180deg)";
    document.getElementById('menutxt').style.color = "#00c8c8";
}
function popupOut(){
    document.getElementById('menu').style.opacity = "0%";
    document.getElementById('chevron').style.transform = "rotate(0deg)"
    document.getElementById('menutxt').style.color = "#222"
}
