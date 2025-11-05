import { gsap } from 'gsap'

const tl = gsap.timeline()

tl.fromTo(
  '.hut__title',
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  },
)
