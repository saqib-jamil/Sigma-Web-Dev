console.log('Heloo');

//  Q1:

/*

let srcUrl = `https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js`

let resolve = (value) => {
    alert(`${value} Ur Script is loaded`)
}

let reject = (value, error) => {
    alert(`${value}Ur Script is not loaded because ${error}`)
}



let myFunc = async (src) => {

    return new Promise((resolve, reject) => {

        try {
            let scropt = document.createElement("script")
            scropt.setAttribute("src", src)
            scropt.onload = resolve("SAQIB")
            
        } catch (error) {

            reject("SAQIB", error)
        }
    })

}

let result = myFunc(srcUrl)

result.then(resolve).catch(reject)



//  Q2:

let srcUrl = `https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js`

let resolve = (value) => {
    alert(`${value} Ur Script is loaded`)
}

let reject = (error) => {
    alert(`Ur Script is not loaded because ${error}`)
}



let myFunc = async (src) => {

    return new Promise((resolve, reject) => {


        let scropt = document.createElement("script")
        scropt.setAttribute("src", src)
        scropt.onload = resolve("SAQIB")
        scropt.onerror = reject(error)


    })

}

let main = async () => {

    let result = await myFunc(srcUrl)
    console.log(result)

    try {
        
        resolve(result)
    } catch (error) {
        reject(error)
    }


}

main()

*/

//  Q3:

let resolve = (params) => {
  alert(params)
}

let reject = (error) => {
  alert(`${error} bcz of this error promise reject hoa`)
}


let pmRes = async () => {

    return new Promise((resolve, reject) => {
        setTimeout(reject("NA KAKA NA KAKA"),3000)
    })

}

let mainFunc = async () => {
    
    
    try {
        let val = await pmRes()
    
        console.log(val)
        resolve(val)
        
    } catch (error) {
        console.log(error)
        reject(error)
    }
}

mainFunc()




