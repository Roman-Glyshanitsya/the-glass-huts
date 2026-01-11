import Swiper from 'swiper'
import { EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const swiper = new Swiper('.hero-swiper', {
  modules: [EffectFade, Autoplay],
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
})
