document.querySelector("#hamburger").addEventListener("click",function(){
    document.querySelector(".nav").classList.add("nav-sub")
    document.querySelector(".close").style.display="flex"
    this.classList.remove("hamburger") 
    this.classList.add("hamburger-sub")
    
})

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector("nav").classList.remove("nav-sub")
    this.style.display="none"
    document.querySelector("#hamburger").classList.add("hamburger")
    document.querySelector("#hamburger").classList.remove("hamburger-sub")
})