
// megakudos to Victor, again, for assisting with understanding DOM syntax & walking me through
// 2/8 update: kudos to Bubba for syntax help on #6!
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
 userListContainerEl.innerHTML = ''
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

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6


var squareEls = document.getElementsByClassName('square')
var squRay = []
console.log(typeof squareEls)
console.log(squareEls)
  for (props in squareEls){
    squRay.push(squareEls[props])
  }
  squRay.reverse()
  console.log(squRay)
  var sqBox = document.querySelector('.sq-box')
  var squareStr = ''
  forEach(squRay, function(square, index, theArray){
    console.log(square)
    console.log(square.outerHTML)
    squareStr += square.outerHTML
  }
)
sqBox.innerHTML = squareStr
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var soontoPig = document.getElementById('tasks')
  var childRA = soontoPig.children
  for (i=0;i<childRA.length;i++){
    var piglet = childRA[i].innerHTML
    console.log(piglet)
    piglet = reverse(piglet)
    console.log(piglet)
  }

// shoutout to Ed Mann for saving me some time with writing a string reversal function
// http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/ #1
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})


var forEach = function(arr, func){
  for( var i = 0; i < arr.length ; i++){
    func(arr[i], i)
  }
}
