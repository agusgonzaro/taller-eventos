function Saludar(){
    alert("Hola!");
}

const btn = document.querySelectorAll("div");
btn.addEventListener("click", () => {
    alert("Hola! Soy el div");
})