// Elements for navgation
const sections = [
  document.getElementById("sec1"),
  document.getElementById("sec2"),
  document.getElementById("sec3"),
  document.getElementById("sec4"),
  document.getElementById("sec5")
]

// vars for link
const link1 = document.getElementById("btnLink1")
const link2 = document.getElementById("btnLink2")

// Vars for js
let currentSection = 0
let isScrolling = false
let nextSection = 0

// Scroll Function
function scrollToSection(index) {
  if (index < 0 || index >= sections.length) return

  isScrolling = true

  sections[index].scrollIntoView({
    behavior: "smooth"
  })

  currentSection = index

  setTimeout(() => {
    isScrolling = false
  }, 800)
}

// Usando rodinha do mouse para navegar plea pagina de forma pratica
window.addEventListener("wheel", (event) => {
  // Observando elemento apareacer na tela para desativar o scroll
  if (window.minhaVariavel == true) {return}

  if (isScrolling) return

  if (event.deltaY > 0) {
    if (currentSection >= currentSection.length -1) {
      nextSection = currentSection.length = -1
    } else {
      nextSection = currentSection + 1
    }
    scrollToSection(nextSection)
  } else {
    if (currentSection <= 0) {
      nextSection = 0
    } else {
      nextSection = currentSection - 1
    }
    scrollToSection(nextSection)
  }
})

// usando setinhas para navegar pela pagina de forma pratica
window.addEventListener("keydown", (event) => {
  // Observando elemento apareacer na tela para desativar o scroll
  if (window.minhaVariavel == true) {return}

  if (event.key == "ArrowDown") {
    if (currentSection >= currentSection.length -1) {
      nextSection = currentSection.length = -1
    } else {
      nextSection = currentSection + 1
    }
    scrollToSection(nextSection)
  }

  if (event.key == "ArrowUp") {
    if (currentSection <= 0) {
      nextSection = 0
    } else {
      nextSection = currentSection - 1
    }
    scrollToSection(nextSection)
  }
})


// move to link for btns
link1.addEventListener("click", () => {
  window.location.href = "src/pages/login.html"
})

link2.addEventListener("click", () => {
  window.location.href = "src/pages/login.html"
})
