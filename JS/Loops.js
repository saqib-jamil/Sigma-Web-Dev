//  FOR LOOP

let a = 1

for (let i = a; i <= 10; i++) {
    console.log(i)
}

//  WHILE LOOP  

while (a <= 10) {
    console.log(a)
    a++
}

//  FOR IN LOOP (used to get keys of the obj)

let myObj = {
    name: "Saqib",
    program: "BSCS",
    reg: 54438
}

for (const key in myObj) {
    if (Object.prototype.hasOwnProperty.call(myObj, key)) {
        console.log(key)
        const val = myObj[key];
        console.log(`Thats the key ${key} of our obj`)
        console.log(`Thats the value ${val} of our obj`)

    }
}


//  FOR OF mainly use for String, Array

let myName = "SAQIB"
for (const element of myName) {
    console.log(element)
}

let myArr = ["City", "Pak", 1]

for (const element of myArr) {
    console.log(element)
}