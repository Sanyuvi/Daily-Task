let header = document.createElement('h1')
header.innerHTML= 'Calculator'
header.setAttribute('class','m-4')
document.body.appendChild(header)

let containerdiv = document.createElement('div');
containerdiv.classList.add('container','m-4');
document.body.appendChild(containerdiv);

    let rowdiv1 = document.createElement('div')
    rowdiv1.setAttribute('class','row')
    containerdiv.appendChild(rowdiv1)

    let coldiv1 =document.createElement('div')
    coldiv1.setAttribute('class','col-12')
    rowdiv1.appendChild(coldiv1)

    let input = document.createElement('input')
    input.setAttribute('type','text')
    input.classList.add('form-control','alignment')
    input.setAttribute('id','result')
    coldiv1.appendChild(input)

    // -------------------------------------------------------------

    let rowdiv2 = document.createElement('div')
    rowdiv2.setAttribute('class','row')
    containerdiv.appendChild(rowdiv2)

    let buttonC = document.createElement('button')
    buttonC.textContent = 'C'
    buttonC.classList.add('col','btn','btn-primary','buttonBorder')
    buttonC.setAttribute('onclick','clearInput()')
    rowdiv2.appendChild(buttonC)

    
    let buttonArrow = document.createElement('button')
    buttonArrow.classList.add('col','btn','btn-primary','buttonBorder')
    buttonArrow.setAttribute('onclick','deletebutton()')
    rowdiv2.appendChild(buttonArrow)

    let ArrowClass = document.createElement('i')
    ArrowClass.setAttribute('class','fa-solid fa-arrow-left')
    buttonArrow.appendChild(ArrowClass)

    let buttonDot = document.createElement('button')
    buttonDot.textContent = '.'
    buttonDot.classList.add('col','btn','btn-primary','buttonBorder')
    buttonDot.setAttribute('onclick','append(".")')
    rowdiv2.appendChild(buttonDot)

    let buttonMultiply = document.createElement('button')
    buttonMultiply.textContent = '*'
    buttonMultiply.classList.add('col','btn','btn-warning','buttonBorder')
    buttonMultiply.setAttribute('onclick','append("*")')
    rowdiv2.appendChild(buttonMultiply)

    // ----------------------------------------------------------

    
    let rowdiv3 = document.createElement('div')
    rowdiv3.setAttribute('class','row')
    containerdiv.appendChild(rowdiv3)

    let buttonSeven = document.createElement('button')
    buttonSeven.textContent = '7'
    buttonSeven.classList.add('col','btn','btn-primary','buttonBorder')
    buttonSeven.setAttribute('onclick','append(7)')
    rowdiv3.appendChild(buttonSeven)

    let buttonEight = document.createElement('button')
    buttonEight.textContent = '8'
    buttonEight.classList.add('col','btn','btn-primary','buttonBorder')
    buttonEight.setAttribute('onclick','append(8)')
    rowdiv3.appendChild(buttonEight)

    let buttonNine = document.createElement('button')
    buttonNine.textContent = '9'
    buttonNine.classList.add('col','btn','btn-primary','buttonBorder')
    buttonNine.setAttribute('onclick','append(9)')
    rowdiv3.appendChild(buttonNine)

    let buttonDivide = document.createElement('button')
    buttonDivide.textContent = '/'
    buttonDivide.classList.add('col','btn','btn-warning','buttonBorder')
    buttonDivide.setAttribute('onclick','append("/")')
    rowdiv3.appendChild(buttonDivide)
 

    // ------------------------------------------------------------

    let rowdiv4 = document.createElement('div')
    rowdiv4.setAttribute('class','row')
    containerdiv.appendChild(rowdiv4)

    let buttonFour = document.createElement('button')
    buttonFour.textContent = '4'
    buttonFour.classList.add('col','btn','btn-primary','buttonBorder')
    buttonFour.setAttribute('onclick','append(4)')
    rowdiv4.appendChild(buttonFour)

    let buttonFive = document.createElement('button')
    buttonFive.textContent = '5'
    buttonFive.classList.add('col','btn','btn-primary','buttonBorder')
    buttonFive.setAttribute('onclick','append(5)')
    rowdiv4.appendChild(buttonFive)

    let buttonSix = document.createElement('button')
    buttonSix.textContent = '6'
    buttonSix.classList.add('col','btn','btn-primary','buttonBorder')
    buttonSix.setAttribute('onclick','append(6)')
    rowdiv4.appendChild(buttonSix)

    let buttonMinus = document.createElement('button')
    buttonMinus.textContent = '-'
    buttonMinus.classList.add('col','btn','btn-warning','buttonBorder')
    buttonMinus.setAttribute('onclick','append("-")')
    rowdiv4.appendChild(buttonMinus)

    // ---------------------------------------------------------------

    let rowdiv5 = document.createElement('div')
    rowdiv5.setAttribute('class','row')
    containerdiv.appendChild(rowdiv5)

    let buttonOne = document.createElement('button')
    buttonOne.textContent = '1'
    buttonOne.classList.add('col','btn','btn-primary','buttonBorder')
    buttonOne.setAttribute('onclick','append(1)')
    rowdiv5.appendChild(buttonOne)

    let buttonTwo = document.createElement('button')
    buttonTwo.textContent = '2'
    buttonTwo.classList.add('col','btn','btn-primary','buttonBorder')
    buttonTwo.setAttribute('onclick','append(2)')
    rowdiv5.appendChild(buttonTwo)

    let buttonThree = document.createElement('button')
    buttonThree.textContent = '3'
    buttonThree.classList.add('col','btn','btn-primary','buttonBorder')
    buttonThree.setAttribute('onclick','append(3)')
    rowdiv5.appendChild(buttonThree)

    let buttonAdd = document.createElement('button')
    buttonAdd.textContent = '+'
    buttonAdd.classList.add('col','btn','btn-warning','buttonBorder')
    buttonAdd.setAttribute('onclick','append("+")')
    rowdiv5.appendChild(buttonAdd)

    // -----------------------------------------------------------------

    let rowdiv6 = document.createElement('div')
    rowdiv6.setAttribute('class','row')
    containerdiv.appendChild(rowdiv6)

    let buttonZero = document.createElement('button')
    buttonZero.textContent = '0'
    buttonZero.classList.add('col-3','btn','btn-primary','buttonBorder')
    buttonZero.setAttribute('onclick','append(0)')
    rowdiv6.appendChild(buttonZero)

    let buttonDoubleZero = document.createElement('button')
    buttonDoubleZero.textContent = '00'
    buttonDoubleZero.classList.add('col-3','btn','btn-primary','buttonBorder')
    buttonDoubleZero.setAttribute('onclick','zero()')
    rowdiv6.appendChild(buttonDoubleZero)

    let buttonEqual = document.createElement('button')
    buttonEqual.textContent = '='
    buttonEqual.classList.add('col-6','btn','btn-warning','buttonBorder')
    buttonEqual.setAttribute('onclick','evaluation()')
    buttonEqual.setAttribute('id','enter')
    rowdiv6.appendChild(buttonEqual)


    function append(value){
        let result = document.getElementById('result')
        result.value += value
    }

    function evaluation(){
        let result = document.getElementById('result')
        result.value = eval(result.value)
    }

    function clearInput(){
        let result = document.getElementById('result')
        result.value = ''
    }

    function zero(){
        let result = document.getElementById('result')
        result.value += '00'
    }

function deletebutton(){
let display = document.getElementById('result');
  let currentValue = result.value;
  currentValue = currentValue.slice(0, -1);
  result.value = currentValue;
}

let invalid = document.getElementById('result');
result.addEventListener('input', () => {
  const currentValue = result.value;
  if (/[a-zA-Z]/.test(currentValue)) {
    alert("Invalid..Not a number");
    result.value = '';
  }
});

var enterkey = document.getElementById("result");
enterkey.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById('enter').click();
  }
});

