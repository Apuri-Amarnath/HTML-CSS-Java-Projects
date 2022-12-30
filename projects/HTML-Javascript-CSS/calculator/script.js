function clr() {
    document.getElementById("Text_box").value = "";
}
function Show(val) {
    document.getElementById("Text_box").value += val;
}
function equate() {
    let x = document.getElementById("Text_box").value;
    let y = eval(x);
    document.getElementById("Text_box").value = y;
}