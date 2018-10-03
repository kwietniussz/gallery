const miniatures = document.querySelectorAll(".min");
const close = document.querySelector(".far");
const popUp = document.querySelector(".popup");
const section = document.querySelector(".section")
let link = ""
let img


miniatures.forEach((miniature) => {
    miniature.addEventListener("click", () => {
        link = miniature.getAttribute("data-link");
        console.log(link);
        popUp.classList.add("active");
        img = document.createElement("img");
        img.src = link;
        popUp.appendChild(img);
    })
})
close.addEventListener("click", () => {
    const childToRemove = document.querySelector(".popup>img");
    popUp.removeChild(childToRemove);
    popUp.classList.remove("active");
})