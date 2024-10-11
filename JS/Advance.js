


//  IIFE IMEDIATELY INVOKE FUNCTION EXPRESSION

let myFunc = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(50)
        }, 20);
    })

}

let sum = (a,b,c)=>{
    return a + b +c
}

// IIFE

(async () => {

    let a1 = await myFunc()
    console.log(a1);

    let b1 = await myFunc()
    console.log(b1);

    //  ARRAY DESTRUCTURING

    let [x, y] = [1, 2, 3, 4, 5, 6]

    console.log(x, y);

    let [x1, y1, ...myArr] = [1, 2, 3, 4, 5, 6]

    console.log(x1, y1, myArr);


    //  OBJ DESTRUCTURING

    let myObj = {
        a: 10,
        b: 20
    }

    let { a, b } = myObj
    console.log(a, b);

    let arr = [10,20,30]

    console.log(sum(arr[0],arr[1],arr[2]));

    //  SAMR WITH SPREAD OPERATOR

    console.log(sum(...arr));
    
    



}
)()








