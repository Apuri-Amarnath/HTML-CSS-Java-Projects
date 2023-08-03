
function change() {
    Element1 = document.getElementById("page1")
    Element2 = document.getElementById("page2")
    Element1.style.display = "none"
    Element2.style.display = "block"
}

function back() {
    Element1 = document.getElementById("page1")
    Element2 = document.getElementById("page2")
    Element2.style.display = "none"
    Element1.style.display = "block"
}