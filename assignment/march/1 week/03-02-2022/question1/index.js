
function popupshow() {
    var subs = document.getElementById("subscribe");
    var showbtn = document.getElementById("showpopup");
    showbtn.classList.add("hide");
    subs.classList.add("initial");
}
function popupclose() {
    var subs = document.getElementById("subscribe");
    var showbtn = document.getElementById("showpopup");
    showbtn.classList.remove("hide");
    subs.classList.remove("initial");
}