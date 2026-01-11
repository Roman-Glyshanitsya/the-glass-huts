import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()

// Hero
tl.fromTo(
  '.hut__title',
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    delay: 1,
    duration: 1,
  },
)

// Main Gallery
const hutItems = document.querySelectorAll('.hut__item')

hutItems.forEach(item => {
  const image = item.querySelector('.hut__item__image-thumb')
  const text = item.querySelector('.hut__item__text-thumb')

  gsap.fromTo(
    image,
    { yPercent: 20 },
    {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: item,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    },
  )

  gsap.fromTo(
    text,
    { yPercent: -20 },
    {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: item,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    },
  )
})
