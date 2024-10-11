

//  Q1: Guess the NUMBERS:

/*

let rand = Math.ceil(Math.random() * 100)
console.log(rand);

let total = 100

let numOfGuess = 0
let user = 0

while (rand != user) {
    user = parseInt(prompt("Enter a numb to guess the orignal numb: "))
    if (user == rand) {
        alert(`U guess the right numb: your score is ${total - numOfGuess}`);
         

    } else if(user > rand) {
        numOfGuess++
        alert("U guess the greater numb")
        console.log(numOfGuess);
    } else if(user < rand){
        numOfGuess++
        alert("U guess the lesser numb")
        console.log(numOfGuess);
    }
}



//  Q2: SNAKE WATER GUN:

let game = ["S", "W", "G"]

let rand = Math.floor(Math.random() * 3)

console.log(game[rand])
let user
let newUser = ''
while (newUser != game[rand]) {
    user = prompt("Enter S,W, and G")

    newUser = user.toUpperCase()
    switch (true) {
        case (newUser == game[rand] && newUser == "G"):
            alert(`Ur guess is correct and it is ${game[rand]}`)
            break;
        case (newUser == game[rand] && newUser == "S"):
            alert(`Ur guess is correct and it is ${game[rand]}`)
            break;
        case (newUser == game[rand] && newUser == "W"):
            alert(`Ur guess is correct and it is ${game[rand]}`)
            break;
        default:
            alert(`U guess the wong one`)
            continue;
    }
}

*/


//  Q3: TELL ME A JOKE

