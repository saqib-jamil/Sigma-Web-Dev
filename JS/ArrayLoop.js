let arr = [1,2,3,4,5]

//  FOR EACH

arr.forEach((val,index,arr)=>{
    console.log(val,index,arr)
})

//  FOR OF

for (const element of arr) {
    console.log(element)
}

//  MAP
//  can make new Array from the orignal one

let newArr = arr.map(e=>{
    return e ** 2
})
console.log(arr)
console.log(newArr)

//  FILTER

const greaterFunc =e=>{
    if (e > 5) {
        return true
    }
}
let greaterArr = newArr.filter(greaterFunc)
console.log(greaterArr)

//  REDUCE

let myArr = [1,2,3,4,5]

let result = myArr.reduce((prev,curr)=>{
    return prev * curr
})

console.log(result)