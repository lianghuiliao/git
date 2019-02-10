var xxx = document.getElementById('canvas');
var context = xxx.getContext('2d');
autoSetCanvasSize(xxx)

listenToUser(canvas)


var eraserEnabled = false;
eraser.onclick = function () {
    eraserEnabled = true
    eraser.classList.add('active')
    pen.classList.remove('active')
}
pen.onclick = function () {
    eraserEnabled = false
    pen.classList.add('active')
    eraser.classList.remove('active')
}
black.onclick = function(){
    context.strokeStyle = 'black'
    black.classList.add('active')
    yellow.classList.remove('active')
    blue.classList.remove('active')
    red.classList.remove('active')
}
red.onclick = function(){
    context.strokeStyle = 'red'
    red.classList.add('active')
    yellow.classList.remove('active')
    blue.classList.remove('active')
    black.classList.remove('active')
}
yellow.onclick = function(){
    context.strokeStyle = 'yellow'
    yellow.classList.add('active')
    red.classList.remove('active')
    blue.classList.remove('active')
    black.classList.remove('active')
}
blue.onclick = function(){
    context.strokeStyle = 'blue'
    blue.classList.add('active')
    yellow.classList.remove('active')
    red.classList.remove('active')
    black.classList.remove('active')
}
/***********************************/



function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);                 //起点
    context.lineWidth = 10;
    context.lineTo(x2, y2);                  //终点
    context.stroke();
    context.closePath();
}

function drawCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
}
function autoSetCanvasSize(canvas) {
    canvasSize()

    window.onresize = function () {
        canvasSize()
    }
    function canvasSize() {
        var pageWidth = document.documentElement.clientWidth;
        var pageHeight = document.documentElement.clientHeight;
        canvas.width = pageWidth;
        canvas.height = pageHeight;
    }
}
function listenToUser(canvas) {
    var using = false
    var lastPoint = { x: undefined, y: undefined }

    if (document.body.ontouchstart !== undefined) {              //特性检测
        //触屏设备
        canvas.ontouchstart = function (aaa) {
            var x = aaa.touches[0].clientX
            var y = aaa.touches[0].clientY
            using = true
            if (eraserEnabled) {
                context.clearRect(x - 10, y - 10, 20, 20)
            }
            else {
                lastPoint = { x: x, y: y }
               
            }
        }
        canvas.ontouchmove = function (aaa) {
            var x = aaa.touches[0].clientX
            var y = aaa.touches[0].clientY
            if (!using) { return }
            if (eraserEnabled) {
                context.clearRect(x - 10, y - 10, 20, 20)
            }
            else {
                var newPoint = { x: x, y: y }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                lastPoint = newPoint
            }
        }
        canvas.ontouchend = function (aaa) {
            using = false
        }
    } else {
        //非触屏设备
        canvas.onmousedown = function (aaa) {
            var x = aaa.clientX
            var y = aaa.clientY
            using = true
            if (eraserEnabled) {
                context.clearRect(x - 10, y - 10, 20, 20)
            }
            else {
                lastPoint = { x: x, y: y }
                
        }
        canvas.onmousemove = function (aaa) {
            var x = aaa.clientX
            var y = aaa.clientY
            if (!using) { return }
            if (eraserEnabled) {
                context.clearRect(x - 10, y - 10, 20, 20)
            }
            else {
                var newPoint = { x: x, y: y }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                lastPoint = newPoint
            }
        }
        canvas.onmouseup = function (aaa) {
            using = false
        }
    }

    }

}