
//  MAPPING ENTIRE CONTENT OF HTML IN AN OBJECT
let a = document.body.children // BY USING CHILDREN U ONLY GET COLLECTION OF ELEMENTS
console.log(a)
console.log(a[1].childElementCount)
console.log(a[1].firstElementChild.nextElementSibling)
console.log(a[1].firstElementChild.parentElement)

let b = document.body.childNodes // WILL GIVE U CHILD NODES WITH TEXT AND COMMENTS INCLUDED
console.log(b)


//  ID SELECTOR
let c = document.getElementById("myId").style.backgroundColor = "red"

//  CLASS SELECTION
let d = document.getElementsByClassName("box")[2].style.backgroundColor="green"

//  WILL SELECT THE FIRST ELEMENT OF THE DOM

let e = document.querySelector(".box").style.backgroundColor="yellow"


let f= document.querySelectorAll(".box")[3].style.backgroundColor = "orange"
console.log(f)

let g = document.querySelectorAll(".box").forEach(e=>{
    console.log(e)
})

