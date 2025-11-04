import Swiper from 'swiper'
import { EffectCube, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cube'

const swiperElements = document.querySelectorAll('.swiper')

const delays = [600, 0, 1200]

swiperElements.forEach((el, index) => {
  setTimeout(() => {
    new Swiper(el, {
      modules: [EffectCube, Autoplay],
      effect: 'cube',
      grabCursor: true,
      loop: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed: 1500,
    })
  }, delays[index])
})
