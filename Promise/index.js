let x = 5;
let h1 = document.createElement("h1")
h1.innerHTML = x
h1.setAttribute('id','value')
document.body.appendChild(h1)
let promise_5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Happy Independence Day")
    },5000)
})

let promise_4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        x--
        resolve(x)
    },4000)
})

let promise_3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        x--
        resolve(x)
    },3000)
})

let promise_2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        x--
        resolve(x)
    },2000)
})

let promise_1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        x--
        resolve(x)
    },1000)
})

promise_1.then(
    (value)=>{
        document.getElementById("value").innerHTML=value;
        promise_2.then(
            (value)=>{
                document.getElementById("value").innerHTML=value;
                promise_3.then(
                    (value)=>{
                        document.getElementById("value").innerHTML=value;
                        promise_4.then(
                            (value)=>{
                                document.getElementById("value").innerHTML=value;
                                promise_5.then(
                                    (value)=>{
                                        document.getElementById("value").innerHTML=value;
                                    },
                                    error=>{
                                        alert(error)
                                    }
                                )
                            },
                            error=>{
                                alert(error)
                            }
                        )
                    },
                    error=>{
                        alert(error)
                    }
                )
            },
            error=>{
                alert(error)
            }
        )
    },
    error=>{
        alert(error)
    }
)