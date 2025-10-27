import i18next from 'i18next'

const flags = {
  en: { src: '/img/icons/united-kingdom.png', alt: 'united-kingdom' },
  de: { src: '/img/icons/germany.png', alt: 'germany' },
  da: { src: '/img/icons/denmark.png', alt: 'denmark' },
}

const savedLang = localStorage.getItem('lang') || 'en'

i18next.init({
  lng: savedLang,
  debug: true,
  resources: {
    en: {
      translation: {
        'hero-title': 'Find peace in the Forest',
        'hero-text': 'Come and stay in out hut hotel near Mariager Fjord in Denmark',
        'section-text':
          'Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.',
      },
    },
    de: {
      translation: {
        'hero-title': 'Finden Sie Ruhe im Wald',
        'hero-text':
          'Kommen Sie und übernachten Sie in unserem Hüttenhotel in der Nähe des Mariager Fjords in Dänemark',
        'section-text':
          'Die drei exklusiven und komfortablen Hütten von Løvtag, Et, Ro und Ly, wurden vom Architekten Sigurd Larsen entworfen. Sie verfügen alle über einen offenen Raum mit einem Doppelbett, einem Doppelschlafsofa, einer Küche, einer separaten Toilette und einer Außendusche. Auf dem Dach, umgeben von Baumkronen, befindet sich eine Terrasse, die etwa neun Meter über dem Boden liegt. Die Hütten sind um hohe, alte Bäume herum gebaut, die das gesamte Haus vom Boden bis zur Decke durchziehen.',
      },
    },
    da: {
      translation: {
        'hero-title': 'Find fred i skoven',
        'hero-text': 'Kom og bo i vores hyttehotel nær Mariager Fjord i Danmark',
        'section-text':
          'Løvtags tre eksklusive og komfortable hytter, Et, Ro og Ly, er tegnet af arkitekt Sigurd Larsen. De har alle et åbent rum med en dobbeltseng, en dobbelt sovesofa, køkken, separat toilet og en udendørs bruser. På taget, omgivet af trætoppe, er der en terrasse, som er omkring ni meter over jorden. Hytterne er bygget op omkring høje, gamle træer, der går gennem hele hytten fra gulv til loft.',
      },
    },
  },
})

// === Оновлення текстів ===
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    el.textContent = i18next.t(key)
  })
}

// === Оновлення прапора та меню ===
function updateFlagsMenu(currentLang) {
  const mainBtn = document.querySelector('.main-lang img')
  const submenu = document.querySelector('.languages__list--submenu')

  // Оновлюємо головний прапор
  mainBtn.src = flags[currentLang].src
  mainBtn.alt = flags[currentLang].alt

  // Очищаємо попереднє меню
  submenu.innerHTML = ''

  // Додаємо решту прапорів
  Object.entries(flags).forEach(([lang, { src, alt }]) => {
    if (lang !== currentLang) {
      const li = document.createElement('li')
      li.classList.add('languages__list--submenu-item')
      li.innerHTML = `
        <button data-lang="${lang}" class="languages__button">
          <img class="language__image" src="${src}" alt="${alt}" />
        </button>
      `
      submenu.appendChild(li)
    }
  })

  // Навішуємо слухачі на нові кнопки
  submenu.querySelectorAll('.languages__button').forEach(btn => {
    btn.addEventListener('click', e => {
      const lang = e.currentTarget.dataset.lang
      changeLanguage(lang)
    })
  })
}

// === Зміна мови ===
function changeLanguage(lang) {
  i18next.changeLanguage(lang)
  localStorage.setItem('lang', lang)
  updateContent()
  updateFlagsMenu(lang)
}

// === Початковий рендер ===
updateContent()
updateFlagsMenu(savedLang)
