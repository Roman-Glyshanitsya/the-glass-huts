document.addEventListener('DOMContentLoaded', () => {
  const pageTransition = document.getElementById('page-transition')
  const links = document.querySelectorAll('header .nav__link')

  if (!pageTransition) return

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const href = link.getAttribute('href')

      pageTransition.style.transform = 'translateX(0)'
      setTimeout(() => {
        window.location.href = href
      }, 1500)
    })
  })
})
