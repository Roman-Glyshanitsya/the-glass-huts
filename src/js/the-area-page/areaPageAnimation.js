import { gsap } from 'gsap'

const tl = gsap.timeline()

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
