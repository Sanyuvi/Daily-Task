// function heading(){
//     let h1 = document.createElement('h1')
//     h1.innerHTML = "This is callback function"
//     document.body.appendChild(h1)
// }  
// }

// function display(sum,callback){
//     let h1 = document.createElement('h1')
//     h1.innerHTML = sum
//     document.body.appendChild(h1)
//     callback()
// }

// function add(a,b,callback)
// {
//     let sum = a+b
//     callback(sum,heading)
// }
// let x = 10
// let y = 5
// add(5,10,display)

// let inputNumbers = [20,24,-8,45,-7,-4]
// let positiveNumbers = removeNegativeNumbers(inputNumbers,(x)=>x>0)

// document.body.innerHTML = `<h1>${positiveNumbers}</h1>`

// function removeNegativeNumbers(numbers,callback){
// let myArray = []
// for(let i=0;i<numbers.length;i++)
// {
//     if(callback(numbers[i]))
//     myArray.push(numbers[i])
// }
// return myArray;
// }

setTimeout(()=>{
    let h1 = document.createElement('h1')
    h1.innerHTML = "I am callback 1"
    document.body.appendChild(h1)

    setTimeout(()=>{
        h1.innerHTML = "I am callback 2"
        setTimeout(()=>{
            h1.innerHTML = "I am callback 3"
            setTimeout(()=>{
                h1.innerHTML = "I am callback 4"
                setTimeout(()=>{
                    h1.innerHTML = "I am callback 5"
                    setTimeout(()=>{
                        h1.innerHTML = "I am callback 6"
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000)




