/*
console.log('Heloo');

let getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3000)
        },3000)
    })
}

console.log('Console1');

console.log('Console2');

console.log('Console3');


let loadData = getData()


//  FIRST APPROACH USING CALLBACK 
//  SINCE PROMISE RETURN WE CAN USE THEN CATCH

loadData.then((v) => {
    console.log(loadData)
    console.log(v)
    console.log('Console4');
    console.log('Console5');
})



//  APPROACH 2: ASYNC AWAIT 

console.log('Heloo');

let getData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3000)
        }, 3000)
    })
}

let main = async () => {
    console.log('Console1');

    console.log('Console2');

    console.log('Console3');


    let loadData = await getData()

    console.log(loadData)

    console.log("console 4")
}

main()

*/

//  FETCHING API


console.log('Heloo');

let getData = async (url) => {

    const result =[]

    for (const key in url) {
        if (Object.prototype.hasOwnProperty.call(url, key)) {

            try {
                let response = await fetch(url[key]);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let data = await response.json();
                console.log(data);
                result.push({ key, data });
            } catch (error) {
                console.error(`Error fetching data from ${url[key]}:`, error);
                result.push({ key, error: error.message });
            }
           
        }
    }

    return result


}


let main = async () => {
    console.log('Console1');

    console.log('Console2');

    console.log('Console3');

    let url = {
        one: "https://jsonplaceholder.typicode.com/todos/1",
        two: "https://jsonplaceholder.typicode.com/todos/12",
        three: "https://jsonplaceholder.typicode.com/todos/17",
        four: "https://jsonplaceholder.typicode.com/todos/21",
        five: "https://jsonplaceholder.typicode.com/todos/30",
    }


    let loadData = await getData(url)

    console.log(loadData)

    console.log("console 4")
}

main()










