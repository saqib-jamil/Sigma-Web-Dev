let num1 = parseInt(prompt("Enter First Numb: "))

let num2 = parseInt(prompt("Enter Second Numb: "))

let opt = prompt("Enter an Operator")

let rand = Math.floor(Math.random() * 100)


let myFunc = (randNumb) => {
    console.log(randNumb)
    switch (true) {
        case (randNumb <= 10):
            switch (opt) {
                case "+":
                    console.log(num1 - num2)
                    break;

                case "*":
                    console.log(num1 + num2)
                    break;

                case "-":
                    console.log(num1 / num2)
                    break;

                case "/":
                    console.log(num1 ** num2)
                    break;

                default:
                    break;
            }

            break;

        default:
            switch (opt) {
                case "+":
                    console.log(num1 + num2)
                    break;

                case "*":
                    console.log(num1 * num2)
                    break;

                case "-":
                    console.log(num1 - num2)
                    break;

                case "/":
                    console.log(num1 / num2)
                    break;

                default:
                    break;
            }
            break;
    }



}
myFunc(rand)