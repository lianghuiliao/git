window.jQuery = function(nodeOrSelector) {
    //获取dom
    let nodes = {
      0: nodeOrSelector,
      length: 1
    }
    if(typeof nodeOrSelector === 'string'){
      let temp = document.querySelectorAll(nodeOrSelector);
      for(let i=0; i<temp.length; i++){
        nodes[i] = temp[i];
      }
      nodes.length = temp.lenght;
    }

    //方法1
    nodes.addClass = function(classes) {
      if(typeof classes === 'string'){
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].classList.add(classes)
        }
      }else{
        for (let i = 0; i < nodes.length; i++) {
          classes.forEach( (value) => nodes[i].classList.add(value) )
        }
      }
    }
    方法2
    nodes.setText  = function(text) {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].textContent = text;
      }
    }
    return nodes
  }

  //调用
  window.$ = jQuery
  var $div = $('div')
  setTimeout(() => {
    $div.addClass('red') // 可将所有 div 的 class 添加一个 red
    $div.setText('hi') // 可将所有 div 的 textContent 变为 hi
  }, 1000);