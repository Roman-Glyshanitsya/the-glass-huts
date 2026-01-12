import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()

// Hero
tl.fromTo(
  '.area__title',
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
  .fromTo(
    '.area__hero__adress-link',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    },
  )
  .fromTo(
    '.area__hero__button',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    },
  )

// Main Gallery
const areaItems = document.querySelectorAll('.parallax-item')

areaItems.forEach(item => {
  const image = item.querySelector('.parallax-image')
  const text = item.querySelector('.parallax-text')

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

// Activities Title
gsap.from('.area__gallery__title', {
  scrollTrigger: {
    trigger: '.area__gallery',
    start: '-10% center',
    end: '+=300px',
    scrub: true,
  },
  x: -100,
  opacity: 0,
})
