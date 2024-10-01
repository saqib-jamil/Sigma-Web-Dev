
//  FACT USING REDUCE

let fact1 = []

for (let index = 1; index <= 6; index++) {
    fact1.push(index)
}
let factLeng = fact1.length

let result = fact1.reduce((one,two)=>{
    return one * two
})

console.log(`The Factorial of ${factLeng} is ${result}`)

//  FACT USING FOR LOOP
let result1 = 1
let j=5
for (let i=j; i>1; i--) {
    result1 *= i
}

console.log(`The Factorial of ${j} is ${result1}`)

// ARRAY LOOP MAKING METHOD
let myFact =(numb)=>{
    let a =Array.from(Array(numb+1).keys())
    console.log(a.slice(1))
}
myFact(6)


