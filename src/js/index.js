const sections = [
  document.getElementById("sec1"),
  document.getElementById("sec2"),
  document.getElementById("sec3"),
  document.getElementById("sec4"),
  document.getElementById("sec5")
]

let currentSection = 0
let isScrolling = false
let nextSection = 0

// Scroll function
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

// usanod setinhas para navegar pela pagina de forma pratica
window.addEventListener("keydown", (event) => {
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

// Observando elemento apareacer na tela para desativar o scroll