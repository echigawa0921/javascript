window.addEventListener('load', function(){

  const pullDownButton = document.getElementById("lists")
  const pullDownParents = document.getElementById("pull-down")

  pullDownButton.addEventListener('mouseover', function(){
    pullDownButton.setAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('mouseout', function(){
    pullDownButton.removeAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('click', function() {
    pullDownParents.setAttribute("style", "display:block;")
    console.log("click OK")
  })
})

  pullDownChild.forEach(function(list) {
    list.addEventListener("click", function() {
      value = list.innerHTML
      currentList.innerHTML = value
    })
  })