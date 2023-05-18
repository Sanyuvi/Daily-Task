// let element = document.getElementsByClassName('Gopal')
// element[0].innerHTML = "We are Back"
// element[0].style.color = 'Yellow'
// let classelement = document.getElementsByClassName('Gopal')
// for(i=0;i<=classelement.length;i++)
// {
//     classelement[i].style.fontFamily="verdana"
//     classelement[i].style.fontSize="20px"
//     classelement[i].style.textAlign="center"
// }
let input = document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('placeholder','Enter name')
input.addEventListener('change', (e)=>{
    console.log(e.target.value)
})
document.body.appendChild(input)