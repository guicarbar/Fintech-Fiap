// control const
const controlBtn = document.getElementById("btnControl")
var controlActive = true

const boxCadastro = document.getElementById("cadastrobox")
const boxLogin = document.getElementById("boxlogin")


const loginBlock = document.getElementById("btn-login-icon")
const cadastroBlock = document.getElementById("btn-cadastro-icon")

// go back da pagina
const link = document.getElementById("goBackIcon")


// change bloscks
function changeBlock(block) {
  if (block == "Login") {
    // Buttons
    loginBlock.classList.remove("d-none")
    cadastroBlock.classList.add("d-none")

    // Divs
    boxCadastro.classList.remove("d-none")
    boxLogin.classList.add("d-none")
  } else if (block == "Cadastro") {
    // Buttons
    loginBlock.classList.add("d-none")
    cadastroBlock.classList.remove("d-none")
    
    // Divs
    boxCadastro.classList.add("d-none")
    boxLogin.classList.remove("d-none")
  }
}

// evente functiion to link
link.addEventListener("click", () => {
  window.location.href = "../../index.html"
})

controlBtn.addEventListener("click", () => {
  if (controlActive == true) {
    changeBlock("Login")
    // Change alues
    controlActive = false
  } else if (controlActive == false) {
    changeBlock("Cadastro")
    // Change values
    controlActive = true
  }
})

window.addEventListener("load", () => {
  changeBlock("Login")
})