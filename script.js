

let textoInsert = document.getElementById("text-input")
let campoTexto = document.getElementById("meme-text")

textoInsert.addEventListener("keyup", function () {
    if (event.keyCode === 13){
    insereTexto()
}} )

function insereTexto () {
   let valorInput = textoInsert.value
   textoInsert.value = '' 
let h1 = document.createElement("p")
h1.innerText = valorInput

campoTexto.appendChild(h1)
}

let memeInsert = document.getElementById("meme-insert")

memeInsert.addEventListener("change", insereImagem)

//Referência que sem ela eu não seria nada: https://www.youtube.com/watch?v=VElnT8EoEEM
function insereImagem () {
    const file = memeInsert.files[0]
    let imageContainer = document.getElementById("meme-image-container")
    const meme = imageContainer.querySelector("#meme")


    if (file) {
        meme.style.display = "block"
        
        const leitor = new FileReader();
    leitor.addEventListener("load", function() {

        meme.setAttribute("src", this.result)

    })
    leitor.readAsDataURL(file)

    
}


}







