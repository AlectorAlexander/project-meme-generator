

let textoInsert = document.querySelector("#text-input")
let campoTexto = document.getElementById("meme-text")

textoInsert.addEventListener("keyup", insereTexto)

function insereTexto () {
   let valorInput = textoInsert.value
let h1 = document.createElement("p")
h1.innerText = valorInput

campoTexto.appendChild(h1)
if (campoTexto.childElementCount > 1) {
    let apagar = campoTexto.children[0]
    apagar.parentNode.removeChild(apagar)

}
}

let memeInsert = document.getElementById("meme-insert")

memeInsert.addEventListener("change", insereImagem)

//Referência que sem ela eu não seria nada: https://www.youtube.com/watch?v=VElnT8EoEEM
function insereImagem () {
    console.log(memeInsert.value)
    const file = memeInsert.files[0]
    let meme = document.getElementById("meme-image")
    


    if (file) {
        meme.style.display = "block"
        
        const leitor = new FileReader();
    leitor.addEventListener("load", function() {

        meme.setAttribute("src", this.result)

    })
    leitor.readAsDataURL(file)

    
}


}

let fire = document.getElementById("fire")
let water = document.getElementById("water")
let earth = document.getElementById("earth")

fire.addEventListener("click", fogo)
water.addEventListener("click", agua)
earth.addEventListener("click", terra)
let imageContainer = document.getElementById("meme-image-container")


function fogo () {
    
    imageContainer.style.border = "3px dashed red"
}
function agua () {
    imageContainer.style.border = "5px double blue"


}
function terra () {
    imageContainer.style.border = "6px groove green"

}







let cMeme = document.querySelector("#préMemes")
for (let meme = 0; meme < cMeme.childElementCount; meme++) {
    const element = cMeme.children[meme];
    element.addEventListener("click", insereMeme)
}

function insereMeme (mm) {
    let memeId = document.getElementById("meme-image")
    
const id = mm.target
if (id.id == "meme-1"){
    memeId.style.display = "block"
    memeId.setAttribute("src", 'imgs/meme1.png')
} else if (id.id == "meme-2"){
    memeId.style.display = "block"
    memeId.setAttribute("src", 'imgs/meme2.png')

}else if (id.id == "meme-3"){
    memeId.style.display = "block"
    memeId.setAttribute("src", 'imgs/meme3.png')


}else if (id.id == "meme-4"){
    memeId.style.display = "block"
    memeId.setAttribute("src", 'imgs/meme4.png')

}
}







