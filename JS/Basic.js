/*
//DATA TYPE AND VARIABLES:

// PRIMITIVE DATA TYPES ARE SSBBNNU: STRING,SYMBOL,NUMB,NULL,BOOLEAN,BIGINT,UNDEFINE
let str = "SAQIB"
let numb = 1
let flt = 1.223233232
let undef = undefined
let non = null

//NON PRIMITIVE DATA TYPES: OBJECT

let myObj = {
    name : "SAQIB",
    "second name" : "Jamul",
    reg : 54438,
    job : function (eng) {
        console.log(`My job is ${eng}`)
    },
    fam : {
        father: "Jamil",
        isSiblings: true
    }
}

console.log(typeof str,typeof numb,typeof flt,typeof undef,typeof non)
console.log(myObj)
myObj.job("Software Engr")
console.log(myObj.fam)
console.log(myObj.fam.father)
myObj.fam.numOfSiblings = 4
console.log(myObj.fam)
console.log(myObj.fam.numOfSiblings)
*/

//  REVIEW AFTER A LONG TIME

//  Primitive data types are:
//  SSBBNNU -> string, symbol, bolean, bigint, numb, null, undefined

let name = "SAQIB"
let numb = 21
let bigInt = 52234552334545345
let sym = true
let undef = undefined
let nul = null

console.log(name,numb,bigInt,sym,undef,nul)
console.log(typeof name,typeof numb,typeof bigInt,typeof sym,typeof undef,typeof nul)

//  NON PRIMITIVE DATA TYPE: OBJ

let myObj = {
    "my name" : "SAQIB",
    "Reg Id" : 54436,
    Dept: "BSCS",
    job : function(status) {
        console.log(`IA soon will do a job as a ${status}`)
    },
    anotherObj : {
        Skill : "Web Dev",
        Age: 22,
        relationship: "not any"
    }
}

console.log(myObj)
myObj.salary = 250000
console.log(myObj)
myObj.Dept = "SE"
console.log(myObj)

myObj.job("Software Engineer")

console.log(myObj.anotherObj)
console.log(myObj.anotherObj.Skill)


