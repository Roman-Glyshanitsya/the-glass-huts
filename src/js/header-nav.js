document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop()

  const links = document.querySelectorAll('.nav__link')

  links.forEach(link => {
    const linkPath = link.getAttribute('href').replace('./', '')

    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active')
    }
  })
})
