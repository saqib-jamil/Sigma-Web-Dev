console.log(`HELLO THIS IS SYNC BEHAVIOUR`)
console.log(`HELLO THIS IS SYNC BEHAVIOUR 2`)

//  ASYNC FUNCTION

let mariCall = () => {
    console.log("HELLO THIS IS ASYNC BEHAVIOUR")
}

setTimeout(mariCall, 2000);

console.log(`HELLO THIS IS SYNC BEHAVIOUR 3`)

//  CALLBACK FUNCTION

//  SIMPLE CALLBACK FUNCTION

let numb = (result) => {
    console.log(result)
}


let sum = (a, b, numb1) => {

    let result = a + b
    numb1(result)
}

sum(5, 5, numb)

//  SECOND EXAMPLE

let myCallBack = (args) => {
    console.log(`${args} APKA CALLBACK FUNCTION KAAM KR RHA HA`)
}

let script = (src, myCall) => {
    let scropt = document.createElement("script")
    scropt.setAttribute("src", src)
    scropt.onload = myCall("SAQIB")

}

script(`https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js`, myCallBack)

//  TO MANAGE CALLBACK HELL WE USE PROMISes

let resolve =(args) => {
    console.log(`${args} Function resolve ho gia`)
}

let reject =(args) => {
    console.log(`${args} Function Reject ho gia`)
}

let promp1 = new Promise ((resolve, reject)=>{
    let rand = Math.ceil(Math.random()*100)
    console.log(rand)
    if (rand >  50) {
        setTimeout(resolve("SAQIB"),3000)
    } else {
        reject("SAQIB")
    }
    
})

promp1.then(resolve).catch(reject)

//  PROMISES API

let promp2 = new Promise ((resolve, reject)=>{
    let rand = Math.ceil(Math.random()*100)
    console.log(rand)
    if (rand >  50) {
        setTimeout(resolve("SAQIB Second"),3000)
    } else {
        reject("SAQIB")
    }
    
})

let promp3 = new Promise ((resolve, reject)=>{
    let rand = Math.ceil(Math.random()*100)
    console.log(rand)
    if (rand >  50) {
        setTimeout(resolve("SAQIB Third"),3000)
    } else {
        reject("SAQIB")
    }
    
})

// let promise4 = Promise.all([promp2,promp3])
// let promise4 = Promise.allSettled([promp2,promp3])
// let promise4 = Promise.race([promp2,promp3])
let promise4 = Promise.any([promp2,promp3])


promise4.then(resolve).catch(reject)





