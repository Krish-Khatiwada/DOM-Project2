let container = document.querySelector(".container")
let love = document.querySelector("#love")
let like = document.querySelector("#like")

container.addEventListener("dblclick", function () {
    love.style.transform = "translate(-50%, -50%) scale(1)"
    love.style.opacity = "0.8"

    setTimeout(() => {
        love.style.opacity = "0"
    }, 1000);

    setTimeout(() => {
        love.style.transform = "translate(-50%, -50%) scale(0)"
    }, 1000);

    like.style.color = "red"
    like.setAttribute("class", "ri-heart-fill")
})

let click = 1
like.addEventListener("click", function () {
    if (click == 1){
        like.style.color = "red"
        like.setAttribute("class", "ri-heart-fill")
        click++
   }
    else{
        like.style.color = "#fff"
        like.setAttribute("class", "ri-heart-line")
        click--
    }

})