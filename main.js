const menu = document.querySelector(".menu")
const abrir = document.querySelector(".aRefs")
const close = document.querySelector(".closeIcon")

const estado = "off"

const aparecer = () => {
    menu.style.display = "block"
    menu.classList.remove("desaparecer")
    menu.classList.add("aparecer")
}
const cerrar = () => {
    menu.style.display = "none"
    menu.classList.remove("aparecer")
    menu.classList.add("desaparecer")
}

abrir.addEventListener("click", aparecer)
close.addEventListener("click", cerrar)