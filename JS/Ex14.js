
const mainDiv = document.querySelector(".main")


let txt = ["Initializing Hacking", "Reading Ur Files", "Passsword File Detected", "Sending all passwords and Personal File to Server", "cleaning Up"]

let seq = async (rand) => {
  
  return new Promise((resolve, reject) => {

    try {
      setTimeout(resolve, rand);
    } catch (error) {
      console.log(reject, error);

    }

  })
}

let main = async (arr) => {
  

  for (const element of arr) {


    let rand = Math.ceil(Math.random() * 7000)
    

    await seq(rand)
    console.log(element);

    EleCreat(mainDiv,element)
    

  }
  
}

main(txt)

let EleCreat = (mainDiv,ele) => {


  let newDiv = document.createElement("div")

  newDiv.setAttribute("class", "content")


  let newHead = document.createElement("h3")

  newHead.innerHTML = ele + ". ."

  newDiv.appendChild(newHead)

  mainDiv.appendChild(newDiv)

}


