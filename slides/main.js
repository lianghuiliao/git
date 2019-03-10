let n
getInto()
setInterval(() => {
    
    $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend', (e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
    n += 1
}, 3000)
function x(n){
    if(n>4){
        n = n%4
        if(n%4===0){
            n=4
        }
    }
    return n   
}
function getInto(){
    n=1
    $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')

}




