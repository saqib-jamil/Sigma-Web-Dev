//  VIEWS R INTEGER

let addCard = () => {

    let mainDiv = document.querySelector(".main")

    let a = userInput()

    let newDiv = document.createElement("div")

    newDiv.setAttribute("class", "cards")

    let txtNode = document.createElement('p')

    txtNode.innerHTML = a.title

    let txtNode1 = document.createElement('p')

    txtNode1.innerHTML = a.channel

    let txtNode2 = document.createElement('p')

    txtNode2.innerHTML = `${a.views}k`

    let txtNode3 = document.createElement('p')

    txtNode3.innerHTML = `${a.duration}`

    let txtNode4 = document.createElement('p')

    txtNode4.innerHTML = `${a.old}`


    newDiv.appendChild(txtNode)

    newDiv.appendChild(txtNode1)

    newDiv.appendChild(txtNode2)

    newDiv.appendChild(txtNode3)

    newDiv.appendChild(txtNode4)

    mainDiv.appendChild(newDiv)







    // FOR IMAGE

    let newImg = document.createElement("img")

    newImg.setAttribute("src", a.myImg)


    newDiv.appendChild(newImg)



}

let userInput = () => {
    let title = prompt("Enter ur Title: ")

    let channel = prompt("Enter ur Channel name: ")

    let views = Number (prompt("Enter Numb of Views: "))

    let duration = prompt("Enter Duration of the video: ")

    let old = prompt("Enter how old ur video is: ")

    let myImg = prompt("Enter URL of an Image: ")


    return {
        title: title,
        channel : channel,
        views : views,
        duration : duration,
        old : old,
        myImg: myImg
    }
}