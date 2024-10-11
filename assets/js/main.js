const elBtnClick = [...document.querySelector(".btn-click")];
const elBtnActive = [...document.querySelector('.btn-active')];


for (let i = 0; i <elBtnClick.length; i++) {
elBtnClick[i].addEventListener("click" , function () {
    setTimeout(( )=> {
        elBtnActive[i].classList.toggle("d-none");   
    },)
})
}