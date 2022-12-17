let contC = document.querySelectorAll(".container-content");
let answer = document.querySelectorAll(".answer");


/*for(let i = 0; i < contC.length; i++){
    contC[i].addEventListener("click", () => {
        contC[i].classList.toggle("active");
    })
}
*/

contC.forEach((item) => {
    item.addEventListener("click",()=>{
        item.classList.toggle("active");
    })
})

