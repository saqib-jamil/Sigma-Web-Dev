
let arr = [1,2,3,4]

console.log(arr.length)

console.log(arr[3])

console.log(arr.join(" Geo "))

console.log(arr.pop()) 

console.log(arr)

console.log(arr.shift())

console.log(arr)

console.log(arr.push(100))

console.log(arr.push("SAQIB"))

console.log(arr)

console.log(arr.unshift("Pakistan"))

console.log(arr)

console.log(delete arr[0]) // Val del but Space will be reserved

console.log(arr)

let a1 = [1,2]

let a2 = [3,4]

let a3 = [5,6]

console.log(a1.concat(a2,a3))

//  SORTING AN ARRAY

let unsort = [99,20,1,56,45,10,103]


let compFunc = (a,b)=>{
        console.log(a,b)
    return a - b
}
let val = unsort.sort(compFunc)
console.log(val)

//  SLICE
// Make a copy of orignal array

let myArr = [1,2,3,4,5]
console.log(myArr.slice(-2))
console.log(myArr)

console.log(myArr.slice(2,6))
console.log(myArr)

//  SPLICE
// Changes made in orignal array

console.log(myArr.splice(0,3))
console.log(myArr)

console.log(myArr.splice(0,1,200,300,400))
console.log(myArr)

//  REVERSE
let fruits = ["Banana","Mango","Appricote"]
console.log(fruits.reverse())

