const navLinks = document.querySelectorAll('.nav__link')

console.log(navLinks)

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()

    document.body.classList.add('fade-out')

    // Переходимо до нової сторінки через короткий час після зникнення
    setTimeout(() => {
      window.location.href = link.href
    }, 1000) // 500ms збігається з тривалістю анімації
  })
})

window.addEventListener('load', () => {
  document.body.classList.add('fade-in')
})
