import { gsap } from 'gsap'

const tl = gsap.timeline()

tl.fromTo(
  '.hero__text',
  {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
  },
  1,
).fromTo(
  '.hero__title',
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
