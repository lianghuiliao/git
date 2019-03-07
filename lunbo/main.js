var allButtons = $('#buttons > span')
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var p = index * -300
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        allButtons.eq(n).addClass('red').siblings('.red').removeClass('red')
    })
}
var n = 0
var size = allButtons.length
allButtons.eq(n % size).trigger('click')
var timerId = setTimer()
$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})
$('.window').on('mouseleave', function () {
    timerId = setTimer()
})
function setTimer(){
    return setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
    }, 1000)
}