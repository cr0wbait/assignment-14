
// megakudos to Victor, again, for assisting with understanding DOM syntax & walking me through

document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
    console.log(typeof answerPTagWithValue.textContent)
    var initNum = Number(answerPTagWithValue.textContent) * 2
    answerPTagWithValue.textContent = initNum
  // you do the rest

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3

  var circleColor = document.querySelector('#circle-bw')
    if (
      circleColor.style.backgroundColor === 'white'
  ){
    circleColor.style.backgroundColor = 'black'
  } else {
    circleColor.style.backgroundColor = 'white'
  }


})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  // VVV this right here is for setting values VVVV
  var circleGrow = document.querySelector('.circle-red')
  // VVV this right here is for retrieving values VVVV
  var testtest = window.getComputedStyle(circleGrow)
  console.log(typeof testtest.width)
  var sizeProp = testtest.width.split('px')[0]
  console.log(sizeProp)
    circleGrow.style.width = (sizeProp * 2) + 'px'
    circleGrow.style.height = (sizeProp * 2) + 'px'

if (
  circleGrow.style.width === '640px'
){
  circleGrow.style.width = '40px'
  circleGrow.style.height = '40px'
}

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5

var userListEls = document.querySelectorAll('#user-list li')
var userListContainerEl = document.querySelector('#user-list')
var finalRA = [];

console.log(userListEls)
console.log(userListContainerEl.children)
var childRA = userListContainerEl.children
// userListContainerEl.innerHTML = ''
console.log(childRA)
  for (i=0;i<8;i++){
    console.log(childRA[i])
    if (childRA[i].className === 'active'){
      userListContainerEl.append(childRA[i])
    } else if(childRA[i].className === 'inactive'){
      childRA[i].style.display = 'none'
    }
  }

})

// LOOK AT THIS AGAIN TOMORROW 2/7


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})


var forEach = function(arr, func){
  for( var i = 0; i < arr.length ; i++){
    func(arr[i], i)
  }
}
