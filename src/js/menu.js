const offcanvasMenu = document.getElementById("offcanvasNavbar")
const offcanvasBottom = document.getElementById("offcanvasBottom")

// Bloquei ao scroll qunado menu esta aberto
offcanvasMenu.addEventListener('shown.bs.offcanvas', () => {window.minhaVariavel = true})
offcanvasBottom.addEventListener('shown.bs.offcanvas', () => {window.minhaVariavel = true})

// Permite scroll prop menu
offcanvasMenu.addEventListener('hidden.bs.offcanvas', () => {window.minhaVariavel = false})
offcanvasBottom.addEventListener('hidden.bs.offcanvas', () => {window.minhaVariavel = false})

