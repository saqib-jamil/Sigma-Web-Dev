console.log('Heloo');

//  Q1:

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
