//  VIEWS R INTEGER

let addCard = () => {

    let mainDiv = document.querySelector(".main")

    let a = userInput()

    let html = `<div class="alpha">
    <div class="img">
        <img src="${a.myImg}" alt="" srcset="">
    </div>
    <div class="txt">
        <h4 class="title">${a.title}</h4>
        <p class="cName">${a.channel}</p>
        <p class="duration">${a.duration}</p>
        <p class="views">${a.views}k</p>
        <p class="old">${a.old}</p>
    </div>
</div>`

    
    mainDiv.innerHTML = mainDiv.innerHTML + html







}

let userInput = () => {
    let title = prompt("Enter ur Title: ")

    let channel = prompt("Enter ur Channel name: ")

    let views = Number(prompt("Enter Numb of Views: "))

    let duration = prompt("Enter Duration of the video: ")

    let old = prompt("Enter how old ur video is: ")

    let myImg = prompt("Enter URL of an Image: ")


    return {
        title: title,
        channel: channel,
        views: views,
        duration: duration,
        old: old,
        myImg: myImg
    }
}