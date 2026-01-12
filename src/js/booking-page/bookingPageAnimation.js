import { gsap } from 'gsap'

const tl = gsap.timeline()

// Hero
tl.fromTo(
  '.booking__title',
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
).fromTo(
  '.booking__adress-link',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  },
)
