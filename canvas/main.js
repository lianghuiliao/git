var div = document.getElementById('canvas')
document.onmousedown = function (a) {
    var x = a.clientX
    var y = a.clientY
    var divA = document.createElement('div')
    div.appendChild(divA)
    divA.style = "width:6px;height:6px;" +
        "background:white;border-radius:3px;" + 
        "position:absolute;left: " + (x - 3) + 
        "px;top: " + (y - 3) + "px;"

}
document.onmouseup = function (x) {
    console.log(x)
}
document.onmousemove = function (x) {
    console.log(1)
}