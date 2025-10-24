import i18next from 'i18next'

i18next.init({
  lng: 'en', // мова за замовчуванням
  debug: true, // зручно на етапі розробки
  resources: {
    en: {
      translation: {
        'hero-title': 'Find peace in the Forest',
        'hero-text': 'Come and stay in out hut hotel near Mariager Fjord in Denmark',
      },
    },
    de: {
      translation: {
        'hero-title': 'Finden Sie Ruhe im Wald',
        'hero-text':
          'Kommen Sie und übernachten Sie in unserem Hüttenhotel in der Nähe des Mariager Fjords in Dänemark',
      },
    },
    da: {
      translation: {
        'hero-title': 'Find fred i skoven',
        'hero-text': 'Kom og bo i vores hyttehotel nær Mariager Fjord i Danmark',
      },
    },
  },
})

// Функція оновлення контенту
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    el.textContent = i18next.t(key)
  })
}

// Початковий рендер
updateContent()

// Обробник перемикання мови
document.querySelectorAll('.languages__button').forEach(btn => {
  btn.addEventListener('click', e => {
    // e.currentTarget — завжди button, навіть якщо клік по <img>
    const lang = e.currentTarget.dataset.lang
    if (lang) {
      i18next.changeLanguage(lang)
      updateContent()
    }
  })
})
