document.getElementById("burger").addEventListener("click", function(){
    document.getElementById("menu-box").classList.add("open")
})

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("menu-box").classList.remove("open")
})

