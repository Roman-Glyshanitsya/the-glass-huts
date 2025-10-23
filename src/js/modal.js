const openModalButton = document.querySelectorAll('#open-modal')
const backdrop = document.getElementById('backdrop')
const closeButton = document.getElementById('close-button')

openModalButton.forEach(button => {
  button.addEventListener('click', () => {
    backdrop.classList.remove('is-hidden')
  })
})

closeButton.addEventListener('click', () => {
  backdrop.classList.add('is-hidden')
})

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    backdrop.classList.add('is-hidden')
  }
})
