
let adj = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let shopeName = {
    1: "Engine",
    2: "Food",
    3: "Garment"
}

let word = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

let randNumb = Math.ceil(Math.random() * 3)
let randNumb2 = Math.ceil(Math.random() * 3)
let randNumb3 = Math.ceil(Math.random() * 3)



let myFunc = () => {

    let newName = `${adj[randNumb]}  ${shopeName[randNumb2]}  ${word[randNumb3]}`
    console.log(newName)

}