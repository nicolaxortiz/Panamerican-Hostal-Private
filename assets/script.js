const btnlogin = document.querySelector(".user");
const btnlogin1 = document.querySelector(".user-desk");
const login = document.querySelector(".login")
const menu = document.querySelector(".menu")

btnlogin.addEventListener("click", () =>{
    login.classList.toggle("invisible")
})

btnlogin1.addEventListener("click", () =>{
    login.classList.toggle("invisible")
})

menu.addEventListener("click", () =>{
    login.classList.add("invisible")
})