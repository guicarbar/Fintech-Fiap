const offcanvasMenu = document.getElementById("offcanvasNavbar")
const offcanvasBottom = document.getElementById("offcanvasBottom")

offcanvasMenu.addEventListener('shown.bs.offcanvas', () => {window.minhaVariavel = true})
offcanvasBottom.addEventListener('shown.bs.offcanvas', () => {window.minhaVariavel = true})

offcanvasMenu.addEventListener('hidden.bs.offcanvas', () => {window.minhaVariavel = false})
offcanvasBottom.addEventListener('hidden.bs.offcanvas', () => {window.minhaVariavel = false})

