var xxx = document.getElementById('canvas');
var context = xxx.getContext('2d');
autoSetCanvasSize(xxx)

listenToUser(canvas)


var eraserEnabled = false;
eraser.onclick = function () {
    eraserEnabled = true
    actions.className = 'actions x'
}
pencil.onclick = function () {
    eraserEnabled = false
    actions.className = 'actions'
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
                drawCircle(x, y, 1)
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
                drawCircle(x, y, 1)
            }
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
