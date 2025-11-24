import Swiper from 'swiper'
import { EffectCards, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'

const swiper = new Swiper('.hut-gallery-swiper', {
  modules: [EffectCards, Autoplay],
  effect: 'cards',
  grabCursor: true,

  // Опціональні налаштування карт
  cardsEffect: {
    slideShadows: true,
    rotate: true,
    perSlideRotate: 2,
    perSlideOffset: 6,
  },

  loop: true,
  speed: 1500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
})
