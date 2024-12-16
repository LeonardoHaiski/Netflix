// document = html
// querySelector = selecionar ou pegar uma classe do html
// ddEventListener = ouvindo alguem e te conta quando algo acontece

// LIGAR SOM
let botaoSom = document.querySelector(".botao-somOn")
let botaoSomOff = document.querySelector(".botao-somOff")
let video = document.querySelector(".video")
let audio = document.querySelector(".tudum")
let botaoAssistir = document.querySelector(".link-assistir")

botaoSom.addEventListener("click", DesligarSom)

function DesligarSom() {
    video.muted = !video.muted  // inverte o estado do audio
    botaoSomOff.style.display = "block"
    botaoSom.style.display = "none"
}

botaoSomOff.addEventListener("click", LigarSom)

function LigarSom() {
    video.muted = !video.muted  // inverte o estado do audio
    botaoSom.style.display = "block"
    botaoSomOff.style.display = "none"
}


// MOSTRAR MODAL
let botaoInfo = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
botaoInfo.addEventListener("click", mostrarModal)
modal.addEventListener("click", EsconderModal)

function mostrarModal() {
    modal.style.display = "block"
}

function EsconderModal() {
    modal.style.display = "none"
}

// TOCAR TUDUM

botaoAssistir.addEventListener("click", Tudum)

function Tudum() {
    audio.play()
}