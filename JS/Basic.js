// Variables in JS

//Primitive DT

//SS BB NN U
//String,Symbol   BigInt,Boolean,    Null,Number Undefine

let name = "Saqib"

let numb = 123

let mySymbol = Symbol()

let bigInt = 21423423423233232323.23232323

let nyBoolean = true

let undef;

let nul = null

console.log(typeof name)
console.log(typeof numb)
console.log(typeof mySymbol)
console.log(typeof bigInt)
console.log(typeof nyBoolean)
console.log(typeof undef)
console.log(typeof nul)


//User Define DT
//Objects

let person = {
    "name" : "Saqib",
    "regId" : 54438,
    "Program" : "BSCS",
    "Alive" : true,
    "Job" : function (name,prof) {
        console.log(`${name} is ${prof} by profession.`)
    }
}
person.Job("Saqib","Software Enggineer")
console.log(person)
person.child = {
    "Child One" : "Khizar",
    "Child Two" : "Amna",
}
