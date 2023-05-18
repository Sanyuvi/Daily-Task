let H = 0;
let M = 0;
let S = 0;
let MS = 0;
let padNumber = (num)=>{
    return String(num).padStart(2,'0')
}


let title = document.createElement('h1')
title.innerHTML = "Stopwatch"
title.style.textAlign = "center"
document.getElementById('root').appendChild(title)

let watch = document.createElement('h1')
watch.innerHTML = (`${padNumber(H)}<sub>H</sub> : ${padNumber(M)}<sub>M</sub> : ${padNumber(S)}<sub>S</sub> <sub>${padNumber(MS)}</sub>`)
watch.style.textAlign = "center"
document.getElementById('root').appendChild(watch)

function start()
{
    setInterval(()=>{
        ++MS
        if(MS===100)
        {
        ++S
        MS =0
        }
        if(S===60)
        {
        ++M
        S = 0
        }
        if(H===60)
        {
        ++H
        M =0
        }
        watch.innerHTML = (`${padNumber(H)}<sub>H</sub> : ${padNumber(M)}<sub>M</sub> : ${padNumber(S)}<sub>S</sub> <sub>${padNumber(MS)}</sub>`)
    },10)
}